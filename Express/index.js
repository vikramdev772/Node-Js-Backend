
const express = require("express");

const app = express();


app.get("/", function (req, res) {

    res.send(" hi there Learning rout ");


})

app.get("/r1", (req, res) => res.send("Routing : welcome to http server is runing continus by nodemon"));


app.get("/ip", (q, r) => {
    r.send(" ipconfig / ifconfig get the ipv4 :  192.168.1.79  ==>  192.168.1.79:3000/ip")


})


    const sum=function(n){

        let ans=0;
        for(let i=1;i<=n;i++){
            ans=ans+i;
        }
        return ans;
    }

    app.get("/sum",function(req,res){res.send(" Enter the input : by using query parameters ")})
    app.get("/s",(req,res)=>{
        const num=req.query.n;
        const ans = sum(num);
        res.send(" hi your answer is : "+ans+" use port\route\?varibale = number "); 

    })

app.listen(3000);
