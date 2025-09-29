//w.a.p to find the count of the given number

let num=12345678;
let count=0;

while(num>0){
    num=Math.floor(num/10)
    count++

}
console.log(count)