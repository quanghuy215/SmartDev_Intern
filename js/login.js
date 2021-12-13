const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("btn-login");
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  var checkValid = false;
  //   const username = loginForm("email").value;
  //   const password = loginForm("password").value;
  var username = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var objUsers = localStorage.getItem("objUsers");
  objUsers = JSON.parse(objUsers);
  objUsers.forEach((user) => {
    if (user.email == username && user.password == password) checkValid = true;
  });
  if (checkValid) {
    localStorage.setItem("User", username.split("@")[0]);
    window.location.href = "index.html";
    window.location;
  } else {
    alert("Wrong input");
  }
});
