// ****
// *  *
// *  *
// *  *
// ****

for(let row=1;row<6;row++){
    let line="";
    for(let col=1;col<5;col++){
        if(row==1||row==5 || col==1||col==4){
            line+="*"
        }
            else{
                line+=" "
            
        }
    }
    console.log(line)
}