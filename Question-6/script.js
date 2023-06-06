function doMathOperation(a, b, operation) {
    operation(a,b);
}

let addition = (a, b) => console.log(a+b);
let subtraction = (a,b) => console.log(a-b);
let multiplication = (a, b) => console.log(a*b);
let division = (a, b) => console.log(a/b);

doMathOperation(5, 8, addition);
doMathOperation(5, 8, subtraction);
doMathOperation(5, 8, multiplication);
doMathOperation(15, 3, division);