const products = [
    { pid: 100, pName: 'Apple', brand: '5G', price: 120000, display: 'OLED' },
    { pid: 101, pName: 'Samsung', brand: '4G', price: 90000, display: 'AMOLED' },
    { pid: 102, pName: 'OnePlus', brand: '4G', price: 75000, display: 'Fluid AMOLED' },
    { pid: 103, pName: 'Pixel', brand: '3G', price: 85000, display: 'OLED' },
    { pid: 104, pName: 'Xiaomi', brand: '3G', price: 40000, display: 'Super AMOLED' }
];

// print product name only - 
// products.forEach((eachPro) => console.log(eachPro.pName))
// print all mobile details whose display is oled :
// let oled = products.filter((eachProduct) => eachProduct.display == 'OLED');



// console.log(oled)
// print 3g mobile phone names :
// let mobiles = products.filter((eachMob) => eachMob.brand == '3G')
// mobiles.forEach((eachMob) => console.log(eachMob.pName));


// sort mobile based on price - sort 
// let sorted = products.sort((a, b) => a['price'] - b['price']);




// console.log(sorted)
// print costly mobile price 
let costly = products.reduce((acc,curr) => (acc["price"] > curr["price"] ? acc : curr));
console.log("costly mobile",costly);
// print low cost mobile
let lowest = products.reduce((acc,curr) => (acc["price"] < curr["price"] ? acc : curr));
console.log("lowest mobile",lowest);