const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("getting an api data");
  }, 2000);
});

promiseOne.then((data) => console.log(data)).catch((err) => console.log(err));

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    let err = false;
    if (!err) {
      resolve("getting data");
    } else {
      reject("something wwnt wrong!");
    }
  }, 1000);
});

promiseTwo
  .then((data) => {
    console.log(data);
    return "now you do another task";
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// fetch api - this also return promise
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
