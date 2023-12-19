// array destructuring
const names = ["john", "adam", "alex", "json"];
const [first, second, , fourth] = names;
console.log(first, second, fourth);

// default values
const colors = ["red", "green"];
const [color1, color2, color3 = "blue"] = colors;
console.log(color1, color2, color3);

// function destructuring
function foo() {
  return [1, 2, 5];
}

const [x, y] = foo();
console.log(x, y);

// assigning rest of an array to variable
const myFruits = ["apple", "mango", "chiku", "banana", "orange"];
const [apple, mango, ...fruits] = myFruits;
console.log(apple, mango, fruits);

// objects
const person = {
  name: "virat",
  age: 34,
  hobbies: ["cricket", "singing"],
  address: {
    city: "mumbai",
    pinCode: 413874,
  },
};

const {
  name: firstName,
  age,
  hobbies: [cricket, singing],
  address: { city },
} = person;
console.log("name:", firstName);
console.log("age:", age);
console.log("hobbies:", cricket, singing);
console.log("city:", city);
