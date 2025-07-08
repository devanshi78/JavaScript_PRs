// fibonacci series 
//  0, 1, 1, 2, 3, 5, 8, 13, 21

let a, b = 0, c = 1;

let num = 20;

let str = '';

for(let i = 1; i <= 20; i++){
    a = b;
    b = a + c;
    c = a;
    str += a + ' ';
}

console.log(str);