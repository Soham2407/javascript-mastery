class Product {
  constructor(title, imageUrl, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    let prodEl = document.createElement("li");
    prodEl.innerHTML = `
          <div class='product'>
              <img src=${this.product.imageUrl} alt=${this.product.title}/>
              <div class='desc'>
                  <h2>${this.product.title}</h2>
                  <h3>₹ ${this.product.price}</h3>
              </div>
              <button class='btn'>Add to cart</button>
          </div>
        `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "Laptop",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_8rVLen3GnYtTlpl9jAZnMPZzPj3n_08oA&usqp=CAU",
      58000
    ),

    new Product(
      "Mobile",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOiLpY6-BsoFmO-ORdj_KgfWA6X6W-UFv8w&usqp=CAU",
      30000
    ),
  ];

  constructor() {}

  render() {
    let prodLists = document.createElement("ul");
    prodLists.className = "product-list";
    for (let prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodLists.append(prodEl);
    }

    let app = document.getElementById("app");
    app.appendChild(prodLists);
  }
}

const productList = new ProductList();
productList.render();
