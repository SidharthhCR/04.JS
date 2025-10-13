//Given an array [10, 20, 30, 40, 50], use forEach() to print each number.

let numArray = [10, 20, 30, 40, 50];
numArray.forEach((eachElement) => console.log(eachElement))

//Print both the index and value of each element using forEach().

numArray.forEach((eachElement, index) => {
    console.log(eachElement, "->", index)
})
//Use forEach() to calculate the sum of all numbers in an array.

let sum = 0;
numArray.forEach((eachElement) => {
    sum += eachElement;
})
console.log("sum is", sum)