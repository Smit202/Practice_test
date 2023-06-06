
function capitalizeNames(names) {
    let capitalizedNames = [...names];
    capitalizedNames.map(item => item.toUpperCase());
    return capitalizedNames;
}

console.log(capitalizeNames(['raj', 'smit', 'jay', 'mohan']));
