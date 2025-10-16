class accDetails{
    accNO=1001;
    accName="jo";
    #balance=200;//using "#" to hide the data

    printBalance() {
    console.log(this.#balance)
}
}
let b1=new accDetails()
b1.printBalance()
console.log(b1.balance)