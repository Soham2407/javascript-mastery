const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("getting api data");
  }, 1000);
});

async function getData() {
  try {
    const res = await promiseOne;
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

getData();

// api call
async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

getUsers();
