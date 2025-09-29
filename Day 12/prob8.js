//
let numArray = [5, 8, 7, 6, 10, 42, 40];
let newArray = []
for (let i = 0; i <= numArray.length - 1; i++) {
    if (numArray[i] % 2 == 0) {
        newArray.push(numArray[i])
        console.log(numArray[i]);

    }
}