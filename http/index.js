
const http = require("http");
const os = require("os");

console.log("\n\t os type : ",os.type());
//os type : Linux
console.log("\n\t number of cores : ",os.length);
//number of cores : undefined 

console.log("\n\t host-Name : ",os.hostname());
//host-Name : DEKTOP-F5MP2JR

const networkInterface = os.networkInterfaces();

//const ipAddress = networkInterface['wlano'][0].address;

let ipAddress;
for(const key in networkInterface){
  const interfaceInfo = networkInterface[key];
  for(const entry of interfaceInfo){
    if( !entry.internal && entry.family === "Ipv4"){
      ipAddress = entry.address;
      break;
    }
  }
  if(ipAddress)break;
}

console.log("\n\t IpAdress : ",ipAddress);


