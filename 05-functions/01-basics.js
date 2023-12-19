// function declaration
function greet() {
  console.log("hello I am function");
}

greet();
greet();

// function expression
const sayHi = function () {
  console.log("hello I am function expression");
};

sayHi();

// parameters, arguments, return keyword
function add(x, y) {
  return x + y;
}

const res1 = add(3, 6);
const res2 = add(30, 20);
const res3 = add(45, 25);
console.log(res1);
console.log(res2);
console.log(res3);
