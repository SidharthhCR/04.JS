
let numArray = [5, 10, 20, 25, 5, 75, 35, 10];
let search=75;
let isFound=false;
for(let i=0;i<=numArray.length-1;i++){
    if(numArray[i]==search){
        isFound=true;
        break;
    }  
}
isFound ? console.log("Number is present"):console.log("Number is absent");
