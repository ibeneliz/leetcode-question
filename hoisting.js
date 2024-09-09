function abc() {
    console.log(a);

    var a = 10;
}
//abc();
// a is undefined (hoisted)

function abc1() {
    console.log(a, b, c);

    var a = 10;
    let b = 20;
    const c = 30;
}
// abc1();
// Will b and c be hoisted as well? Yes, they will be hoisted by in Temporal dead zone. So can't access before initializatin