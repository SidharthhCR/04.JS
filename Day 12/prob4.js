//find the sum 

let numArray = [10, 22, 13, 34, 52, 7, 18];
let sum = 0;
for (let i = 0; i <= numArray.length - 1; i++) {
    sum += numArray[i];
}
console.log('total sum=', sum);