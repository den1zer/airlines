document.getElementById("registerButton").addEventListener('click',async() =>{
  const login_add = document.getElementById('cr_login').value;
  const password_add = document.getElementById('cr_password').value;
  const password_confirm = document.getElementById('cr_cnf_password').value;
if(password_add === password_confirm && password_add !== "" && login_add !== ""){
  const user = [{
    login: login_add,
    password: password_add,
  }]
 localStorage.setItem('user', JSON.stringify(user));
  alert("Користувача зареєстровано!");
}
else if (password_add !== password_confirm) {
  alert("Паролі не збігаються, перевірте правильність вводу!!!")
}
else alert("введіть коректні данні")
});
