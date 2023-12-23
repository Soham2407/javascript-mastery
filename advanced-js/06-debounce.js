let count = 0;
function getData() {
  console.log("getting data", count++);
}

function debounce(callback, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}

const betterFunction = debounce(getData, 1000);

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", betterFunction);
