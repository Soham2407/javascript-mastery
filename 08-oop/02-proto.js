const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj3 = {
  key4: "value4",
};

const obj2 = Object.create(obj1);

obj2.key3 = "value3";

console.log(obj2);
console.log(obj2.key3);
console.log(obj2.key1);

// solution using Object.create()
const userMethods = {
  about: function () {
    return `Hi my name is ${this.firstName} ${this.lastName}`;
  },

  is18: function () {
    return this.age >= 18;
  },
};

function person(firstName, lastName, age) {
  const user = Object.create(userMethods);

  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;

  return user;
}

const user1 = person("Virat", "Kohli", 34);
console.log(user1);
console.log(user1.about());
console.log(user1.is18());

const user2 = person("Rohit", "Sharma", 14);
console.log(user2);
console.log(user2.about());
console.log(user2.is18());
