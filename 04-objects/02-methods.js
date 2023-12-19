const person = {
  name: "virat",
  age: 30,
  greet: function () {
    console.log(`hi, my name is ${person.name}. I am ${person.age} years old.`);
  },
};

console.log(person);
person.greet();
