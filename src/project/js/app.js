// // selects the menu__wrapper

let mobileMenu = document.querySelector(".menu--animate__wrapper");
// console.log(mobileMenu);
// mobileMenu.addEventListener("click", ()=>{});

// // // selects the animate element
// let menuBar = document.querySelector(".animate");
// menuBar.addEventListener("click", changeBg);

// // // animation on the hamburger menu bars
// function changeBg() {
//   let menu = document.querySelectorAll(".animate__bar");
//   for (let animate of menu) {
//     animate.classList.toggle("menu__bar");
//   }
// }
// // // hides and shows the menu on a mobile screen
// function slide() {
//   let navClass = document.querySelector(".navi");
//   navClass.classList.toggle("navigate");
// }

// let clickButton = document.querySelector("#clickButton");
// //
// let cartObj = getStorage("api") || [];

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "35c8f14ebcmsh23ca2c02e7a3889p117cd7jsn0ff3f34ad1c1",
//     "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
//   },
// };

// // gets and process the information obtained from the site
// async function process() {
//   // selects the search input
//   let mySearch = document.querySelector("#mySearch").value;
//   // requests data from the original site (external site)
//   let externalSite = await fetch(
//     `https://real-time-amazon-data.p.rapidapi.com/search?query=${mySearch}&country=US&category_id=aps&page=1`,
//     options
//   );
//   // converts the requested data to JSON file
//   let data = await convertToJson(externalSite);
//   // loops through the JSON file and then displays the data obtained in the html
//   data.data.products.map((p) => {
//     selector(".display_products", htmlContainer(p));
//     cartObj.push(data.data.products.product_photo,
//       data.data.products.product_url, data.data.products.product_price);
//     cartObj.push(data);
//   });
//   // stores the result to the local storage
//   setStorage("api", cartObj);
//   // returns the result (data obtained)
//   return data.data.products;
// }
// // html template to display the products
// function htmlContainer(param) {
//   return `<li><a href="${param.product_url}">
//           <img src="${param.product_photo}" alt="${param.product_title} Photo">Desc:
//           ${param.product_title}</a>
//           <p class="product_price">Price: $${param.product_price}</p>
//           <p class="product_rating">Rating: ${param.product_star_rating}</p>
//           </li>`;
// }

// // injects the template into html file
// function selector(element, template) {
//   let select = document.querySelector(element);
//   select.insertAdjacentHTML("afterbegin", template);
// }

// // gets and reads the products in the local storage
// function getStorage(key) {
//   JSON.parse(localStorage.getItem(key));
// }

// // sets and converts products to string
// function setStorage(key, data) {
//   localStorage.setItem(key, JSON.stringify(data));
// }

// clickButton.addEventListener("click", () => {
//   console.log(process());
// });

// // converts data to Json file
// function convertToJson(res) {
//   if (res.ok) {
//     return res.json();
//   } else {
//     throw new Error("Bad Response");
//   }
// }
