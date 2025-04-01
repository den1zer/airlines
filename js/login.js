document.getElementById('loginButton').addEventListener('click', async () => {
  const loginInput = document.getElementById('login').value;
  const passwordInput = document.getElementById('password').value;

    const user = users.find(user => user.login === loginInput && user.password === passwordInput);
    if (user) {
      window.location.href = 'main.html';
}
    else alert('Невірний логін або пароль. Спробуйте ще раз.');
 });


const users = [
  {
    "login": "denys",
    "password": "777"
  },
  {
    "login": "bbb",
    "password": "189354a"
  },
  {
    "login": "pinafore",
    "password": "123321"
  }
]
