function fib(n){
    //base condition
    if(n<=1) return n;
    
    let sp1 = fib(n-1);
    let sp2 = fib(n-2);
    
    //my work
    const myWork = sp1+sp2;
    return myWork;
}

/* for(let i=0;i<5;i++){
    console.log(fib(i));
} */
console.log(fib(6));