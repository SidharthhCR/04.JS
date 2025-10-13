const a=(...b)=>{//rest
    let c=[1,2,3,4,56];
    let d=[...c,...b];//spread
    console.log(d)
}
a(1,2,3,4,54);