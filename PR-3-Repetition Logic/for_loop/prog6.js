// 6. Sum of digits of a number (e.g., 12345)

let sum = 0;
let num = 12345;

while(num > 0)
{
    sum += num % 10;
    num = Math.floor(num/10); //a built-in function used to round a number _down_** to the nearest integer**
}

console.log("Sum of digits of a number (e.g., 12345) : ",sum)

// Answer : 15