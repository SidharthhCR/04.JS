//input   2  3   4    5
//output 24 369 4936  ?

let input = 5;
let numb = 1;
let variable = 0;
while (numb <= 5) {
    variable = variable * 10 + numb;
    numb++;

}
console.log(variable * 5);