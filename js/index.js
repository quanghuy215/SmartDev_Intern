var User = localStorage.getItem("User");
console.log(User);
if (User != null && User != "") {
  document.querySelectorAll(".fa-user-circle").forEach((element) => {
    element.outerHTML = `
        <span style="color:black">${User}</span>
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

product = [
  {
    name_product: "Áo nam 1",
    price: '120,000',
    img: "http://aaryaweb.info/opc/theshop/sho001/image/cache/catalog/demo/7-270x406.jpg",
  },
  {
    name_product: "Áo nam 2",
    price: '200,000',
    img: "http://aaryaweb.info/opc/theshop/sho001/image/cache/catalog/demo/9-270x406.jpg",
  },
  {
    name_product: "Áo nam 3",
    price: '170,000',
    img: "http://aaryaweb.info/opc/theshop/sho001/image/cache/catalog/demo/10-270x406.jpg",
  },
  {
    name_product: "Áo nam 4",
    price: '130,000',
    img: "http://aaryaweb.info/opc/theshop/sho001/image/cache/catalog/demo/11-270x406.jpg",
  },
  {
    name_product: "Áo nam 5",
    price: '200,000',
    img: "http://aaryaweb.info/opc/theshop/sho001/image/cache/catalog/demo/12-270x406.jpg",
  },
  {
    name_product: "Áo nam 6",
    price: '560,000',
    img: "http://aaryaweb.info/opc/theshop/sho001/image/cache/catalog/demo/7-270x406.jpg",
  },
  {
    name_product: "Áo nữ 1",
    price: '120,000',
    img: "http://aaryaweb.info/opc/theshop/sho001/image/cache/catalog/demo/1-270x406.jpg",
  },
  {
    name_product: "Áo nữ 2",
    price: '120,000',
    img: "http://aaryaweb.info/opc/theshop/sho001/image/cache/catalog/demo/2-270x406.jpg",
  },
  {
    name_product: "Áo nữ 3",
    price: '120,000',
    img: "http://aaryaweb.info/opc/theshop/sho001/image/cache/catalog/demo/3-270x406.jpg",
  },
  {
    name_product: "Áo nữ 4",
    price: '120.000',
    img: "http://aaryaweb.info/opc/theshop/sho001/image/cache/catalog/demo/5-270x406.jpg",
  },
  {
    name_product: "Áo nữ 5",
    price: '120,000',
    img: "http://aaryaweb.info/opc/theshop/sho001/image/cache/catalog/demo/4-270x406.jpg",
  },
  {
    name_product: "Áo nữ 6",
    price: '120,000',
    img: "http://aaryaweb.info/opc/theshop/sho001/image/cache/catalog/demo/6-270x406.jpg",
  },
];

var producList = product.map((item) => {
  return `<div class="item__product">
  <a href=""><img src="${item.img}" alt="" /></a>
  <div class="price__product">${item.price} đ</div>
  </div>`;
});
const productCard = producList.join("");
document.getElementById("productList").innerHTML = productCard;
