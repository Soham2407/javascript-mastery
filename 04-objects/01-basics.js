const person = {
  firstName: "John",
  lastName: "doe",
  age: 24,
  hobbies: ["cricket", "singing"],
};

// accessing properties
console.log(person.firstName);
console.log(person["hobbies"]);

// adding properties
person.isMarried = false;
person.job = "web developer";

// delete property
delete person.isMarried;

console.log(person);
