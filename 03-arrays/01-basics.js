// const favCricketers = ["virat", "dhoni", "sachin", "rohit"];
// console.log(favCricketers);
// console.log(favCricketers[0]);
// console.log(favCricketers[3]);

// const mixArr = ["king", favCricketers, true, 10];
// console.log(mixArr);
// console.log(mixArr[2]);
// console.log("king", mixArr[1][0]);

// basic array methods
const arr = [10, 20, true, "hi", null];

// 1.push
arr.push(50);
arr.push("john");

// pop
arr.pop();

// unshift
arr.unshift(5);
arr.unshift("music");

// shift
arr.shift();

// splice
arr.splice(3, 0, "good bye");
arr.splice(5, 1);

// include
console.log(arr.includes("good bye")); // true
console.log(arr.includes("bye")); // true

// slice
console.log(arr.slice(2, 5));

// concat
const arr1 = [10, 20];
const arr2 = [30, 40, 50];
console.log(arr1.concat(arr2));

// length
console.log(arr.length);

console.log(arr);
