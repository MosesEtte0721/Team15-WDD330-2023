import {renderListWithTemplate} from "./utils.mjs"
function productCartTemplate(product) {
        let discount = (product.FinalPrice / product.SuggestedRetailPrice) * 100
        const productTemplate = ` 
            <li class="product-card">
                <a href="product_pages/?product=${product.Id}">
                <img
                    src="${product.Image}"
                    alt="${product.Name}"
                />
                <h3 class="card__brand">${product.Brand.Name}</h3>
                <h2 class="card__name">${product.Name}</h2>
                <h2 class="product-card__discount">Discount: (${discount.toFixed()}% off sales)</h2>
                <p class="product-card__price">$${product.FinalPrice}</p></a>
            </li>
    `
    return productTemplate;
}

export default class ProductListing{
    constructor(category, dataSource, listElement) {
        this.category = category
        this.dataSource = dataSource
        this.listElement = listElement

    }

    async init() {
        const listOfProducts = await this.dataSource.getData();

        this.renderList(listOfProducts)
    }


    renderList(list) {
        // renderListWithTemplate(productCartTemplate, this.listElement, list)
        // let  = document.querySelector(".product-list");
        let htmlString = list.map((items) => productCartTemplate(items))
        this.listElement.insertAdjacentHTML("afterbegin", htmlString.join(""))
    }

    
}