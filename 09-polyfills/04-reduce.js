const arr = [1, 2, 3, 4, 5];

// const res = arr.reduce((acc, cur) => {
//   return acc + cur;
// }, 0);

// console.log(res);

// polyfill for reduce
Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? callback(acc, this[i]) : this[i];
  }
  return acc;
};

const res = arr.myReduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(res);
