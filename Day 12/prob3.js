//find the smallest of number

let numArray = [10, 22, 13, 34, 52, 7, 18];
let smallest = numArray[0];
for (let i = 1; i <= numArray.length - 1; i++) {
    if (numArray[i] < smallest) {
        smallest = numArray[i];
    }
}
console.log('smallest num is=', smallest)