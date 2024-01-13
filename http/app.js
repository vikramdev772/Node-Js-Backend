const http = require("http");
const os = require("os");

const app = http.createServer((req, res) => {
  console.log("\n\t New Request Received \n");
  console.log("\n\t", req.headers); // Extra info of the request
  res.end("    Hello from server \n");
});

const port = 8080;
const interfaces = os.networkInterfaces();

// Find the correct IPv4 address dynamically
let ipAddress;

outerLoop: for (const iface of Object.keys(interfaces)) {
  const ifaceInfo = interfaces[iface];
  for (const info of ifaceInfo) {
    if (info.family === "IPv4" && !info.internal) {
      ipAddress = info.address;
      break outerLoop;
    }
  }
}

// If no correct IPv4 address is found, default to '127.0.0.1'
const finalIpAddress = ipAddress || '127.0.0.1';

app.listen(port, () => console.log(`\n\t Server is started on http://${finalIpAddress}:${port}\n`));

console.log(`\n\t HTTP URL: http://${finalIpAddress}:${port}`);
