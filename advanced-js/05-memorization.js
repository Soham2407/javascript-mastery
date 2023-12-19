const calculateFactorial = (num) => {
  console.log("function is called");
  let fact = 1;

  for (i = 1; i <= num; i++) {
    fact = fact * i;
  }

  return fact;
};

function memoize(cb) {
  let obj = {};
  return (...args) => {
    const num = args[0];
    if (num in obj) {
      return obj[num];
    } else {
      const res = cb(num);
      obj[num] = res;
      console.log(obj);
      return res;
    }
  };
}

const result = memoize(calculateFactorial);
console.log("result", result(5));
console.log("result", result(10));
console.log("result", result(5));
