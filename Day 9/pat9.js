// H   H
// H   H
// H H H
// H   H
// H   H

for(let row=1;row<=5;row++){
    let line=" ";
    for(let col=1;col<=3;col++){
        if(row==3||col==1||col==3){
            line+="H "
        }
        else{
            line+="  ";
        }
    }
    console.log(line)
}