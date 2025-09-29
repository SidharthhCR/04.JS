//     *
//    *  *
//   * *  *
// * *  *  *

for(let row=4;row>=1;row--){
    let line="";
    for(let col=1;col<=row;col++){
        line+=" ";
    }
    
    for(let hash=4;hash>=row;hash--){
        line+=" *";
    }
    console.log(line)
}