let str =
    "Angelica Santana Mohamed Sloan Selene HobbsBrendan Hardin Vada Guzman Jude White Layla Vasquez Rowan Stephenson Khaleesi Sawyer";

let lower = str.toLowerCase();
let newArr = lower.split('');
console.log(newArr);
let vowel = newArr.filter((element) => element == 'a' || element == 'e' ||
 element == 'i' || element == 'o' || element == 'u');
console.log(vowel);
console.log(vowel.length);

