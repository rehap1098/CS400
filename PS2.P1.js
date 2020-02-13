function* fibs () {
    let [first, second] = [0, 1];
    while (true) {
        yield first;
        [first, second] = [second, first + second];
    }
}

myFibs = fibs();



function* evens () {
    while(true) {
        let number = myFibs.next().value;
        if (number % 2 == 0) {
            yield number;
        };
    }

}

myFibs2 = evens();
let counter = 6;
while (counter --> 0) {
    console.log(myFibs2.next().value)
}

