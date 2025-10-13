const patients = [
  {
    id: 201,
    name: "Kiran",
    age: 45,
    dept: "Cardiology",
    bills: [
      { service: "Consultation", amount: 800 },
      { service: "ECG", amount: 1200 },
      { service: "Medicine", amount: 700 },
    ],
  },
  {
    id: 202,
    name: "Divya",
    age: 30,
    dept: "Neurology",
    bills: [
      { service: "MRI", amount: 5000 },
      { service: "Consultation", amount: 1000 },
    ],
  },
  {
    id: 203,
    name: "John",
    age: 50,
    dept: "Orthopedics",
    bills: [
      { service: "X-Ray", amount: 1500 },
      { service: "Plaster", amount: 1200 },
      { service: "Medicine", amount: 800 },
    ],
  },
  {
    id: 204,
    name: "Meera",
    age: 35,
    dept: "Cardiology",
    bills: [
      { service: "ECG", amount: 1000 },
      { service: "Consultation", amount: 700 },
    ],
  },
];

// 1. Print total number of patients

console.log(patients.length);


// 2. Print names of patients from 'Cardiology'

let cardio = patients.filter((each) => each["dept"] == "Cardiology");
cardio.forEach((each) => {console.log(each["name"]);
});


// 3. Print total bill amount for each patient

let maxBill = 0;
let maxId = 0;
let totalBill = 0;
patients.forEach((each) => {
  let curBill = each["bills"].reduce((acc, curr) => acc + curr["amount"], 0);
  console.log(curBill);
  if (curBill > maxBill) {
    maxBill = curBill;
    maxId = each["id"];
  }
  totalBill += curBill;
});


// 4. Print patient with highest total bill

let highPat = patients.find((each) => each["id"] == maxId);
console.log(highPat, "total bill=", maxBill);


// 5. Print total earnings of the hospital

console.log("total earning=", totalBill);


// 6. Print all services costing more than 1000

let services = patients.map((each) => each["bills"]);
let flatService = services.flat(Infinity);
let costServ = flatService.filter((each) => each["amount"] > 1000);
costServ.forEach((each) => {
  console.log(each["service"]);
});


// 7. Print department having highest total bill collection

console.log(highPat["dept"]);


// 8. Print patient who had an 'MRI'

let pat = "";
patients.forEach((each) => {
  each["bills"].forEach((eachPat) => {
    if (eachPat["service"] == "MRI") {
      pat = each["name"];
    }
  });
});
console.log("Patient who has MRI=", pat);


// 9. Print average bill per patient

patients.forEach((each) => {
  let curBill = each["bills"].reduce((acc, curr) => acc + curr["amount"], 0);
  let div = each["bills"].length;
  let avg = curBill / div;
  console.log(avg);
});


// 10. Print total number of services billed

console.log(flatService.length);
