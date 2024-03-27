
function fib(n){
    let a=0;
    let b=1;
    for(var i=2;i<=n;i++){
        let n=a+b;
        a=b;
        b=n;

    }
    return b;


}

module.exports = fib;