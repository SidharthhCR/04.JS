//input  3       4       5       6
//output 36912  481216  5101520  6121824

let input=5;
let numb=1;
let variable='';//using string to concatinate//
while(numb<=4){
    variable=variable+numb*input;
    numb++
}
console.log(variable)