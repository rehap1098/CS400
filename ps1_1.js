const alphaB = string => sorted(string);
console.log(alphaB('supercalifragilisticexpialidocious'));


function sorted(str) {
    var arr = str.split('');
    var sorted = arr.sort();
    return sorted.join('');
}

