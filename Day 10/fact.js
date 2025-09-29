//w.a.p to print the factorial of given number using recursion

const fact = (num) => {
    if (num == 1) {
        return 1;
    }
    return num * fact(num - 1);
}

console.log(fact(5));