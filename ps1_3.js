let exp1 = function(str) {

    let splitted = str.split("c");

    if (splitted.length > 1){
        for (let i = 1; i < splitted.length; i++){
            splitted[i] = "c" + splitted[i]
        }
    }

    return JSON.stringify(splitted)
};

let exp2 = function(str) {

    let replaced = str.replace(/a/g, "A");
    let count = (str.match(/a/g) || []).length;

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