function add(...args){
    let sum = args . reduce((a,b)=>a+b);
    console.log(sum)
}
add(5,10)
add(5,10,15)