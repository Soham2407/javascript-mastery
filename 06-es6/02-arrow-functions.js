// arrow functions

const add = (a, b) => {
  console.log(a + b);
};
add(2, 5);
add(2, 8);

// const greet = (username) => {
//   return `hello ${username}`
// }

const greet = (username) => `hello ${username}`;
console.log(greet("Ramesh"));

setTimeout(() => {
  console.log(`Namaste JS`);
}, 1000);
