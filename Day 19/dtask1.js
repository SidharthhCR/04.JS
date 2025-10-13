const students = [
  {
    rollNo: 1,
    name: "Arjun",
    dept: "CS",
    marks: [
      { subject: "Maths", score: 80 },
      { subject: "Science", score: 75 },
      { subject: "English", score: 85 },
    ],
  },
  {
    rollNo: 2,
    name: "Sneha",
    dept: "EC",
    marks: [
      { subject: "Maths", score: 90 },
      { subject: "Science", score: 88 },
      { subject: "English", score: 92 },
    ],
  },
  {
    rollNo: 3,
    name: "Rahul",
    dept: "ME",
    marks: [
      { subject: "Maths", score: 70 },
      { subject: "Science", score: 65 },
      { subject: "English", score: 68 },
    ],
  },
  {
    rollNo: 4,
    name: "Aisha",
    dept: "CS",
    marks: [
      { subject: "Maths", score: 95 },
      { subject: "Science", score: 91 },
      { subject: "English", score: 89 },
    ],
  },
];

// 1. Print total number of students
console.log(students.length)

// 2. Print names of students from CS department
let csStudent=students.filter((eachStu)=>eachStu.dept=="CS")
csStudent.forEach((eachStu)=>console.log(eachStu.name))


// 3. Print total marks of each student (sum of all subjects)
students.forEach((eachStu) => {
  let cName = eachStu.name;
  let totalMark = eachStu["marks"].reduce((acc, curr) => acc + curr.score,0);
  console.log(cName, totalMark);});


// 4. Print student with highest total marks
let maxStud = "";
let maxMarks = 0;

students.forEach((eachStu) => {
  let cName = eachStu.name;
  let totalMark = eachStu["marks"].reduce((acc, curr) => acc + curr.score,0);
  if (totalMark > maxMarks) {
    maxMarks = totalMark;
    maxStud = cName;
  }
});
console.log(maxStud, maxMarks);


// 5. Print average marks of student rollNo 2
let stud2 = students.find((eachStu) => (eachStu["rollNo"] = 2));
let avg = stud2["marks"].reduce((acc, curr) => acc + curr.score, 0);
console.log("Average Marks=", avg / 2);

// 6. Print all students who scored more than 85 in Maths
let newStud = [];
students.forEach((eachStu) =>
  eachStu["marks"].forEach((each) => {
    if (each["subject"] == "Maths" && each["score"] > 85) {
      newStud.push(eachStu["name"]);
    }
  })
);
console.log(newStud);

// 7. Print subject where rollNo 4 scored the least
let stud4 = students.find((eachStu) => eachStu["rollNo"] == 4);
let least4 = stud4["marks"].reduce((acc, curr) =>
  acc["score"] < curr["score"] ? acc : curr);
console.log(least4);

// 8. Print department having the highest total marks (sum of all its students)
let sumMarks = 0;
students.forEach((eachStu) => {
  let currMark = eachStu["marks"].reduce(
    (acc, curr) => acc + curr["score"],
    0
  );
  if (currMark > sumMarks) {
    highDept = eachStu["dept"];
    sumMarks = currMark;
  }
});
console.log(highDept);

// 9. Print topper (student with highest marks in English)
let engMarks = 0;
let topper = "";
students.forEach((eachStu) => {
  eachStu["marks"].forEach((each) => {
    if (each["subject"] == "English") {
      if (each["score"] > engMarks) {
        engMarks = each["score"];
        topper = eachStu["name"];
      }
    }
  });
});
console.log(topper, engMarks);

// 10. Print average marks of all students together
let avgMarks = students.map((eachStu) => eachStu["marks"]);
flattendMarks=avgMarks.flat(Infinity)
let total=flattendMarks.reduce((acc,curr)=>acc+curr['score'],0)
console.log('Average=',total/students.length);