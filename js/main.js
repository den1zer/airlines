document.getElementById("search_btn").addEventListener('click',() =>{
  const city_from = document.getElementById('city_from').value;
  const city_to = document.getElementById('city_to').value;
  const date = document.getElementById('date').value;

  localStorage.setItem('city_from', city_from);
  localStorage.setItem('city_to', city_to);
  localStorage.setItem('date', date);
  window.location.href = 'choose.html';
})
