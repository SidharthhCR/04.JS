//display the word count of each word for the sentance
let sentence = "hello hai hello world hai hello nehab";
//convert string into an array
let array = sentence.split(" ");
//to storte output create an empty object
let output = {};
array.forEach((eachWord) => {
    //iterate through array
    if (output.hasOwnProperty(eachWord)) {
        output[eachWord] = output[eachWord] + 1;
        //add one to the value 

    }
    else {
        output[eachWord] = 1;
    }
});
console.log(output);