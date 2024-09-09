Array.prototype.map = function (callback) {
    let resultArray = [];
    if (typeof (callback) !== "function") {
        throw Error(`${callback} passed is not a function`)
    } else {
        for (let i = 0; i < this.length; i++) {
            resultArray.push(callback(this[i], i, this));
        }
        return resultArray;
    }
}

let arr = [2, 3, 4, 5];
let double = arr.map((item) => item * item);
console.log(double)

Array.prototype.reduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        if (accumulator) {
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
}

let arr1 = [2, 3, 4, 5];
console.log(arr1.reduce((accumulator, ele) => accumulator + ele, 2));
console.log("arr1", arr1)