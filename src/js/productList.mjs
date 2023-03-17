function productCartTemplate(product) {
    const productTemplate = ` 
        <li class="product-card">
            <a href="product_pages/?product=880RR">
            <img
                src="${product.Image}"
                alt="${product.Name}"
            />
            <h3 class="card__brand">${product.Brand.Name}</h3>
            <h2 class="card__name">${product.Name}</h2>
            <p class="product-card__price">$${product.Price}</p></a
            >
        </li>
    `
    return productTemplate();
}

export default class ProductListing{
    constructor(category, dataSource, listElement) {
        this.category = category
        this.dataSource = dataSource
        this.listElement = listElement

    }

    async init() {
        this.dataSource = this.dataSource.getData();
    }
}