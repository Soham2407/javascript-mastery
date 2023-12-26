const arr = [1, 2, 3, 4, 5];

// arr.forEach((el) => {
//   console.log(el);
// });

// polyfill for forEach
Array.prototype.myForEach = function (callback) {
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.myForEach((el) => {
  console.log(el);
});
