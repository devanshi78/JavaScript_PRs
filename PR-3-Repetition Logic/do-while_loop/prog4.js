// 4. Sum of multiples of 5 from 1 to 50

let i = 1, sum = 0;

do
{
    if(i % 5 === 0)
    {
        sum += i;
    }
    i++;
}while(i <= 50);

console.log("sum of multiples of 5 from 1 to 50 : ",sum);