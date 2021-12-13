var User = localStorage.getItem("User");
console.log(User);
if (User != null && User != "") {
  document.querySelectorAll(".fa-user-circle").forEach((element) => {
    element.outerHTML = `
        <span style="color:red">${User}</span>
        `;
  });
  document.querySelectorAll(".log-in").forEach((element) => {
    element.outerHTML = `
    <a href="" style="text-decoration: none;color:black" class="log-out"> Logout</a>
        `;
  });
  document.querySelectorAll(".log-out").forEach((element) => {
    element.onclick = (e) => {
      e.preventDefault();
      localStorage.removeItem("User");
      window.location.href = "index.html";
      window.location;
    };
  });
}
