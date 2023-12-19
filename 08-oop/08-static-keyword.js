class Person {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  static props = "static property";

  static classInfo() {
    return "Method related to class";
  }

  getUsername() {
    return `Hello, My username is ${this.userName}`;
  }

  getEmail() {
    return this.email;
  }
}

const user1 = new Person("virat@18", "virat.kohli@abc.com", 12345);
console.log(user1);
console.log(user1.getUsername());

//accessing static property and methods
console.log(Person.props);
console.log(Person.classInfo());

const user2 = new Person("rohit@45", "rohit.sharma@abc.com", 453245);
console.log(user2);
console.log(user2.getEmail());
