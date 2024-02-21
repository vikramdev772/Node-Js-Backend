

function callbackFn(r){
    console.log(r);
}


var sendObj = {
    method:"POST"
}

fetch("http://localhost:8090/sum",sendObj).then(callbackFn);

