
const fs=require("fs");

function fileRead(err,data){
    console.log(data);
}
fs.fileRead("api.txt","utf-8",fileRead);