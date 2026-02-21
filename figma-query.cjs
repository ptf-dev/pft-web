const WebSocket = require('ws');
const fs = require('fs');
const CHANNEL = 'bxw7o9qp';
const ws = new WebSocket('ws://localhost:3055');
let msgId = 0;
let ready = false;

const cmd = process.argv[2];
const nodeId = process.argv[3];
const outFile = process.argv[4];

function send(command, params) {
  const id = String(++msgId);
  ws.send(JSON.stringify({
    id, type: 'message', channel: CHANNEL,
    message: { id, command, params: { ...params, commandId: id } }
  }));
  return id;
}

ws.on('open', () => {
  ws.send(JSON.stringify({ type: 'join', channel: CHANNEL }));
});

ws.on('message', (data) => {
  const d = JSON.parse(data.toString());
  if (d.type === 'system' && d.message && d.message.result && !ready) {
    ready = true;
    const params = nodeId ? { nodeId } : {};
    if (cmd === 'export') {
      params.format = 'PNG';
      params.scale = 2;
      setTimeout(() => send('export_node_as_image', params), 500);
    } else {
      setTimeout(() => send(cmd, params), 500);
    }
  }
  if ((d.type === 'message' || d.type === 'broadcast') && d.sender !== 'You') {
    if (d.message && d.message.result && d.message.result.imageData && outFile) {
      const buf = Buffer.from(d.message.result.imageData, 'base64');
      fs.writeFileSync(outFile, buf);
      console.log('Saved ' + outFile + ' (' + buf.length + ' bytes)');
    } else if (outFile) {
      fs.writeFileSync(outFile, JSON.stringify(d.message, null, 2));
      console.log('Saved JSON to ' + outFile);
    } else {
      console.log(JSON.stringify(d.message, null, 2));
    }
    ws.close();
    process.exit(0);
  }
});

setTimeout(() => { console.log('Timeout'); ws.close(); process.exit(1); }, 60000);
