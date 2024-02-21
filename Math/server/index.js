const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const port = 4200;

app.get("/", (req, res) => res.send("Server started ...!"));

app.use(cors());
app.use(express.json());  // Use express.json() instead of bodyParser.json()

function fact(n) {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f *= i;
    }
    return f;
}

app.get("/fact", (req, res) => {
    const value = req.query.value;
    let ans = `Factorial of ${value} : ` + fact(value);
    res.send(ans);
});

const calculateSum = (n) => {
    // return (n * (n + 1)) / 2;
    let s=0;
    for(let i=1;i<=n;i++){
        s+=i;
    }
    return s;
};


app.post("/sum", (req, res) => {
    const value = req.body.value;

    if (typeof value !== 'undefined' && !isNaN(value) && value >= 0) {
        const sum = calculateSum(value);

        let responseObj = {
            sum: sum
        };

        if (value < 10000) {
            res.status(200).json(responseObj);
        } else {
            res.status(400).json({ error: 'You entered a value greater than or equal to 10000' });
        }
    } else {
        res.status(400).json({ error: 'Invalid or missing non-negative value in the request body' });
    }
});

app.listen(port, () => console.log(`\n\t Server is running on the port : ${port}`));
