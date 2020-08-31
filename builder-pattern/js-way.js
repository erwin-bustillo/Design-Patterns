class Address {
  constructor(zip,street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {

  constructor(name,{age,phone,address} = {}){
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
  
}

let user = new User("Shivam",{age: 25, address: new Address("209303","Rura"), phone: "7336383939"});
console.log(user);