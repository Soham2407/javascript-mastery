// case 1
// promise1 -> resolve
// promise2 -> resolve

function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("getting data 1");
    }, 3000);
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("getting data 2");
    }, 1000);
  });
}

Promise.all([promise1(), promise2()])
  .then((arrayData) => {
    console.log(arrayData);
  })
  .catch((err) => {
    console.log("error", err);
  });

// case 2
// f1 -> resolve
// f2 -> resolve

function f1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved data");
    }, 2000);
  });
}

function f2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error: rejected data");
    }, 1000);
  });
}

Promise.all([f1(), f2()])
  .then((dataArray) => {
    console.log("data", dataArray);
  })
  .catch((err) => {
    console.log(err);
  });
