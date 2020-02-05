let exp1 = function(str) {

    let splitC = str.split("c");

    if (splitC.length > 1){
        for (let i = 1; i < splitC.length; i++){
            splitC[i] = "c" + splitC[i]
        }
    }

    return JSON.stringify(splitC)
};

let exp2 = function(str) {

    let replaced = str.replace(/a/g, "A");
    let count = (str.match(/a/g) || []).length; // a

    let ret = {
        'originalString': str,
        'modifiedString': replaced,
        'numberReplaced': count,
        'length': str.length
    };
    return JSON.stringify(ret);
};

let work = (string, func) => {return func(string);};

console.log(`Expression 1: ${ work('supercalifragilisticexpialidocious', exp1) }`);
console.log(`Expression 2: ${ work('supercalifragilisticexpialidocious', exp2) }`);