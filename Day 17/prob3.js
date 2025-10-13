let pattern="ABBCCBAD";

let str=pattern.split("");

let output={};
for(let i=0;i<=str.length-1;i++){
    if(output.hasOwnProperty(str[i])){
        console.log(str[i])
        break;
    }
    else{
        output[str[i]]=1;
    }
}