// size of string
let str = "hello user...";

const revStr = (str) => {
    let size = str.length;
    console.log(size);
}

revStr(str);

// ----------------------------------------------------------------------------------

// print string
let str2 = "hello user...";

const revStr2 = (str2) => {
    let s = '';
    for(let i = 0; i < str2.length; i++){
        s += str2[i] + ' '
    }
    return s;
}

console.log(revStr2(str2));

// ----------------------------------------------------------------------------------

// reverse string

let str3 = "hello user...";

const revStr3 = (str3) => {
    let revString = '';
    for(let i = str3.length-1; i >= 0; i--){
        revString += str3[i] + ' ';
    }
    return revString;
}

console.log(revStr3(str3));