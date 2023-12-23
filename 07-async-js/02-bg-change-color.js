function generateRandomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");

let intervalId;

startBtn.addEventListener("click", function () {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = generateRandomColor();
    }, 1000);
  }
});

stopBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
});
