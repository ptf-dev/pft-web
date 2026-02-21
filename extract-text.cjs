const fs = require('fs');
const data = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

function findText(node, depth) {
  if (node.type === 'TEXT') {
    const bb = node.absoluteBoundingBox || {};
    const s = node.style || {};
    const fills = (node.fills || []).filter(f => f.type === 'SOLID');
    const color = fills[0] ? fills[0].color : null;
    const hex = color ? '#' + [color.r, color.g, color.b].map(c => Math.round(c*255).toString(16).padStart(2,'0')).join('') : '?';
    console.log(depth + 'TEXT: ' + JSON.stringify(node.characters || node.name) + ' | size:' + (s.fontSize||'?') + ' weight:' + (s.fontWeight||'?') + ' color:' + hex + ' x:' + Math.round(bb.x||0) + ' y:' + Math.round(bb.y||0) + ' w:' + Math.round(bb.width||0));
  }
  if (node.type === 'FRAME' || node.type === 'GROUP' || node.type === 'INSTANCE' || node.type === 'COMPONENT') {
    const bb = node.absoluteBoundingBox || {};
    console.log(depth + node.type + ': ' + node.name + ' | x:' + Math.round(bb.x||0) + ' y:' + Math.round(bb.y||0) + ' w:' + Math.round(bb.width||0) + ' h:' + Math.round(bb.height||0));
  }
  if (node.children) {
    for (const c of node.children) findText(c, depth + '  ');
  }
}
findText(data.result, '');
