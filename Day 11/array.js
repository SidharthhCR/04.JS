let days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"]
console.log(days)
console.log(days[0])
console.log(days.length)
let length = days.length;
console.log(days[length - 1])

//arrayName.push(value)is used to add a new element to the array in the last index
days.push("qwerty")
console.log(days)
//arrayName.pop(value)is used to remove an element from the array in the last index
days.pop()
console.log(days)
//arrayName.unshift(value)is used to add a new element to the array in the first index
days.unshift("suiiiii")
console.log(days)
//arrayName.shift(value)is used to remove an element from the array in the first index 
days.shift()
console.log(days)


