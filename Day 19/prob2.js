const employees = [
  {
    empId: 101,
    empName: "Alice",
    designation: "Developer",
    salary: 50000,
    worklog: [
      { project: "E-Commerce", hours: 8, task: "Frontend", mode: "remote" },
      { project: "BankApp", hours: 6, task: "API Integration", mode: "office" },
      { project: "Portfolio", hours: 4, task: "Bug Fixing", mode: "remote" },
    ],
  },
  {
    empId: 102,
    empName: "Bob",
    designation: "Tester",
    salary: 40000,
    worklog: [
      { project: "E-Commerce", hours: 5, task: "Testing", mode: "office" },
      { project: "HealthApp", hours: 7, task: "Automation", mode: "remote" },
    ],
  },
  {
    empId: 103,
    empName: "Charlie",
    designation: "Manager",
    salary: 70000,
    worklog: [
      { project: "BankApp", hours: 9, task: "Review", mode: "office" },
      { project: "E-Commerce", hours: 6, task: "Client Meeting", mode: "office" },
    ],
  },
  {
    empId: 104,
    empName: "Diana",
    designation: "Developer",
    salary: 55000,
    worklog: [
      { project: "Portfolio", hours: 7, task: "UI Design", mode: "remote" },
      { project: "HealthApp", hours: 5, task: "Backend", mode: "office" },
    ],
  },
  {
    empId: 105,
    empName: "Evan",
    designation: "Support",
    salary: 35000,
    worklog: [
      { project: "BankApp", hours: 4, task: "Customer Support", mode: "remote" },
      { project: "E-Commerce", hours: 6, task: "Live Chat", mode: "office" },
    ],
  },
];



// 1. Print total number of employees
// console.log(employees.length)

// 2. Print names of all Developers
let namesOfDev=employees.filter((eachEmp)=>eachEmp.designation=="Developer")
namesOfDev.forEach((eachEmp)=>console.log(eachEmp.empName))

console.log('--------------------------------------------');


// 3. Print salary of employee with empId 103
let emp103=employees.find((eachEmp)=>eachEmp.empId==103)
console.log(emp103.salary)
console.log('--------------------------------------------');
// 4. Print all worklogs done in 'remote' mode
let allWorkLog=employees.map((eachEmp)=>eachEmp.worklog)
let worklogs=allWorkLog.flat(Infinity)
let remoteEmp=worklogs.filter((eachEmp)=>eachEmp.mode==["remote"])
console.log(remoteEmp);
console.log('--------------------------------------------');

// 5. Print all worklogs where hours > 6
let hours=worklogs.filter((eachEmp)=>eachEmp.hours > 6)
console.log("worklog hours morethan 6=",hours)


console.log('--------------------------------------------');

// 6. Print all worklogs done on project 'E-Commerce'
let projectEcom=worklogs.filter((eachEmp)=>eachEmp.project=="E-Commerce")
console.log(projectEcom)

console.log('--------------------------------------------');

// 7. Print all tasks done by employee with empId 104
let tasksEmp4=employees.find((eachEmp)=>eachEmp.empId==104)
let task=tasksEmp4.task
console.log(tasksEmp4);
console.log('--------------------------------------------');

// 8. Print total working hours of employee with empId 104
  let totalWorkHour=tasksEmp4.worklog.reduce((acc,curr)=>acc+curr["hours"],0)
  console.log("emp4 total working hours =",totalWorkHour)

console.log('--------------------------------------------');

// 9. Print employee who worked the most total hours (sum of worklog hours)
let maxHours=0
let maxName=""
employees.forEach((eachEmp)=>{
    let totalHours=eachEmp.worklog.reduce((acc,curr)=>acc+curr['hours'],0)
    if(totalHours>maxHours){
        maxHours=totalHours
        maxName=eachEmp.empName
    }
})
console.log(maxHours,maxName);
console.log('--------------------------------------------');

// 10. Print employee with the highest salary
let highestSal=employees.reduce((acc,curr)=>acc.salary>curr.salary ?acc:curr)
console.log(highestSal)
console.log('--------------------------------------------');