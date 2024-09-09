var obj = {
    name: "John Doe",
    displayName: function () {
        console.log(this.name);
    },
};
var obj1 = {
    name: "New Name",
};
obj.displayName();
obj.displayName.call(obj1); // calling function displayName with explicit binding with 'call' method - call with context of object 'obj1'

console.log("--------------");
// Now change the anynymous function displayName to an 'arrow function'
var obj2 = {
    name: "John Doe",
    displayName: () => {
        console.log(this.name);
    },
};

function abcd() {
    // this is simply a FUNCTION DEFINITION
}

//setTimeout(abcd, 1000); //abcd is passed as a callback function 

obj2.displayName();
obj2.displayName.call(obj1); // 'this' context inside arrow function points towards the 'Window object'/the 'global object'