// create new instance XMLHttpRequest object
const xhr = new XMLHttpRequest();

// when ready state property changes this function will be called
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};

// specify the request
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

// send request to server
xhr.send();
