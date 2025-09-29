//find the largest number
let numArray = [10, 22, 13, 34, 52, 7, 18];
let largest = numArray[0];
for (let i = 1; i <= numArray.length - 1; i++) {
    if (numArray[i] > largest) {
        largest = numArray[i];
    }
}
console.log('largest num is=',largest)
