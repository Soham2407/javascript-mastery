const printName = function () {
  console.log("Hello JS");
};

let intervalId;

document.querySelector("#start").addEventListener("click", () => {
  intervalId = setInterval(printName, 2000);
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(intervalId);
});
