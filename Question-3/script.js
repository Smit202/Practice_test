
console.log(sum(1, 2));
console.log(sum(1, 2, 5, 8));
console.log(sum(6, 7, 5, 68, 42, 12, 23));

function sum(a, b, ...args) {
    let sum = a+b;
    args.forEach(item => sum += item);
    return sum;
}