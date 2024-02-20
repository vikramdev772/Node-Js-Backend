const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 4080;


app.get("/", (req, res) => res.send(" server is running sucessfully "));


app.use(bodyParser.json());

function sumofn(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s = s + i;
    }
    return s;
}

const handlesum = (req, res) => {
    // var v=req.headers.value;
    var v = req.body.value;
    if (v < 1000) {
        var s = sumofn(v);
        var result = " The sum : " + s;
        res.status(200);

        res.send(result);
    } else {
        res.status(411).send(" you have sent very big number the status code is : 411 ");
    }
}

app.post('/sum', handlesum);



// {
//     "value":5098

// }

app.post('/cal', (req, res) => {
    const value = req.body.value;
    const sum = sumofn(value);

    const m = (n) => {
        let f = 1;
        for (let i = 1; i <= n; i++) {
            f *= i;
        }
        return f;
    }
    var ans = m(value);
    var robj = {
        sum: sum,
        mul: ans
    }
    res.status(200).send(robj);

})


app.post('/mul', (req, res) => {
    const v = req.body.value;
    const m = (n) => {
        let f = 1;
        for (let i = 1; i <= n; i++) {
            f *= i;
        }
        return f;
    }
    var ans = m(v);
    var stringResult = " Mul : " + ans;
    res.status(200).send(stringResult);

})
// {
//     "result": 12997351
// }



function givepage(req, res) {
    res.send(`<head>
    <title>
        Hello from Page
    </title>
    <body>
        <center>
            <i>hi there </i>
        </center>
        
    </body>
</head>`)
}


app.get("/home", givepage);



app.get("/j",(req,res)=>{
    var obj={
        "name":"mark 42"
    }
    res.send(obj)
})


const path = require("path");


app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/index.html'));
})

app.get("/load",(req,res)=>{
    res.sendFile(__dirname+"/a.html");
})

app.listen(port, () => console.log(`\n\t Server is running at ${port} `))
