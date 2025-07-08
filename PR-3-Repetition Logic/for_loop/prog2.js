// 2. Sum of even numbers from 1 to 20 ( for loop)

let sum = 0;

for(let i = 1; i <= 20; i++)
{
    if(i%2 == 0)
    {
        sum += i;
    }
}

console.log("sum of even numbers from 1 to 20 : ",sum);

// Answer is : 110