// properties and values
const a = 1;
const b = 2;
const c = 3;

// const obj = {
//   a: a,
//   b: b,
//   c: c,
// };

const obj = {
  a,
  b,
  c,
};

console.log(obj);

// methods
// const lib = {
//   add: function (a, b) {
//     return a + b;
//   },
//   sub: function (a, b) {
//     return a - b;
//   },
// };

const lib = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
};

console.log(lib.add(5, 6));
console.log(lib.sub(10, 6));
