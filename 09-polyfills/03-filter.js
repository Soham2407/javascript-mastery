const arr = [1, 2, 3, 4, 5];

// const res = arr.filter((el) => el > 2);
// console.log(res);

// polyfill for filter
Array.prototype.myFilter = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};

const res = arr.myFilter((el) => el > 2);
console.log(res);
