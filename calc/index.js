const app = require("express")();
const snn = require("./sum"); // Correct the import statement
const port = 8080;

app.get("/get", (req, res) => res.send(" mango 🥭 apple 🍎🍏"));

app.get("/s", (req, res) => {
    const value = req.query.value;
    let ans = "  the sum of n natural number : " + snn(value); // Correct the function call
    res.status(200).send("Number : " + value + ans);
    console.log("\n\t Result : "+(req.query.v1))
    console.log("\n\t Result : "+(req.query.v2));
});


app.post("/post",(req,res)=>{
    res.send(" post request ")
    console.log("\n\t Post response \n")
})


app.listen(port, () => console.log(`\n\t server is running on port ${port}`));


// Result : 8

// Result : 5