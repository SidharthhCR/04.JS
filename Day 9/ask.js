//w.a.p to ask user for their birth year and print their age 

const prompt=require('prompt-sync')()
let year=prompt("Enter Your Birth Year :");
year=Number(year);

console.log(2025 - year);