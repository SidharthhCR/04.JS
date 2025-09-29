//1  4  7  10
//2  5  8  11
//3  6  9  12
//4  7  10 13


for (let row = 1; row < 5; row++) {
    let line = "";
    let counter = row;
    for (let column = 1; column < 5; column++) {
        line += counter + " ";
        counter += 3;

    }
    
    console.log(line)
}