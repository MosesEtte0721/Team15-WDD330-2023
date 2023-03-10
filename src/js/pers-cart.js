import {fetchLocalStorage} from "./pers-utils.mjs";

function displayPage() {
    let getStorage = fetchLocalStorage("personal");
    let convert = new Array(getStorage);
    let map = convert.map((item) => renderHtml(item));
    document.querySelector("#render-get").innerHTML = map.join(" ");
}


function renderHtml(obj) {
    let template = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${obj.Image}"
      alt="${obj.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${obj.Name}</h2>
  </a>
  <p class="cart-card__color">${obj.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${obj.FinalPrice}</p>
</li>`;
return template;
}