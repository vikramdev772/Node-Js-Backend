
//http module 

const http = require('http')

const server = http.createServer((req,res)=>{

    res.write(" learning http module ")
    res.end()

})


server.listen(5500)


