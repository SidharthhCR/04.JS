//w.a.p to check the number is prime number or not

let num = 7;
let isPrime = true;
for (i = 2; i <= num - 1; i++) {
    if (num % i == 0) {
        isPrime = false;
    }
}
if (isPrime == true) {
    console.log("its a prime number")
}
else {
    console.log("its not a prime number")
}