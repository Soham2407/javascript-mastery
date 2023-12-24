function createOrder(callback) {
  setTimeout(() => {
    console.log("create order");
    callback();
  }, 2000);
}

function proceedToPayment(callback) {
  setTimeout(() => {
    console.log("make payment");
    callback();
  }, 3000);
}

function showOrderDetails(callback) {
  setTimeout(() => {
    console.log("show order");
    callback();
  }, 1000);
}

function addCashbackToWallet() {
  setTimeout(() => {
    console.log("add cashback to wallet");
  }, 2000);
}

// callback hell or inversion of control or pyramid of doom
createOrder(() => {
  proceedToPayment(() => {
    showOrderDetails(() => {
      addCashbackToWallet();
    });
  });
});
