const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 4090;

let numberOfRequests =0 ;



app.get("/", (req, res) => res.send("Server is running...!"));

// function middleware1(req, res, next) {
//     console.log("\n\t from inside middleware: " + req.headers.value); 
//     numberOfRequests=numberOfRequests+1;
//     console.log(numberOfRequests);    
//     res.send(" Error from inside middleware ");
//     next(); 
// }

// app.use(middleware1);

app.use(bodyParser.json());


// from inside middleware: 20
// {
//   value: '20',
//   'user-agent': 'PostmanRuntime/7.32.1',
//   accept: '*/*',
//   'cache-control': 'no-cache',
//   'postman-token': '406f8dc4-fb16-4a67-9b97-b04a841464b9',
//   host: 'localhost:5200',
//   'accept-encoding': 'gzip, deflate, br',
//   connection: 'keep-alive',
//   'content-length': '0'
// }


function sum(n) {
    var s = 0;
    for (var i = 0; i <= n; i++) { 
        s = s + i;
    }
    console.log(" sum : "+s);
    return s;
}

app.post("/sum", (req, res) => {
    console.log(req.headers);
    var c = req.headers.value;
    var ans = sum(c);
    res.send("The sum: " + ans);
});


app.post("/s",(req,res)=>{
    console.log(req.body);//undefined
    const n=req.body.value;
    const ans=sum(n);
    res.send(` sum = ${ans}`);



})



app.listen(port, () => console.log(`\n\tServer started: ${port}`));

