import faker from "faker";

const mount = (element) => {
  const cartText = `<div>You have ${faker.datatype.number()} items in your cart</div>`;

  element.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-cart");
  if (element) {
    mount(element);
  }
}

export { mount };
