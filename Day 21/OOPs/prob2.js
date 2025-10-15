class employee{
    constructor(empId,empName,empSal,empDes){
        this.empId=empId;
        this.empName=empName;
        this.empSal=empSal;
        this.empDes=empDes;

    }
    printDetails(){
        console.log(this.empId,this.empName,this.empSal)
    }
}
let emp1=new employee(101,"nehab",4500000,"developer");
emp1.printDetails();
 let emp2=new employee(102,"ajay",5000000,"tester");
emp2.printDetails();
let emp3=new employee(103,"ashkar",5300000,"sdeveloper");
emp3.printDetails();