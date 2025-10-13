const orders = [
  {
    orderId: 5001,
    customer: "Amal",
    items: [
      { name: "Laptop", price: 55000, qty: 1 },
      { name: "Mouse", price: 1500, qty: 2 },
    ],
    status: "delivered",
    paymentMode: "upi",
  },
  {
    orderId: 5002,
    customer: "Rahim",
    items: [
      { name: "Phone", price: 30000, qty: 1 },
      { name: "Charger", price: 1500, qty: 1 },
    ],
    status: "pending",
    paymentMode: "card",
  },
  {
    orderId: 5003,
    customer: "Sneha",
    items: [
      { name: "Headphones", price: 2000, qty: 1 },
      { name: "Laptop Stand", price: 1200, qty: 1 },
    ],
    status: "delivered",
    paymentMode: "upi",
  },
  {
    orderId: 5004,
    customer: "Vivek",
    items: [
      { name: "Tablet", price: 18000, qty: 1 },
      { name: "Case", price: 800, qty: 1 },
    ],
    status: "delivered",
    paymentMode: "netbanking",
  },
];

// 1. Print total number of orders
console.log(orders.length);


// 2. Print names of customers who used 'upi' as payment mode

let upiOrd = orders.filter((each) => each["paymentMode"] == "upi");
upiOrd.forEach((each) => {
  console.log(each["customer"]);
});


// 3. Print total amount of each order (price * qty for each item)

let opt = [];
orders.forEach((each) => {
  let cap = each["items"].filter((eachItem) =>
    eachItem["qty"] > 1
      ? (eachItem["price"] *= eachItem["qty"])
      : (eachItem["price"] *= 1)
  );
  let total = cap.reduce((acc, curr) => acc + curr["price"], 0);
  let tap = {};
  tap["name"] = each["customer"];
  tap["bill"] = total;
  opt.push(tap);
});
console.log(opt);


// 4. Print the customer with the highest total bill amount

let high = opt.reduce((acc, curr) => (acc["bill"] > curr["bill"] ? acc : curr));
let highCus = opt.find((each) => each["bill"] == high["bill"]);
console.log(highCus);


// 5. Print all 'delivered' orders

delOrd = orders.filter((each) => each["status"] == "delivered");
console.log(delOrd);


// 6. Print all items whose price > 5000

let allI = orders.map((each) => each["items"]);
let flattendCap = allI.flat(Infinity);
let allP = flattendCap.filter((eachItem) => eachItem["price"] > 5000);
console.log(allI);


// 7. Print total sales amount from 'delivered' orders

let totalSales = 0;
delOrd.forEach((each) => {
  Sales = each["items"].reduce((acc, curr) => acc + curr["price"], 0);
  totalSales += Sales;
});
console.log(totalSales);


// 8. Print orderId with the most number of items

let odId = 0;
let highQty = 0;
orders.forEach((each) => {
  let curQty = each["items"].reduce((acc, curr) => acc + curr["qty"], 0);
  if (curQty > highQty) {
    highQty = curQty;
    odId = each["orderId"];
  }
});
console.log(odId);


// 9. Print customer who bought 'Laptop'

let lapCus = "";
orders.forEach((each) =>
  each["items"].forEach((eachItem) => {
    if (eachItem["name"] == "Laptop") {
      lapCus = each["customer"];
    }
  })
);
console.log(lapCus);


// 10. Print average order value (AOV)

let avg = opt.reduce((acc, curr) => acc + curr["bill"], 0);
console.log(avg / orders.length);
