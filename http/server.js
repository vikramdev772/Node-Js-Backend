const http = require("http");
const port = 8000;


const server = http.createServer((req,res)=>res.end(" server is started \n"));

server.listen(port,()=>console.log(`\n\t server is running port ${port}`));
