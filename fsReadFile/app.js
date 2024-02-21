

function data(d){

    console.log(d);
    // console.log(d.status);
    // console.log(r);
}
function callbackFn(r){
    console.log(`\n\t status code : ${r.status}`)
    r.json().then(data);
}


var sendObj = { 
    method:"GET"
}

fetch("http://localhost:8090/fact?value=5",sendObj).then(callbackFn);

// status code : 200
// { factorial: ' fact : 120' }


