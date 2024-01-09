
const e = require("express");
const server = e();

const port=4040;
server.get("/", (req, res) => {
    res.send("Status is 500 when exception is thrown it will return 500");
    
    // Corrected the typo in the error message
    throw new Error("Error caused by console.log(1/0);");
});

server.listen(port,()=>console.log("\n\t server is runnig on port : "+`${port}`+"\n"));



// Request methods

// 1.GET  - Going for a consultaion to get a check up
// 2.POST - Going to get a new fumor inserted
// 3.PUT - Going to get a fumor replaced
// 4.DELETE - Going to get a fumor removed


// Status Codes 
// 1.200 - Everythin went Fine 
// 2.404 - Doctor is not in the hospital (usely route doesn't exist )
// 3.500 - Mid surgery light went away
// 4.411 - inputs were incorrect, wrong percon came to surgery


