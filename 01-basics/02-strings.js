const firstName = "pRo";
const lastName = "coder";

// concatination
const fullName = firstName + " " + lastName;
console.log(fullName);

// length
console.log(lastName.length);

// cases
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

// slice
console.log(lastName.slice(0, 4));

// split
const splitToArray = fullName.split(" ");
console.log(splitToArray);

// join
const joinToString = splitToArray.join(" ");
console.log(joinToString);

// includes
console.log(lastName.includes("co"));
