//create a curried fn with 5 values and calculate its avg

const avg = (a) => {
    return (b) => {
        return (c) => {
            return (d) => {
                return (e) => {
                    console.log((a + b + c + d + e)/5)
                }
            }
        }
    }
}
avg(3)(6)(9)(12)(15);