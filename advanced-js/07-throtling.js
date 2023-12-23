const btn = document.getElementById("btn");

function sendToBackend() {
  btn.disabled = false;
  console.log("send data to backend");
}

const throtle = (callback, delay) => {
  return (...args) => {
    btn.disabled = true;
    setTimeout(() => {
      callback();
    }, delay);
  };
};

const betterFunction = throtle(sendToBackend, 2000);
btn.addEventListener("click", betterFunction);
