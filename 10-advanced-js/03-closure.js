// example 1
const greeting = (name) => {
  const msg = "Hello How are you?";

  return function () {
    return `${msg} ${name}`;
  };
};

const johnGreet = greeting("John");
console.log(johnGreet());

// example 2
const calculatePower = (power) => {
  return function (num) {
    return num ** power;
  };
};

const threeSquare = calculatePower(2);
console.log(threeSquare(3));

const fourCube = calculatePower(3);
console.log(fourCube(4));

// example 3
const func = () => {
  let count = 0;
  return () => {
    if (count < 1) {
      console.log("hi, you called me!");
      count++;
    } else {
      console.log("heyy...mai already ek bar call ho chuka huu");
    }
  };
};

const myFunc = func();
myFunc();
