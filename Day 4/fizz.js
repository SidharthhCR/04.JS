//w.a.p to ittrate from 1 to 100
//print fizz if the number is divisible by 3
//print buzz if the number is divisible by 5
//print fizzbuzz if the number is divisible by 3 and 5

let num=1;

while(num<=100){
    if(num%3==0 && num%5==0){
        console.log("fizzbuzz-",num)
    }
    else if (num%3==0){
        console.log("fizz-",num)
    }
    else if (num%5==0){
        console.log("buzz-",num)
    }
    else{
        console.log("none")
    }
    num++;
}