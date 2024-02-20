

const express = require("express");
const app = express();
const port = 4050;

function middleware(req,res,next){
    console.log(" from inside middleware "+req.headers.value);
    next()
}

app.use(middleware); //registring the middleware 

function sum(value){
    var s=0;
    for(var i=0;i<=value;i++){
        s=s+i;
    }
    return s;
}

const hadleFirstRequest = (req,res)=>{
    // console.log(req.headers);
    var ans = req.headers.value;
    res.send(" Result : "+ans);
}

app.post("/sum",hadleFirstRequest);



app.listen(port,()=>console.log(`\n\t server is  running on port ${port}`));
