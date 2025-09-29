

for(let row=1;row<=5;row++){
    let line="";
    for (let col=1;col<=5;col++){
        if(row==1||row==3||row==5||col==1){
            line+=" E";
        }
        else{
            line+="";
        }
    }
    console.log(line)
}