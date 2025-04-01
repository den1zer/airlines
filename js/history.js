document.addEventListener("DOMContentLoaded", function () {
  const historyContainer = document.getElementById("history_container");
  const orderHistory = JSON.parse(localStorage.getItem("order_history")) || [];

  if (orderHistory.length === 0) {
    historyContainer.innerHTML = "<p>No orders found.</p>";
    return;
  }

  let html = "";
  orderHistory.forEach((order) => {
    html += `
      <div class="order_card">
        <h3>Order ID: ${order.id}</h3>
        <p><strong>Date:</strong> ${order.date}</p>
        <div class="tickets_list">
    `;

    order.tickets.forEach((ticket) => {
      html += `
        <div class="ticket_card">
          <p><strong>From:</strong> ${ticket.city_from}</p>
          <p><strong>To:</strong> ${ticket.city_to}</p>
          <p><strong>Class:</strong> ${ticket.clas}</p>
          <p><strong>Seat:</strong> ${ticket.seat}</p>
          <p><strong>Time:</strong> ${ticket.time}</p>
          <p><strong>Date:</strong> ${ticket.date}</p>
          <p><strong>Price:</strong> ${ticket.price} UAH</p>
        </div>
      `;
    });

    html += `</div><hr /></div>`;
  });

  historyContainer.innerHTML = html;
});
