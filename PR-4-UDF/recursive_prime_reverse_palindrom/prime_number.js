const isPrime = (n) => {

    let i = 1;
    let count = 0;
    while(i <= n){
        if(n % i == 0){
            count++;
        }
        i++;
    }

    if(count == 2){
        return true;
    }else{
        return false;
    }
}

let num = 4;
console.log(isPrime(num));