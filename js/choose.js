document.addEventListener("DOMContentLoaded", async function () {
  await SearchResult();
});

async function SearchResult() {
  const CityFrom = localStorage.getItem("city_from");
  const CityTo = localStorage.getItem("city_to");
  const Date = localStorage.getItem("date");



    const filteredTickets = tickets.filter(
        (ticket) =>
        ticket.city_from === CityFrom &&
        ticket.city_to === CityTo &&
        ticket.date === Date
    );

    const tableBody = document.querySelector("table tbody");
    tableBody.innerHTML = "";

    if (filteredTickets.length === 0) {
      alert("Tickets not found.")
      window.location.href = "main.html";
    } else {
      filteredTickets.forEach((ticket) => {
        let row = tableBody.insertRow();
        row.innerHTML = `
          <td>${ticket.city_from}</td>
          <td>${ticket.city_to}</td>
          <td>${ticket.clas}</td>
          <td>${ticket.seat}</td>
          <td>${ticket.time}</td>
          <td>${ticket.date}</td>
          <td>${ticket.price}</td>
          <td><button class="book_btn" onclick="addToCart(${ticket.id}, '${ticket.city_from}', '${ticket.city_to}', '${ticket.clas}', '${ticket.seat}', '${ticket.time}', '${ticket.date}', ${ticket.price})">Book</button></td>
        `;
      });
    }

}
function addToCart(id, city_from, city_to, clas, seat, time, date, price) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const ticket = {
    id,
    city_from,
    city_to,
    clas,
    seat,
    time,
    date,
    price
  };
  cart.push(ticket);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Ticket added to cart!");
}


const tickets = [  {
    "city_from": "Kyiv",
    "city_to": "Odesa",
    "clas": "Economy",
    "seat": "24",
    "time": "08:15",
    "date": "2025-06-01",
    "price": "379.99"
  },
  {
    "city_from": "Lviv",
    "city_to": "Kharkiv",
    "clas": "Business",
    "seat": "12",
    "time": "14:45",
    "date": "2025-06-15",
    "price": "1249.50"
  },
  {
    "city_from": "Dnipro",
    "city_to": "London",
    "clas": "First",
    "seat": "01A",
    "time": "10:30",
    "date": "2025-07-20",
    "price": "5234.95"
  },
  {
    "city_from": "Kharkiv",
    "city_to": "Warsaw",
    "clas": "Economy",
    "seat": "56C",
    "time": "06:20",
    "date": "2025-08-05",
    "price": "758.00"
  },
  {
    "city_from": "Odesa",
    "city_to": "Milan",
    "clas": "Business",
    "seat": "05D",
    "time": "18:00",
    "date": "2025-07-10",
    "price": "2450.30"
  },
  {
    "city_from": "Zaporizhzhia",
    "city_to": "Berlin",
    "clas": "Economy",
    "seat": "38E",
    "time": "13:00",
    "date": "2025-05-18",
    "price": "1100.99"
  },
  {
    "city_from": "Kyiv",
    "city_to": "New York",
    "clas": "First",
    "seat": "02B",
    "time": "22:30",
    "date": "2025-12-01",
    "price": "15784.00"
  },
  {
    "city_from": "Lviv",
    "city_to": "Prague",
    "clas": "Economy",
    "seat": "45F",
    "time": "16:40",
    "date": "2025-08-25",
    "price": "699.90"
  },
  {
    "city_from": "Khmelnytskyi",
    "city_to": "Budapest",
    "clas": "Economy",
    "seat": "19G",
    "time": "11:10",
    "date": "2025-06-10",
    "price": "545.50"
  },
  {
    "city_from": "Rivne",
    "city_to": "Istanbul",
    "clas": "Business",
    "seat": "07B",
    "time": "19:50",
    "date": "2025-09-15",
    "price": "3480.40"
  },
  {
    "city_from": "Kyiv",
    "city_to": "Odesa",
    "clas": "Economy",
    "seat": "32",
    "time": "18:25",
    "date": "2025-06-01",
    "price": "400.00"
  },
  {
    "city_from": "Kyiv",
    "city_to": "Odesa",
    "clas": "Business",
    "seat": "15A",
    "time": "08:15",
    "date": "2025-06-01",
    "price": "950.00"
  },
  {
    "city_from": "Kyiv",
    "city_to": "Odesa",
    "clas": "First",
    "seat": "01B",
    "time": "08:00",
    "date": "2025-06-01",
    "price": "1500.00"
  },
  {
    "city_from": "Lviv",
    "city_to": "Kharkiv",
    "clas": "Economy",
    "seat": "27C",
    "time": "14:45",
    "date": "2025-06-15",
    "price": "389.00"
  },
  {
    "city_from": "Lviv",
    "city_to": "Kharkiv",
    "clas": "Business",
    "seat": "10D",
    "time": "14:45",
    "date": "2025-06-15",
    "price": "1250.00"
  },
  {
    "city_from": "Lviv",
    "city_to": "Kharkiv",
    "clas": "First",
    "seat": "02A",
    "time": "14:45",
    "date": "2025-06-15",
    "price": "1999.00"
  },
  {
    "city_from": "Odesa",
    "city_to": "Milan",
    "clas": "Economy",
    "seat": "48B",
    "time": "18:00",
    "date": "2025-07-10",
    "price": "950.30"
  },
  {
    "city_from": "Odesa",
    "city_to": "Milan",
    "clas": "Business",
    "seat": "05D",
    "time": "18:00",
    "date": "2025-07-10",
    "price": "2450.50"
  },
  {
    "city_from": "Odesa",
    "city_to": "Milan",
    "clas": "First",
    "seat": "02A",
    "time": "18:00",
    "date": "2025-07-10",
    "price": "3175.00"
  },
  {
    "city_from": "Dnipro",
    "city_to": "London",
    "clas": "Economy",
    "seat": "45F",
    "time": "10:30",
    "date": "2025-07-20",
    "price": "1349.00"
  },
  {
    "city_from": "Dnipro",
    "city_to": "London",
    "clas": "Business",
    "seat": "12A",
    "time": "10:30",
    "date": "2025-07-20",
    "price": "2750.00"
  },
  {
    "city_from": "Dnipro",
    "city_to": "London",
    "clas": "First",
    "seat": "01C",
    "time": "10:30",
    "date": "2025-07-20",
    "price": "5450.50"
  }

]
