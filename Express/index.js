
const express = require("express");

const app = express();


app.get("/", function(req,res){

    res.send(" hi there Learning rout ");

})


app.listen(3000);
