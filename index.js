const http = require('http');
const https = require('https');
const REAL_URL = "https://raw.githubusercontent.com/MoonBunny-art/script.lua2/bae296cc06a66ae3f99377401d797322058cd66e/script.lua2";
http.createServer((req, res) => {
  const ua = (req.headers['user-agent'] || '').toLowerCase();
  const ok = ["synapse","krnl","fluxus","delta","wave","evon","hydrogen"].some(e=>ua.includes(e));
  if (ok) { https.get(REAL_URL, r => r.pipe(res)); }
  else { res.writeHead(404); res.end("JUNKIE SYSTEM\n\nerror:404"); }
}).listen(process.env.PORT || 3000);
