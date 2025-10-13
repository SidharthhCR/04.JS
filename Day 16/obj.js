let obj={
    name:'ajay',
    age:22,
    married:true,
    bloodgroup:'A+ve'
    
}
console.log(obj);
//dot notation
console.log(obj.name);
//bracket notation
console.log(obj['name']);
//in operator
console.log('bloodgroup' in obj);
//hasOwn property
console.log(obj.hasOwnProperty('bloodgroup'));
//delete
delete obj.bloodgroup;
console.log(obj);
//to add new kay values
obj.fathersName='sumesh';
console.log(obj);
obj['fathersName=sumesh'];
console.log(obj)
//to print keys
console.log(Object.keys(obj));
//to print values
console.log(Object.values(obj));
//to conert an obj into array 
console.log(Object.entries(obj));
