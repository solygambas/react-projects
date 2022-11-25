import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

const products = document.querySelector("#my-products");
productsMount(products);
const cart = document.querySelector("#my-cart");
cartMount(cart);
