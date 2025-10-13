const students = [
  { rollNo: 1, name: "Akhil", course: "MERN", marks: 82, attendance: 92 },
  { rollNo: 2, name: "Riya", course: "Python", marks: 76, attendance: 85 },
  { rollNo: 3, name: "Rahul", course: "MERN", marks: 45, attendance: 70 },
  { rollNo: 4, name: "Sneha", course: "Data Science", marks: 90, attendance: 95 },
  { rollNo: 5, name: "Vishnu", course: "Python", marks: 55, attendance: 60 },
];

// 1️⃣ print all student names in uppercase
// students.forEach((eachStu)=>{console.log(eachStu["name"].toUpperCase())});



// 2️⃣ print names of students whose attendance is below 80
// students.forEach((eachStu)=>{
//     if(eachStu["attendance"]<80){
//         console.log("attendance below 80 students=",eachStu)
//     }
// })

// console.log()

// 3️⃣ print students who scored more than 75 and belong to MERN course
// let mearn=students.filter((eachStu)=>eachStu["marks"]>75&&eachStu["course"]=="MERN")

// console.log(mearn)

// 4️⃣ calculate total marks of all students

// let total=0;
// students.forEach((eachStu)=>{
//     total+=eachStu['marks'];
// })
let total=students.reduce((acc,curr)=>acc+curr["marks"],0);
console.log("total marks= ",total)

// 5️⃣ find the student who has the highest marks
let highest=students.reduce((acc,curr)=>acc["marks"]>curr["marks"]?acc:curr)



// 6️⃣ check if any student failed (mark < 50)
let failed=students.some((eachStu)=>eachStu["marks"]<50)

console.log("student failed=",failed)

// 7️⃣ create an array of student names only (use map)
let array=students.map((eachStu)=>eachStu["name"])

console.log(array)

// 8️⃣ print the average marks of all students
let average=total/students.length;

console.log(average)