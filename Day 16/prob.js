let car ={
    name:"polo",
    model:"petrol",
    manufactorer:"Volswagon",
    price:800000
    
}

// 1. display carname and price
console.log("car name=",car['name'])
console.log("car price=",car['price'])
// 2. Check model key is present, if present display its value
if('model'in car){
    console.log(car['model']);
}
// 3. Add varient as Automatic and manual
car.varient=["automatic","manuel"]

// 4. Add color as red
car.color="red";
console.log(car)
