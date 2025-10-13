const productSales = [
  { product: "Laptop", sold: 5 },
  { product: "Mobile", sold: 10 },
  { product: "Tablet", sold: 7 },
  { product: "Laptop", sold: 3 },
  { product: "Mobile", sold: 4 },
  { product: "Tablet", sold: 6 },
  { product: "Headphone", sold: 8 },
  { product: "Headphone", sold: 2 },
];

//  Question: Print each product's total units sold.
let output={};

productSales.forEach((eachSale)=>{
    let productName=eachSale.product;
    let currentSold=eachSale.sold;
    if(output.hasOwnProperty(productName)){
        output[productName]+=currentSold;
    }
    else{
        output[productName]=currentSold;
    }
});
console.log(output);