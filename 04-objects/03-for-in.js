const person = {
  firstName: "virat",
  lastName: "kohli",
  job: "cricketer",
  age: 25,
};

for (let key in person) {
  // console.log("keys:", key);
  // console.log("values:", person[key]);
  console.log(`${key}: ${person[key]}`);
}
