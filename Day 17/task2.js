const studentScores = [
    { student: "Alice", score: 85 },
    { student: "Bob", score: 78 },
    { student: "Charlie", score: 92 },
    { student: "Alice", score: 90 },
    { student: "Bob", score: 88 },
    { student: "Charlie", score: 95 },
    { student: "David", score: 80 },
    { student: "David", score: 83 },
];

// Print each student's total score
let output = {};

studentScores.forEach((eachStu) => {
    let studentName = eachStu.student;
    let currentScore = eachStu.score;
    if (output.hasOwnProperty(studentName)) {
        output[studentName] += currentScore;
    }
    else {
        output[studentName] = currentScore;
    }
});
console.log(output);