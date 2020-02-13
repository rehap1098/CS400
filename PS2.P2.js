function* sentence () {
    let x = 0;
    let sent1 = yield;
    let splitted = sent1.split(' ');
    let sL = splitted.length

    while(x < sL){
        console.log(splitted[x]);
        x = x+1;
    }

}


let mySent = sentence();
console.log(mySent.next());
console.log(mySent.next('All I know is something like a bird within her sang'));
