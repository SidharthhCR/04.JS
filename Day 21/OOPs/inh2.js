let parents= {
    name:"parnets",
    age:70,
    houseNo:871
}
let child ={
    name:"child",
    age:30
}
child.__proto__ = parents
console.log(child.houseNo)