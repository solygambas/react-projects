import faker from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

document.querySelector("#dev-products").innerHTML = products;
