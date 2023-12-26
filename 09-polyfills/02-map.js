const arr = [1, 2, 3, 4, 5];

// const res = arr.map((el) => {
//   return el * 2;
// });

// console.log(res);

// polyfill for map
Array.prototype.myMap = function (callback) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    const data = callback(this[i], i, this);
    res.push(data);
  }
  return res;
};

const output = arr.myMap((el) => {
  return el * 2;
});

console.log(output);
