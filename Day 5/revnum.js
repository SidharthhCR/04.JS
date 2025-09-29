//w.a.p to reverse a number//
let input=12345
let output=0

while(input>0){
    let lastDigit = input % 10;//to store lats digit from number
    input = Math.floor(input/10)//to remove decimal value 
    output = (output*10+lastDigit)//to add or update output with the last digit
}
console.log(output);