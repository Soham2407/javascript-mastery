class Person {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
  getUsername() {
    return `Hello, My username is ${this.userName}`;
  }

  getEmail() {
    return this.email;
  }
}

class Guest extends Person {
  constructor(userName, email, password, age) {
    super(userName, email, password);
    this.age = age;
  }

  getAge() {
    return this.age;
  }
}

const user1 = new Guest("virat@18", "virat.kohli@abc.com", 12345, 34);
console.log(user1);
console.log(user1.getUsername());
console.log(user1.getAge());
