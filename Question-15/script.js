
function findPerson(name) {
    return arr.find(person => person.name === name);
}

let arr = [
    {
        name: "raj",
        age: 23,
    },
    {
        name: "het",
        age: 18,
    },
    {
        name: "jay",
        age: 25,
    },
    {
        name: "mohan",
        age: 56,
    },
    {
        name: "smit",
        age: 21,
    }
];

console.log(findPerson("smit"));
