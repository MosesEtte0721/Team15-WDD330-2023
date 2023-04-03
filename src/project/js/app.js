let mobileMenu = document.querySelector(".menu-button");
mobileMenu.addEventListener("click", togle)
// hides and shows the menu on a mobile screen
function togle(){
    let navClass = document.querySelector(".navi");
    navClass.classList.toggle("navigate");
}

let clickButton = document.querySelector("#clickButton");



const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "35c8f14ebcmsh23ca2c02e7a3889p117cd7jsn0ff3f34ad1c1",
		"X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com"
	}
};

async function process(){
  let mySearch = document.querySelector("#mySearch").value;
  let externalSite = await fetch(`https://real-time-amazon-data.p.rapidapi.com/search?query=${mySearch}&country=US&category_id=aps&page=1`, options)
	let data = await convertToJson(externalSite);
  let products = document.querySelector("#products");
  products.innerHTML = data.data.products.map(p =>
     `<a href='${p.product_url}'>${p.product_title}<img src=${p.product_photo}> </a>`) 
  return data.data.products;
  
}



// function getStorage(key) {
//    JSON.parse(localStorage.getItem(key))
// }
  


  

    clickButton.addEventListener("click", ()=>{
      console.log(process()) })

        function convertToJson(res) {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Bad Response");
            }
          }