// primitives
let a = 10;
let b = a;

console.log(a); // 10
console.log(b); // 10

a = 20;
console.log(a); // 20
console.log(b); // 10

// refferences
let obj1 = {
  a: 100,
};

let obj2 = obj1;

console.log(obj1); // { a: 100 }
console.log(obj2); // { a: 100 }

obj1.a = 200;

console.log(obj1); // { a: 200 }
console.log(obj2); // { a: 200 }
