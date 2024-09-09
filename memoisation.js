function clumsySquare(num){
    let i=0;
    while(i<1000000){
        i++;
    }
    return num * num;
}

function memoisFunc(fn){
    let cache = {};
    return function (){
        let key = JSON.stringify(arguments);
        console.log(key)
        if(cache[key]){
            console.log("Entered if loop")
            return cache[key];
        }else{
            cache[key] = fn.apply(null,arguments);
            return cache[key];
        }
    };

}

let memoSquare = memoisFunc(clumsySquare);
console.time("Test1")
//console.log(clumsySquare(2))
console.log(memoSquare(2))
console.timeEnd("Test1")


console.time("Test2")
//console.log(clumsySquare(2))
console.log(memoSquare(2))
console.timeEnd("Test2")