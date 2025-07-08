// 11. Sum of odd numbers between 100 and 150 using (while)

let i = 100, sum = 0;

while(i <= 150){
    if(i % 2 !== 0)
    {
        sum += i;
    }
    i++;
}

console.log("Sum of odd numbers between 100 and 150 using : ",sum);

// Answer : 3125