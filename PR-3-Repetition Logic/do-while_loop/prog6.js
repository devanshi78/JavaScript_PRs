// 6. Sum of digits of a number (e.g., 12345)

let i = 1, sum = 0;
let num = 12345;

do
{

    sum += num % 10;
    num = Math.floor(num/10);

}while(num > 0);

console.log("Sum of digits of a number : ",sum);
