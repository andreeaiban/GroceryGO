// Create an empty array to store the items in the cart
let cart = [];

// Function to add an item to the cart
function addToCart(name, price, quantity) {
  let item = { name, price, quantity };
  cart.push(item);
  alert(`${name} added to cart!`);
}

// Function to remove an item from the cart
function removeFromCart(name) {
  let index = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    let removedItem = cart.splice(index, 1);
    alert(`${name} removed from cart!`);
    updateDisplayCart();
    updateTotal();
  } else {
    alert(`${name} not found in cart.`);
  }
}

// Function to update the display cart
function updateDisplayCart() {
  let displayCart = document.getElementById("cart-table");
  displayCart.innerHTML = ""; // Clear the display cart

  // Add the table headers
  let headers = `
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  `;
  displayCart.innerHTML += headers;

  // Add the items in the cart
  for (let i = 0; i < cart.length; i++) {
    let name = cart[i].name;
    let price = cart[i].price;
    let quantity = cart[i].quantity;
    let item = `
      <tr>
        <td>${name}</td>
        <td>${quantity}</td>
        <td>${price}</td>
        <td><button type="button" onclick="removeFromCart('${name}')">Remove</button></td>
      </tr>
    `;
    displayCart.innerHTML += item;
  }
}

// Function to update the total
function updateTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  let totalElement = document.getElementById("total");
  totalElement.innerHTML = "Total: " + total;
}

// Function to display the cart
function displayCart() {
  updateDisplayCart();
  updateTotal();
}

// Add an event listener that listens for
// Add an event listener that listens for clicks on the "Display Cart" button
let displayCartButton = document.getElementById("display-cart-button");
displayCartButton.addEventListener("click", displayCart);