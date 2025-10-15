class person{
    constructor(){
    this.name="sidhu";
    this.height="178cm";
    this.weight="75kg";}

    printDetails(){
        console.log(`Name:${this.name},Weight:${this.weight}`)
    }
}
let p1=new person();
p1.printDetails();