import {renderListWithTemplate} from "./utils.mjs"
function productCartTemplate(product) {
        let discount = (product.FinalPrice / product.SuggestedRetailPrice) * 100
        const productTemplate = ` 
            <li class="product-card">
                <a href="/product_pages/index.html?product=${product.Id}">
                <img
                    src="${product.Images.PrimaryMedium}"
                    alt="${product.Name}"
                />
                <h3 class="card__brand">${product.Brand.Name}</h3>
                
                <h2 class="card__name">${product.Name}</h2>
                <h2 class="product-card__discount">Discount: (${discount.toFixed()}% off sales)</h2>
                <p class="product-card__price">$${product.FinalPrice}</p></a>
                <input class='hidden-input' type='hidden' value='${product.Id}'>
                <button type='button' id='${product.Id}' class='clickButton'> View details</button>
                <div class='modal'>
                    <img src='${product.Images.PrimarySmall}'>
                    <p class='modal-class'><span class='p-bold'>Name:</span> ${product.NameWithoutBrand}</p>
                    <p class='modal-class'><span class='p-bold'>Brand:</span> ${product.Brand.Name}</p>
                    <p class='modal-class'><span class='p-bold'>Initial Price:</span>I $${product.SuggestedRetailPrice}</p>
                    <p class='modal-class'><span class='p-bold'>New:</span> ${product.IsNew}</p>
                    <p class='modal-class'><span class='p-bold'>Clearance:</span> ${product.IsClearance}</p>
                    
                    <p class='modal-class'><span class='p-bold'>Reviews:</span> ${product.Reviews.AverageRating}</p>
                </div>
            </li>
    `
    return productTemplate;
}

export default class ProductListing{
    constructor(category, dataSource, listElement) {
        this.category = category
        this.dataSource = dataSource
        this.listElement = listElement
        this.listOfProducts = []

    }

    async init() {
        const listOfProducts = await this.dataSource.getData(this.category);

        this.renderList(listOfProducts)
        this.modal()

        // document.querySelector(".title").innerHTML = this.category
    }


    renderList(list) {
        // renderListWithTemplate(productCartTemplate, this.listElement, list)
        // let  = document.querySelector(".product-list");
        let htmlString = list.map((items) => productCartTemplate(items)).slice(0, 4)
        
        this.listElement.insertAdjacentHTML("afterbegin", htmlString.join(""))
    }

    modal() {
        let productId = document.querySelector(".hidden-input").value;
        // this.id = productId;
        let itemId = this.listOfProducts.filter((item) => item.Id === productId);
        // let productList = document.querySelectorAll(".product-list");
        // let modalClass = document.querySelectorAll(".modal-class")
        let modals = document.querySelector(".modal");
        
        let clickButton = document.querySelector(".clickButton");
        // function modal(){
        //     for(let moda of modals){
        //     moda.classList.toggle("display")
        // }}

        for(let button  of clickButton){
        button.addEventListener("click", (e)=>{
            console.log(e.currentTarget.id)
            if(e.currentTarget.id === productId){
                modals.classList.toggle("display")
            }
        })
    
    }
}

    
}