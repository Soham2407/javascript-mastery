(function () {
  console.log("hey I am IIFE");
})();

(function (name) {
  console.log(`Hello ${name}`);
})("Soham");
