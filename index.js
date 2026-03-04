const http = require('http');
const https = require('https');

const REAL_URL = "https://raw.githubusercontent.com/MoonBunny-art/script.lua2/bae296cc06a66ae3f99377401d797322058cd66e/script.lua2";

http.createServer((req, res) => {
  const ua = (req.headers['user-agent'] || '').toLowerCase();
  
  // Browser blockieren
  const isBrowser = ua.includes("mozilla") || ua.includes("chrome") || ua.includes("safari") || ua.includes("firefox") || ua.includes("edge");
  
  if (isBrowser) {
    res.writeHead(404);
    res.end("JUNKIE SYSTEM\n\nerror:404");
  } else {
    // Alles andere (Executors) bekommt das Script
    https.get(REAL_URL, r => r.pipe(res));
  }
}).listen(process.env.PORT || 3000);
