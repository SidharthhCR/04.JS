
const prompt = require('prompt-sync')();



function findLargest(num1, num2, num3) {
    num1 = prompt("enter the first num")
    num2 = prompt("enter the second num")
    num3 = prompt("enter the third num")

    if (num1 > num2 && num1 > num3) {
        console.log(num1, "largest")
    }
    else if (num2 > num1 && num2 > num3) {
        console.log(num2, "largest")
    }
    else if (num3 > num1 && num3 > num2) {
        console.log(num3, "largest")
    }
    else {
        console.log(invalid)
    }
}
findLargest()
