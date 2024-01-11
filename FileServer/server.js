const express = require("express");
const app = express();
const fs = require("fs");

const port = 4020;

app.get("/", (q, r) => r.send(" server is running "));

app.listen(port, () => console.log(`\n\t Server is running in the port: ${port}`));

function file(req, res) {
    const name = req.params.fileName; // Corrected typo in req.params.fileName
    console.log("\n\t data in the file : ", name);
    const d = function (err, data) {
        res.json({ data }); // Corrected the response object syntax
    };
    fs.readFile(name, "utf-8", d);
}

app.get("/file/:fileName", file);
