const a = true;
const b = false;
const c = 4;

// and &&
console.log(a && b); // false
console.log(a && c); // 4

// or ||
console.log(a || b); // true
console.log(true || c); // true
console.log(b || c); // 4

// not !
console.log(!a); // false
console.log(!4); // false
console.log(!b); // true
