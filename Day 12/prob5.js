//print the  duplicates from this
let numArray = [5, 10, 20, 25, 5, 75, 35, 10];

for (let i = 0; i <= numArray.length - 1; i++) {
    for (let j = i + 1; j <= numArray.length - 1; j++) {
        if (numArray[i] == numArray[j]) {
            console.log(numArray[i]);
        }

    }
}