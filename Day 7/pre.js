//w.a.p to check if a digit is present in the given number below,using while and flag
//12345678

let num = 12345678;

let sKey = 6;
let isPresent = false;
while (num > 0) {
    let lastDigit = num % 10;
    if (sKey == lastDigit) {
        isPresent = true;
    }
    num = Math.floor(num / 10);
}
if (isPresent == true) {
    console.log("Number is present");
}
else {
    console.log("Number is not present");
}


