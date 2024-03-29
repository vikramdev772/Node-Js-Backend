const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8090;
app.use(express.json());
// app.use(bodyParser.json());

app.get("/",(req,res)=>res.send(" server is running ...! servers can talk to servers   "));

app.post("/sum", (req, res) => {
    const v = req.body.value;
    const s = (n) => {
        let a = 0;
        for (let i = 1; i <= n; i++) {
            a = a + i;
        }
        return a;
    };
    let answer = "Sum: " + s(v);
    const result = {
        sum: answer
    };
    res.status(200).send(result);
});


app.get("/fact",(req,res)=>{
    const v=req.query.value;
    const   fact=(n)=>{
        let f=1;
        for(let i=1;i<=n;i++){
            f*=i;
        }
        return f;
    }
    const ans=" fact : "+fact(v);
    const robj={
        factorial : ans
    }
    res.send(robj);
})

app.listen(port,()=>console.log(`\n\t server started ${port}`));