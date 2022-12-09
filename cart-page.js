// Function to display the items in the cart
function displayCart() {
    let cartTable = document.getElementById("cart-table");
    for (let i = 0; i < cart.length; i++) {
      let item = cart[i];
      let row = `<tr>
        <td>${item.name}</td>
        <td><input type="number" value="1"></td>
        <td>${item.price}</td>
        <td><button onclick="removeFromCart('${item.name}')">Remove</button></td>
      </tr>`;
      cartTable.innerHTML += row;
    }
  }
  
  // Function to update the total cost of the items in the cart
  function updateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let item = cart[i];
      let quantity = document.getElementsByTagName("input")[i].value;
      total += item.price * quantity;
    }
    document.getElementById("total").innerHTML = `Total: $${total.toFixed(2)}`;
  }
  