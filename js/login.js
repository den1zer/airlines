document.getElementById('loginButton').addEventListener('click', async () => {
  const loginInput = document.getElementById('login').value;
  const passwordInput = document.getElementById('password').value;

    const response = await fetch('users.json');
    const users = await response.json();
    const user = users.find(user => user.login === loginInput && user.password === passwordInput);
    if (user) {
      window.location.href = 'main.html';
    }
    else alert('Невірний логін або пароль. Спробуйте ще раз.');
 });
