export const item = (product, counter) => {
  return `
  <li class="item">
  <div class="product__block js_product glass glass-m" id="${product.id}">
    <div class="price-block">
    <div class="price-block--inner">
      <div class="price-block-shadow"></div>
      <span class="product__price">$${product.price.toFixed(2)}</span>
      <span class="product__index">${counter <= 9 ? '0' + counter : counter}</span>
      </div>
    </div>
    <div class="product__block--inner">
      <div class="product__img-box">
        <img src="${product.image}" alt="" class="img" />
      </div>
      <div class="product__text-box">
        <p class="product__name js_product-name"><span class="product__btn-arrow"></span> ${product.name}</p>
        ${
          product.description[0].text.length > 0
            ? '<p class="text product__desc">' + product.description[0].text.slice(0, 80) + '...' + '</p>'
            : ''
        }
        <div class="product__btn-block">
          <a href="product-page.html?id=${product.id}" class="product__btn btn--first" style="margin: ${
    product.type == 'ring' || product.type == 'clothing' ? 'auto' : ''
  }">details <span class="product__btn-arrow"></span></a>
          ${
            product.type == 'ring' || product.type == 'clothing'
              ? ''
              : '<button class="product__btn js_add-to-cart">buy <span class="product__btn-arrow"></span></button>'
          }
        </div>
      </div>
    </div>
  </div>
</li>
    `;
};
