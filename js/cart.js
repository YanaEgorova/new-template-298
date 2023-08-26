import { products } from './data/products.js';
import { item } from './templates/product-item.js';

const productsList = document.querySelector('.js_products__list');
let counter = 0;
products.forEach(product => {
  counter += 1;
  productsList.insertAdjacentHTML('beforeend', item(product, counter));
});
