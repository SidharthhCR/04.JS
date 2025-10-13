const accounts = [
    {
        acno: 1000,
        ac_type: "saving",
        balance: 45000,
        transaction: [
            { to: 1001, amount: 5000, msg: "ebill", mode: "gpay" },
            { to: 1002, amount: 2000, msg: "emi", mode: "neft" },
            { to: 1003, amount: 1000, msg: "recharge", mode: "phonePe" },
        ],
    },
    {
        acno: 1001,
        ac_type: "current",
        balance: 30000,
        transaction: [
            { to: 1000, amount: 4000, msg: "rent", mode: "upi" },
            { to: 1004, amount: 3500, msg: "shopping", mode: "net banking" },
        ],
    },
    {
        acno: 1002,
        ac_type: "saving",
        balance: 55000,
        transaction: [
            { to: 1003, amount: 5000, msg: "loan", mode: "rtgs" },
            { to: 1005, amount: 1500, msg: "grocery", mode: "upi" },
        ],
    },
    {
        acno: 1003,
        ac_type: "saving",
        balance: 20000,
        transaction: [
            { to: 1002, amount: 2500, msg: "internet bill", mode: "neft" },
            { to: 1004, amount: 3200, msg: "electricity", mode: "gpay" },
        ],
    },
    {
        acno: 1004,
        ac_type: "current",
        balance: 60000,
        transaction: [
            { to: 1005, amount: 7000, msg: "car loan", mode: "phonePe" },
            { to: 1001, amount: 2200, msg: "fuel", mode: "upi" },
        ],
    },
];

// total number of accounts

//console.log(accounts.length);
// print account number whose ac_type is savings
// let save=accounts.filter((eachAcc)=>eachAcc.ac_type=="saving")

// console.log("saving acc=",save);
// print the balance of account number 1000
// accounts.forEach((eachAcc)=>{
//     if(eachAcc.acno==1000){
//     console.log(eachAcc. balance);
//     }
// })

 //print all phonePay transaction
 let transactions = accounts.map((eachAcc) => eachAcc.transaction)
 let flattenedTransactions = transactions.flat(Infinity)
 let phonepay = flattenedTransactions.filter((eachTran) => eachTran.mode == "phonePe")

 console.log(phonepay);
// print all transactions > 3000
 let greater = flattenedTransactions.filter((eachTran) => eachTran.amount > 3000)
 console.log(greater);
// print credit transaction of account 1002(CREDITED TO)
let credittedTo1002=flattenedTransactions.filter((eachTran)=>eachTran.to==1002)
console.log(credittedTo1002)
// print total credited amount to 1002
let totalCredited=credittedTo1002.reduce((acc,curr)=>acc + curr.amount,0)
console.log(totalCredited);

// print debit transaction of 1002
let debitedFrom=accounts.find((eachAcc)=>eachAcc.acno==1002)

let debitedTo1002=debitedFrom.transaction
console.log(debitedTo1002);

console.log('--------------------------------')
// transaction history of 1002
let tranHistory=[...credittedTo1002,...debitedTo1002];
console.log(tranHistory);

// current balance of 1002 (balace +credit amount)
let balanceTotal=debitedFrom.balance+=totalCredited
console.log(balanceTotal)

// Account with highest balance
let highestBalance=accounts.reduce((acc,curr)=>acc.balance > curr.balance ?acc:curr)
console.log(highestBalance)