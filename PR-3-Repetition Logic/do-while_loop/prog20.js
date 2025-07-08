// 20. Sum of alternate numbers (1, 3, 5... to 19)

let i = 1, sum = 0;

do
{
    sum += i;
    i += 2;
}
while (i < 20)

console.log("Sum of alternate numbers (odd):", sum);