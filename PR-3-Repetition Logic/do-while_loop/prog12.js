// 12. Sum of digits of all numbers from 1 to 50

let i = 1, sum = 0;
let num = i;
do
{
    sum += num % 10;
    num = Math.floor(num/10);
    i++;
}while(num > 0);

console.log("Sum of digits of all numbers from 1 to 50 : ",sum);
