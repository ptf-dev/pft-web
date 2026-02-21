const WebSocket = require('ws');
const fs = require('fs');

const CHANNEL = 'hcfmtbwp';
let msgId = 0;

function send(ws, command, params = {}) {
  const id = String(++msgId);
  ws.send(JSON.stringify({
    id, type: 'message', channel: CHANNEL,
    message: { id, command, params: { ...params, commandId: id } }
  }));
  return id;
}

function waitFor(ws, id, timeout = 30000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('timeout')), timeout);
    const handler = (raw) => {
      try {
        const d = JSON.parse(raw);
        if (d.type === 'message' && d.message?.commandId === id) {
          clearTimeout(timer);
          ws.off('message', handler);
          resolve(d.message);
        }
      } catch {}
    };
    ws.on('message', handler);
  });
}

async function main() {
  const ws = new WebSocket('ws://localhost:3055');
  await new Promise(r => ws.on('open', r));
  ws.send(JSON.stringify({ type: 'join', channel: CHANNEL }));
  await new Promise(r => setTimeout(r, 500));

  const cmd = process.argv[2];

  if (cmd === 'tree') {
    const nodeId = process.argv[3];
    const id = send(ws, 'get_node_children', { nodeId });
    const res = await waitFor(ws, id);
    console.log(JSON.stringify(res, null, 2));
  }

  if (cmd === 'export') {
    const nodeId = process.argv[3];
    const format = process.argv[4] || 'PNG';
    const outFile = process.argv[5] || 'export.' + format.toLowerCase();
    const id = send(ws, 'export_node_as_image', { nodeId, format, scale: 2 });
    const res = await waitFor(ws, id, 60000);
    if (res.result?.imageData) {
      const buf = Buffer.from(res.result.imageData, 'base64');
      fs.writeFileSync(outFile, buf);
      console.log(`Saved ${outFile} (${buf.length} bytes)`);
    } else {
      console.log('Export failed:', JSON.stringify(res));
    }
  }

  ws.close();
}

main().catch(e => { console.error(e); process.exit(1); });
