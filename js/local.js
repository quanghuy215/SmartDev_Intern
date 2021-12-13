const objUsers = [
  {
    email: "user01@gmail.com",
    password: "123456",
  },
  {
    email: "user03@gmail.com",
    password: "123456",
  },
  {
    email: "user03@gmail.com",
    password: "123456",
  },
];

var storage = localStorage.getItem("objUsers");
if (storage == null) {
  const jsonUser = JSON.stringify(objUsers);
  localStorage.setItem("objUsers", jsonUser);
}
