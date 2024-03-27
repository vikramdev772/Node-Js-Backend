

const fs=require('fs')

fs.readFile("api.txt",'utf8',(err,data)=>{

    if(err){
        console.log(err)
    }
    console.log(data)

})


// vikram@vikram-Inspiron-16-Plus-7630:~/Desktop/Node-Js-Backend/OS$ node fs.js



// fs module
// hell world

// fs modules as readFile
// readFile takes 3 arguments
// 1.file name
// 2.encoder
// 3.function()


fs.writeFile('index.html','utf8',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('\n\t File created sucessfully \n')
})

const content = "My name is vikram i am practicing fs module "

fs.writeFile('index.html',content,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file content is sucess");
    }
})

fs.rename('index.html',"i.html",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("\n\t modified sucess")
    }
})

fs.unlink('i.html',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("File Deleted Sucess");
        
    }
})
