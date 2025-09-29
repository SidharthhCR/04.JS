// T T T T T
//     T
//     T
//     T
//     T     

for (let row = 1; row <= 5; row++) {
    let line = "";
    for (let col = 1; col <= 5; col++) {
        if (col == 3 || row == 1) {
            line += " T";
        }
        else {
            line += "  ";
        }
    }
    console.log(line)
}