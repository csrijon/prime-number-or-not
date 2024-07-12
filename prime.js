let a = 13;

function isprime(number) {
    if (number === 1) {
        console.log('1 is nither prime number nor composite number')
    }
    else if(number>1){
        for (let i = 2; i <number; i++) {
            if (number%i === 0) {
                console.log('the number is not a prime number')
                break;
            }
            
        }
        console.log('the number is a prime number')
    }
}
isprime(a);


// 2nd process 

let b= 3;


if (b === 1) {
    console.log('1 is nither prime number nor composite number')
}
else if(b>1 && b%2 === 0){
    console.log('the number is not a prime number')
}
else{
    console.log('the number is prime number')
}