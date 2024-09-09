let person1 = {
    name: "pName",
    helloFunc: function(param) {
                    console.log(this.name+"says Hello world "+param);
                }
}

console.log(person1.helloFunc("car"))
let person2 = {
    name: "p2Name"
}
console.log(person1.helloFunc.call(person2,"car"))
console.log(person1.helloFunc.apply(person2,["carApply"]))
const newFunc = person1.helloFunc.bind(person2);
console.log(newFunc("jeep"))
