class Developer {
  constructor(name){
    this.name = name;
    this.type = "Developer"
  }
}

class Tester {
  constructor(name){
    this.name = name;
    this.type = "Tester"
  }
}

class EmployeeFactory {
  create(name,type){
    switch (type) {
      case 1:
        return new Developer(name);
      break;
      case 2:
        return new Tester(name);
      break;
      
    }
  }
}

function say(){
  console.log("Hi, I am "+ this.name + " and I am a " + this.type);
}

let empObj = new EmployeeFactory();
const employees = [];
employees.push(empObj.create("Marcus",1));
employees.push(empObj.create("Lenon",2));
employees.push(empObj.create("Jhon",1));
employees.push(empObj.create("Harry",1));
employees.push(empObj.create("Jake",2));

employees.forEach((emp)=>{
  say.call(emp);
});