//handle login
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("btn-login");
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  var checkValid = false;
  //   const username = loginForm("email").value;
  //   const password = loginForm("password").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var objUsers = localStorage.getItem("objUsers");
  var username = "";
  objUsers = JSON.parse(objUsers);
  objUsers.forEach((user) => {
    if (user.email == email && user.password == password) {
      checkValid = true;
      username = user.username;
    }
  });
  if (checkValid) {
    localStorage.setItem("User", username);
    window.location.href = "index.html";
    window.location;
  } else {
    alert("Wrong input");
  }
});

const data = require("./employees.json");
console.log(data);
