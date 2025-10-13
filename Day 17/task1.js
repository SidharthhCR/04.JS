const salesData = [
    { city: "New York", sales: 5000 },
    { city: "Los Angeles", sales: 7000 },
    { city: "Chicago", sales: 6000 },
    { city: "New York", sales: 8000 },
    { city: "Los Angeles", sales: 6500 },
    { city: "Chicago", sales: 9000 },
    { city: "Houston", sales: 4000 },
    { city: "Houston", sales: 5500 },
];

// Print each city with its highest sales value

let output = {};

salesData.forEach((eachSales) => {
    let cityName = eachSales.city;
    let currentSales = eachSales.sales;
    if (output.hasOwnProperty(cityName)) {
        if (currentSales > output[cityName]) {
            output[cityName]=currentSales;
        }
      }  else {
            output[cityName]=currentSales;
        }
    });
console.log(output);