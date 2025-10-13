const weatherData = [
    { district: "Thrissur", temp: 32 },
    { district: "Thiruvananthapuram", temp: 33 },
    { district: "Kozhikode", temp: 31 },
    { district: "Thrissur", temp: 28 },
    { district: "Kozhikode", temp: 27 },
    { district: "Ernakulam", temp: 26 },
    { district: "Ernakulam", temp: 30 },
    { district: "Thiruvananthapuram", temp: 29 },
];
let output = {};
//district:temp
weatherData.forEach((eachObj) => {
    let districtName = eachObj.district;
    let currentTemp = eachObj.temp;

    if (output.hasOwnProperty(districtName)) {
        if(currentTemp>output[districtName]){

        }
    }
    else {
        output[districtName] = currentTemp;
    }
});
console.log(output);