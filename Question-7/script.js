
function isEvenAndPositive(num) {
    return (num%2==0 && num>0) ? true : false;
}

console.log(isEvenAndPositive(5));
console.log(isEvenAndPositive(-5));
console.log(isEvenAndPositive(6));
console.log(isEvenAndPositive(-6));