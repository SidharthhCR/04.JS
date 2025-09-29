const add = (a) => {
    return (b) => {
        return (c) => {
            console.log(a + b + c)
        }
    }
}
add(10)(20)(30);