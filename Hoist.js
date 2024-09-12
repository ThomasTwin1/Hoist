var x;
console.log(x); // undefined
x = 5;
console.log(x); // 5


// Temporal Dead Zone starts here
let y;
console.log(y); // ReferenceError
y = 10;


greet(); // "Hello, World!"

function greet() {
    console.log("Hello, World!");
}


greet(); // TypeError: greet is not a function

var greet = function() {
    console.log("Hello, World!");
};
