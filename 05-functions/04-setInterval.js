// setInterval(function () {
//   console.log("this function will be executed after every 3 sec");
// }, 3000);

const id = setInterval(function () {
  console.log("this function will be executed after every 3 sec");
  clearInterval(id); // its clear an interval
}, 3000);
