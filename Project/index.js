const express = require("express");
const app = express();
app.use(express.json());
const port = 4040;

app.get("/", (req, res) => res.send("Welcome to my server"));

const users = [{
    name: "mark",
    heart: [{
        healthy: false
    }],
    eye: [{
        healthy: false
    }]
}];

app.get("/h", function (req, res) {
    const johnHeart = users[0].heart;
    console.log(johnHeart);
    const johnEye = users[0].eye;
    const numberofEye = johnEye.length; // Corrected variable name to johnEye

    let numberofHealthyEye = 0; // Corrected variable name to numberofHealthyEye
    for (let i = 0; i < numberofEye; i++) {
        if (johnEye[i].healthy) {
            numberofHealthyEye = numberofHealthyEye + 1;
        }
    }

    const numberofUnhealthyEye = numberofEye - numberofHealthyEye;
    res.json({
        johnEye, // Corrected variable name to johnEye
        numberofEye,
        numberofHealthyEye,
        numberofUnhealthyEye
    });
});


app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    console.log(req.body);
    const n=req.query.n;
    users[0].eye.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done"
    })



})


app.put("/", (req, res) => {
    for (let i = 0; i < users[0].eye.length; i++) {
        users[0].eye[i].healthy = true; // Corrected the array name to users
    }
    res.json({});
});

app.delete("/", function (req, res) {
    let newEye = [];

    if (isThereAtleastOneUnhealthyEye()) {
        for (let i = 0; i < users[0].eye.length; i++) {
            if (!users[0].eye[i].healthy) {
                newEye.push({
                    healthy: false
                });
            }
        }

        users[0].eye = newEye;
        res.json({ msg: "done" });
    } else {
        res.status(411).json({
            msg: "you have sight" // Corrected the semicolon to a comma
        });
    }
});

function isThereAtleastOneUnhealthyEye() {
    let atleastOneUnhealthyEye = false;
    for (let i = 0; i < users[0].eye.length; i++) {
        if (!users[0].eye[i].healthy) {
            atleastOneUnhealthyEye = true;
            break; // Added a break to exit the loop once an unhealthy eye is found
        }
    }
    return atleastOneUnhealthyEye;
}



app.listen(port, console.log(`\n\t Server is running on the port : ${port}`)); // Corrected typo in the log message
