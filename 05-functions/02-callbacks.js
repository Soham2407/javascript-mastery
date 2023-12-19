function greet(name, cb) {
  const id = Math.floor(Math.random() * 10);
  cb(name, id);
}

function callback(name, userId) {
  console.log(`welcome ${name}, your user id - U${userId}`);
}

greet("john", callback);
greet("alex", callback);
