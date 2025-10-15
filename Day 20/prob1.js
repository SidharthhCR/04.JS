const projects = [
  {
    pid: 1,
    projectName: "E-Commerce Platform",
    manager: "Arun",
    status: "completed",
    team: [
      { empId: 101, empName: "Alice", role: "Developer", hours: 120, rating: 4.5 },
      { empId: 102, empName: "Bob", role: "Tester", hours: 80, rating: 4.2 },
      { empId: 103, empName: "Charlie", role: "Designer", hours: 60, rating: 4.8 },
    ],
    budget: 800000,
  },
  {
    pid: 2,
    projectName: "Banking App",
    manager: "Divya",
    status: "in-progress",
    team: [
      { empId: 104, empName: "Evan", role: "Developer", hours: 100, rating: 4.3 },
      { empId: 105, empName: "Fathima", role: "Tester", hours: 70, rating: 4.1 },
      { empId: 106, empName: "George", role: "DevOps", hours: 90, rating: 4.7 },
    ],
    budget: 1000000,
  },
  {
    pid: 3,
    projectName: "Health Tracker",
    manager: "Rahul",
    status: "completed",
    team: [
      { empId: 107, empName: "Hannah", role: "Developer", hours: 130, rating: 4.9 },
      { empId: 108, empName: "Ibrahim", role: "Tester", hours: 85, rating: 4.4 },
    ],
    budget: 600000,
  },
  {
    pid: 4,
    projectName: "EduPortal",
    manager: "Aisha",
    status: "in-progress",
    team: [
      { empId: 109, empName: "John", role: "Developer", hours: 90, rating: 4.2 },
      { empId: 110, empName: "Kiran", role: "Tester", hours: 75, rating: 3.9 },
      { empId: 111, empName: "Lina", role: "Designer", hours: 65, rating: 4.6 },
    ],
    budget: 700000,
  },
];

// 1️⃣ Print total number of projects.
//console.log(projects.length);

// 2️⃣ Print names of all 'completed' projects. (use filter + map)
let comProjects=projects.filter((eachPro)=>eachPro.status=="completed")
let comNames=comProjects.map((eachPname)=>eachPname.projectName)
//console.log(comNames)

// 3️⃣ Print all managers' names in uppercase.
let allManagers=projects.forEach((eachPro)=>console.log(eachPro.manager.toUpperCase()))


// 4️⃣ Print total budget of all projects. (use reduce)
let totalBud=projects.reduce((acc,curr)=>acc + curr.budget,0)
//console.log(totalBud);

// 5️⃣ Print all project names sorted by budget (descending order).
let proSorted=projects.toSorted((a,b)=>b.budget - a.budget)
proSorted.forEach((eachPro)=>console.log(eachPro.projectName));


// 6️⃣ Print total number of employees across all projects. (use map + flat + length)
let totalEmp=projects.map((eachPro)=>eachPro.team)
let flattendEmp=totalEmp.flat(Infinity);
//console.log("total numbe rof employees across all projects=",flattendEmp.length)



// 7️⃣ Print all unique roles (Developer, Tester, Designer, etc.) across projects. (use map + flat + new Set)
let obj = {};
flatEmp.forEach((eachPro) => {
  let rol = eachPro["role"];
  if (rol in obj) {
    obj[rol] = 1;
  } else {
    obj[rol] += 1;
  }
});
console.log(obj);

// 8️⃣ Print names of employees whose rating > 4.5. (use map + flat + filter)
let empRating=flattendEmp.filter((eachPro)=>eachPro["rating"] > 4.5)
empRating.forEach((eachPro)=>console.log("employees whose rating > 4.5=",eachPro.empName))

// 9️⃣ Print total working hours of project pid = 2. (use find + reduce)
let pid2=projects.find((eachPro)=>eachPro["pid"]==2)
let totalWorking=pid2.team.reduce((acc,curr)=>acc+curr["hours"],0 )
//console.log(totalWorking);


// 🔟 Print employee with highest rating overall. (use map + flat + reduce)
let highRating=flattendEmp.reduce((acc,curr)=>acc["rating"]>curr["rating"]?acc:curr)
//console.log(highRating)

// 11️⃣ Check if any project is still 'in-progress'. (use some)
let proInPRogress= projects.some((eachPro)=>eachPro.status=="in-progress")
//console.log(proInPRogress)

// 12️⃣ Check if all projects have budget above 5 lakh. (use every)
let proBudget=projects.every((eachPro)=>eachPro.budget>500000)
//console.log(proBudget)

// 13️⃣ Print all employees who worked more than 100 hours. (use map + flat + filter)
let empMoreHun=flattendEmp.filter((eachPro)=>eachPro.hours>100)
empMoreHun.forEach((eachEmp)=>console.log(eachEmp.empName));

// 14️⃣ Print total working hours of each project as an object: { projectName, totalHours }. (use map + reduce)
let newProject=projects.map((eachPro)=>{
    let obj={};
    let proName=eachPro.projectName;
    let totalHours=eachPro.team.reduce((acc,curr)=>acc+curr["hours"],0)
    obj[proName]=totalHours;
    return obj

})
//console.log(newProject)

// 15️⃣ Print the project that has the highest total team hours. (nested reduce logic)
let big = 0;
let highTotal = projects.reduce(
  (high, acc) =>
    (high = acc["team"].reduce((acc1, curr) => acc1 + curr["hours"], 0))
  // if(high>big){
  //   big=high;
  // }
);
console.log(highTotal);

// 16️⃣ Create a new array of all employee names (flat list). (use map + flat + map)
let newArray=flattendEmp.map((eachEmp)=>eachEmp.empName)
//console.log(newArray)

// 17️⃣ Print average rating of all Developers across all projects. (use map + flat + filter + reduce)
let rateDev=flattendEmp.filter((eachPro)=>eachPro.role=="Developer")
let avgRate=rateDev.reduce((acc,curr)=>acc+curr["rating"],0)
console.log(avgRate/rateDev.length)
// 18️⃣ Print all testers' names whose project status is 'completed'. (use filter + map + flat + filter)
let allTesters=projects.filter((eachPro)=>eachPro.status=="completed")
allTesters=flattendEmp.filter((eachEmp)=>eachEmp.role=="Tester")
//console.log(allTesters)
// 19️⃣ Print all team members sorted by their rating (highest → lowest). (use map + flat + sort)
empRating=flattendEmp.toSorted((a,b)=>a.rating-b.rating)
empRating.forEach((eachEmp)=>console.log(eachEmp.empName,eachEmp.rating));
// 20️⃣ Print manager name with the project that has the largest team size. (use reduce)
// 

let teamSize = projects.reduce((a, b) =>
  b["team"].length > a["team"].length ? b : a
);
console.log(teamSize["manager"]);

