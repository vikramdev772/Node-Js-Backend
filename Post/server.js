const express = require("express");
const app=express();
const bodyParser=require('body-parser');
let port = 4040;
app.use(bodyParser.json());

app.get("/",(request,response)=>{
  response.send(" App is started ... !");
})

const postRequest = function(req,res){
  const {name,brand}=req.body;
  console.log("\n\t Name : ",name);
  console.log("\n\t Brand: ",brand);

  res.send("car submitted sucessfully ...!");
}
app.get("/api/cars",(req,res)=>res.send("server is running"));
app.post("/api/cars",postRequest);
app.listen(port,()=>console.log(`\n\t server is running on the port : ${port}`));



// server is running on the port : 4040

// Name :  vikram

// Brand:  benze



