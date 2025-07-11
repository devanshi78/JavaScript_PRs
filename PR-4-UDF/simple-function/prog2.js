let ch = 1;
let a = 10, b = 20;

function sum(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function mul(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}

function rem(a,b){
    return a % b;
}

switch(ch){
    case 1:
        console.log(`sum of ${sum(a,b)}`);
        break;
        
    case 2:
        console.log(`sub of ${sub(a,b)}`);
        break;

    case 3:
        console.log(`mul of ${mul(a,b)}`);
        break;

    case 4:
        console.log(`div of ${div(a,b)}`)
        break;

    case 5:
        console.log(`reminder of ${rem(a,b)}`);
        break;
}