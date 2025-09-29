//w.a.p to print factorial of numbers from 10 to 20

let num=10;


while(num<=20){//10
    let fact=1;
    let copyOfNum = num;//10
    while(copyOfNum >= 1){//9 8 7 1 0
        fact = fact * copyOfNum;// fact = 10*9 *8 *7 *1
        copyOfNum--;//0
    }
    console.log(fact);
    num++;
}