
let searchBtn = document.querySelector("#searchBtn");



// console.log(searchInput.toLowerCase())



(async function sendRequest() {
    
    
    // converts all inputs into lowercase
    let source = "/public/json/tents.json";

    let getData = await fetch(source);
    let convert = await convertToJson(getData);
    convert.map((item) => { 
        searchBtn.addEventListener("click", ()=> {
            let searchInput = document.querySelector("#search");
            // searchInput.toLowerCase()
            if(item.Name === searchInput.value) {
                selector(".displays-products", htmlContainer(item))
            } else if(item.Name != searchBtn || searchBtn == "") {
                console.log("No Item found");
            }
            });
        })
      
   
}())

// function funct(item) {
    

// }



function convertToJson(file) {
    if(file.ok) {
        return file.json()
    } else {
        throw new Error("Failed to convert the file to json")
    }
}

// 
function selector(element, template) {
    let select = document.querySelector(element);
    select.insertAdjacentHTML("afterbegin", template);
  }

function htmlContainer(param) {
    return `<li><a href="${param.Url}">
            <img src="${param.PrimaryMedium}" alt="${param.Name} Photo">Desc: 
            ${param.DescriptionHtmlSimple}</a>
            <p class="product_price">Price: $${param.FinalPrice}</p>
            <p class="product_rating">Rating: ${param.AverageRating}</p>
            </li>`;
  }