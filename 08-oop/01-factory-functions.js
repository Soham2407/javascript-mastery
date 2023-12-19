const userMethods = {
  about: function () {
    return `Hi my name is ${this.firstName} ${this.lastName}`;
  },

  is18: function () {
    return this.age >= 18;
  },
};

function person(firstName, lastName, age) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    about: userMethods.about,
    is18: userMethods.is18,
  };
}

const user1 = person("Virat", "Kohli", 34);
console.log(user1);
console.log(user1.about());
console.log(user1.is18());
