const express = require("express");
const app = express();

const port = 5000;

const handleSum = (a) => {
    let s = 0;
    for (let i = 1; i <= a; i++) {
        s = s + i;
    }
    return s;
}

app.post("/sum", (req, res) => {
    var ans = req.headers.value;
    var sum = handleSum(ans);
    var result = "The sum is: " + sum;
    res.send(result);
});

app.get("/mul",(req,res)=>{
    const m=(n)=>{
        let f=1;
        for(var i=1;i<=n;i++){
                f=f*i;
        }
        return f
    }
    var r=req.query.value;
    let result =m(r);
    console.log(result);
    
    res.send(" Result : "+result);
})

app.get("/get", (req, res) => res.send("   Server is started...!"));

app.listen(port, () => console.log(`\n\t Server is running on port: ${port}`));
