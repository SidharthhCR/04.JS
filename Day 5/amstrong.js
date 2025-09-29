//write a program to find a number is amstrong

let input=333;
let copyOfInput=input;
let sumOfCubes=0;

while(input>0){
    let lastDigit=input%10;
    input = Math.floor(input/10)
    sumOfCubes = sumOfCubes + lastDigit ** 3 ;

}
if(copyOfInput == sumOfCubes){
    console.log("yes the number is Amstrong")
}
else{
    console.log("no the number is not Amstrong")
}