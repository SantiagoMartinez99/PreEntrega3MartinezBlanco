let items = [
  {
    id: 0,
    name: "Yeezy Gap Hoodie",
    price: 170,
    image: "yeezygaphoodie.webp",
    quantity: 1,
  },
  {
    id: 1,
    name: "Yeezy Gap Cap",
    price: 75,
    image: "yeezycap.jpeg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Calabassas Pants",
    price: 153,
    image: "calabassaspants.webp",
    quantity: 1,
  },
];

let shoppingCart = [];

const btnCart = document.querySelector(".container-cart-icon");
const containerCartProducts = document.querySelector(
  ".container-cart-products"
);

const itemList = document.querySelector(".container-items");

items.forEach((item, index) => {
  let card = document.createElement("div");
  card.classList.add("card");
  let html = `
    <img src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">Price: ${item.price}</p>
      <p class="card-text">Quantity: ${item.quantity}</p>
      <a class="btn btn-primary" onClick="addToCart(${index})">Add to Cart</a>
    </div>
  `;
  card.innerHTML = html;
  itemList.appendChild(card);
});

function addToCart(index) {
  const itemToAdd = items.find((item) => item.id == index);
  shoppingCart.push(itemToAdd);
  console.log(shoppingCart);
  showShoppingCart();
}

function removeItem(id) {
  const index = shoppingCart.findIndex((item) => item.id === id);
  if (index !== -1) {
    shoppingCart.splice(index, 1);
    showShoppingCart();
  }
}

function showShoppingCart() {
  let totalPrice = 0;
  if (shoppingCart.length == 0) {
    document.getElementById("count-cart-products").innerText = "";
    document.getElementById("total-cart-shop").innerHTML =
      "No tiene items en el carrito";
    document.getElementById("buyItems").hidden;
    document.getElementById("buyItems").hidden = true;
  } else {
    document.getElementById("buyItems").hidden = false;
  }
  const cartContainer = document.getElementById("cart-total hidden");

  cartContainer.innerHTML = "";

  shoppingCart.forEach((item) => {
    let itemToBuy = document.createElement("div");
    itemToBuy.classList.add("shop-card");
    let html = `
      <img src="${item.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">Price: ${item.price}</p>
        <p class="card-text">Quantity: ${item.quantity}</p>
        <button type="button" class="btn btn-danger" onClick=removeItem(${item.id})>Remove</button>
        
      </div>
    `;
    itemToBuy.innerHTML = html;
    cartContainer.appendChild(itemToBuy);
  });
  for (let i = 0; i < shoppingCart.length; i++) {
    totalPrice += shoppingCart[i].price;
    document.getElementById("total-cart-shop").innerHTML =
      "El total es de:" + totalPrice;
    document.getElementById("count-cart-products").innerText = i + 1;
  }
}

btnCart.addEventListener("click", () => {
  containerCartProducts.classList.toggle("hidden-cart");
});

function buyItems() {
  const cartContainer = document.getElementById("cart-total hidden");
  cartContainer.innerHTML = "La compra ha sido realizada";
  document.getElementById("buyItems").hidden = true;
}
