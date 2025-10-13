const employeeAttendance = [
    { employee: "John", status: "Present" },
    { employee: "Mary", status: "Absent" },
    { employee: "John", status: "Present" },
    { employee: "Mary", status: "Present" },
    { employee: "Steve", status: "Present" },
    { employee: "Steve", status: "Absent" },
    { employee: "Mary", status: "Present" },
    { employee: "John", status: "Absent" },
];

// Question: Print how many days each employee was "Present".
let output = {};

employeeAttendance.forEach((eachEmp) => {
    let employeeName = eachEmp.employee;
    let currentStatus = eachEmp.status;
    if (output.hasOwnProperty(employeeName)) {
        if (currentStatus == "Present") {
            output[employeeName] += 1;
        }
    } else {
        if (currentStatus == "Present") {
            output[employeeName] = 1;
        }
        else {
            output[employeeName] = 0;
        }

    }

});
console.log(output);
