class Bank {
    // property
    accountDetails = {
        1000: {
            accno: 1000,
            userName: "userOne",
            password: "password1",
            balance: 5000,
        },
        1001: {
            accno: 1001,
            userName: "userTwo",
            password: "password2",
            balance: 7000,
        },
        1002: {
            accno: 1002,
            userName: "userThree",
            password: "password3",
            balance: 8000,
        },
        1003: {
            accno: 1003,
            userName: "userFour",
            password: "password4",
            balance: 6000,
        },
        1004: {
            accno: 1004,
            userName: "userFive",
            password: "password5",
            balance: 9000,
        },
    };

    //   methods
    // Validate account no : (check account no is there)
    validate(accno) {
        if (accno in this.accountDetails) {
            return true;
        } else {
            return false;
        }
    }

    // authenticate account (acccno, username & password)
    authenticate(accno,userName,password){
        if(this.validate(accno)){
            let accDetails=this.accountDetails[accno];
            if(accDetails.userName==userName&&accDetails.password==password){
                return true;
            }
            else{
               return false;
            }
        }else{
            console.log("acc is not authenticated")
        }
    }


    // balance enquiry (accno)
    balance(accno,userName,password){
        if(this.validate(accno)){
            if(this.authenticate(accno,userName,password)){
                let acc=this.accountDetails[accno]
                console.log(acc.balance)
            }
        }else{
            console.log("wrong credentials")
        }
    }
}
let bank1 = new Bank();
let res = bank1.validate(1001)
res ? console.log("Account is valid") : console.log("Acoount is invalid");

let rus = bank1.authenticate(1001,"userTwo","password2")
rus ? console.log("acc is authenticate"):console.log("acc is not authenticated");

bank1.balance(1001,"userTwo","password2")