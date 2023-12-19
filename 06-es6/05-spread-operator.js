// arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2, 7, 9];
console.log(arr3);

// objects
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3, p: 4 };
const obj3 = { ...obj1, ...obj2, q: 6 };
console.log(obj3);
