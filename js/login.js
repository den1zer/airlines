document.getElementById('loginButton').addEventListener('click', async () => {
  const loginInput = document.querySelectorAll('.login_input')[0].value;
  const passwordInput = document.querySelectorAll('.login_input')[1].value;

    const response = await fetch('users.json');
    const users = await response.json();
    const user = users.find(user => user.login === loginInput && user.password === passwordInput);
    if (user) {
      window.location.href = 'main_page.html'; // Замість welcome.html вказати потрібну сторінку
    }
    else alert('Невірний логін або пароль. Спробуйте ще раз.');
 });
