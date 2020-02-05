const math = {

    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '/': function (x, y) { return x / y },
    '*': function (x, y) { return x * y }

};

const process = (equation) => {

    let sign = (equation.split("")[1]);
    let first = Number(equation.split("")[0]);
    let second = Number(equation.split("")[2]);
    return math[sign](first, second)

};

// test cases
console.log(`4+2: ${process('4+2')}`);
console.log(`5*7: ${process('5*7')}`);
console.log(`6-1: ${process('6-1')}`);
console.log(`9/2: ${process('9/2')}`);