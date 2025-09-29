let num=121;
let copyOf=num;
let result=0;
while(num>0){
    let lastDigit=num%10;
    result=result*10+lastDigit;
    num=Math.floor(num/10);
}
if(copyOf==result){
    console.log("number is palindrome")
}
else{
    console.log("number is not palindroime")
}