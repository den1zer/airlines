document.getElementById("registerButton").addEventListener('click',() =>{
  const login = document.getElementById('cr_login').value;
  const password = document.getElementById('cr_password').value;
  const confirm_password = document.getElementById('cr_cnf_password').value;
  if (password === confirm_password) {
    RegisterFunction(login, password);
    alert("Registered!");
  } else {
    alert("Passwords don't same.");
  }


})


