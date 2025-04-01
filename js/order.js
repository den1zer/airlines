document.addEventListener("DOMContentLoaded", function () {
  loadCart();
});

function loadCart() {
  const cartContainer = document.getElementById("cart_container");
  const totalPriceEl = document.getElementById("total_price");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalPrice = 0;

  cartContainer.innerHTML = "";

  cart.forEach((ticket, index) => {
    totalPrice += parseFloat(ticket.price);

    const ticketCard = document.createElement("div");
    ticketCard.classList.add("ticket_card");
    ticketCard.innerHTML = `
            <p><strong>From:</strong> ${ticket.city_from}</p>
            <p><strong>To:</strong> ${ticket.city_to}</p>
            <p><strong>Class:</strong> ${ticket.clas}</p>
            <p><strong>Seat:</strong> ${ticket.seat}</p>
            <p><strong>Time:</strong> ${ticket.time}</p>
            <p><strong>Date:</strong> ${ticket.date}</p>
            <p><strong>Price:</strong> ${ticket.price} UAH</p>
            <button class="remove_btn" onclick="removeFromCart(${index})">Remove</button>
        `;
    cartContainer.appendChild(ticketCard);
  });

  totalPriceEl.textContent = totalPrice.toFixed(2);
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

document.getElementById("confirm_btn").addEventListener("click", function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length > 0) {
    const orderHistory = JSON.parse(localStorage.getItem("order_history")) || [];
    const newOrder = {
      id: Date.now(), // Генерація унікального ID замовлення (на основі часу)
      tickets: cart,
      date: new Date().toLocaleString() // Дата оформлення замовлення
    };

    orderHistory.push(newOrder);
    localStorage.setItem("order_history", JSON.stringify(orderHistory));
    alert("Order confirmed and saved to history!");
    localStorage.removeItem("cart");
    loadCart();
  } else {
    alert("Cart is empty, nothing to confirm.");
  }
});
