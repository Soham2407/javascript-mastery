function sayHi() {
  console.log("hellloooo");
}

// only functions provide prototype property

sayHi.prototype.userName = "User";
sayHi.prototype.age = 20;
sayHi.prototype.sing = function () {
  console.log("lalala");
};

console.log(sayHi.prototype);
console.log(sayHi.prototype.userName);
console.log(sayHi.prototype.sing());
