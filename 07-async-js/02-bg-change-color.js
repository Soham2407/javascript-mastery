// generate random hex color code
function generateRandomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

let intervalId;

const startChangingColor = () => {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = generateRandomColor();
  }, 1500);
};

// click on start button
document.querySelector("#start").addEventListener("click", startChangingColor);

function stopChangingColor() {
  clearInterval(intervalId);
}

// click on stop button
document.querySelector("#stop").addEventListener("click", stopChangingColor);
