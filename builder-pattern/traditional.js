class Address {
  constructor(zip,street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name){
    this.name = name;
  }
}

class UserBuilder {
  constructor(name){
    this.user = new User(name);
  }

  setAge(age){
    this.user.age = age;
    return this;
  }

  setPhone(phone){
    this.user.phone = phone;
    return this;
  }

  setAddress(address){
    this.user.address = address;
    return this;
  }

  build(){
    return this.user;
  }
}


let user = new UserBuilder('Shivam').setAge(24).setPhone('+1 3013617879').setAddress("208001").build();
console.log(user);