class Person {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
  getUsername() {
    return `Hello, My username is ${this.userName}`;
  }

  get getEmail() {
    return this.email;
  }

  set setEmail(email) {
    this.email = email;
  }
}

const user1 = new Person("virat@18", "virat.kohli@abc.com", 12345);
console.log(user1);
console.log(user1.getUsername());
console.log(user1.getEmail);

user1.setEmail = "kingkohli18@abc.com";
console.log(user1);
