const math = {

    '+': function (x,y) {return x + y},
    '*': function (x,y) {return x * y},
    '-': function (x,y) {return x - y},
    '/': function (x,y) {return x / y},
    '%': function (x,y) {return x % y}

};

const evaluate = (equation) => {

    let sign = (equation.split("")[1]);
    let first = Number(equation.split("")[0]);
    let second = Number(equation.split("")[2]);
    return math[sign](first, second)

};


const expression1 = '4+2';
console.log(`${expression1} = ${evaluate(expression1)}`);
const expression2 = '5*7';
console.log(`${expression2} = ${evaluate(expression2)}`);
const expression3 = '6-1';
console.log(`${expression3} = ${evaluate(expression3)}`);
const expression4 = '9/2';
console.log(`${expression4} = ${evaluate(expression4)}`);
const expression5 = '8%3';
console.log(`${expression5} = ${evaluate(expression5)}`);