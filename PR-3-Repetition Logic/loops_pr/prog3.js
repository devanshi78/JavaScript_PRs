// avg of number

let sum = 0;
let size = 0;
let avg;

for(let i = 1; i <= 5; i++){
    size++;
    sum += i;
    avg = sum/size;
}

console.log(avg);