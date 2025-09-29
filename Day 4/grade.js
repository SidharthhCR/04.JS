const mark=80;

if (mark>=90 && mark <= 100){
    console.log("A grade");
}
else if (mark>=80){
    console.log("B grade")
}
else if (mark>=70 ){
    console.log("C grade")
}
else if (mark < 60 && mark >= 0){
    console.log("failed")
}
else{
    console.log("Invalid input")
}