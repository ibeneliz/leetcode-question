// Implement this 'add' function: console.log(add(5)(2)());
function add(a) {
    return function (b) {
        return function () {
            return a + b;
        };
    };
}
console.log(add(5)(2)());

function sum(a, b) {
    if (a && b) {
        return a + b;
    } else {
        return function sum(b) {
            return a + b;
        }
    }
}

console.log(sum(2, 3));
console.log(sum(2)(3));

// Infinite Currying
function add1(a) {
    return function (b) {
        if (b) {
            return add1(a + b); // recursion
        } else {
            return a;
        }
    };
}
console.log(add1(5)(2)(4)(8)(2)(1)());

let user = {
    name: "Alice",
    age: 23
}
function getDetails(obj) {
    return function (key) {
        return obj[key];
    }
}

console.log(getDetails(user)("name"))
