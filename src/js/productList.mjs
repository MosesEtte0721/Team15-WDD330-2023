import {renderListWithTemplate} from "./utils.mjs";
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
                
                <button type='button' data-id='${product.Id}' class='clickButton'> View details</button>
                
                <div class='modal modal2' data-id='${product.Id}'>
                    <img src='${product.Images.PrimarySmall}'>
                    <p class='modal-class' ><span class='p-bold'>Name:</span> ${product.NameWithoutBrand}</p>
                    <p class='modal-class' ><span class='p-bold'>Brand:</span> ${product.Brand.Name}</p>
                    <p class='modal-class'><span class='p-bold'>Initial Price:</span>I $${product.SuggestedRetailPrice}</p>
                    <p class='modal-class'><span class='p-bold'>New:</span> ${product.IsNew}</p>
                    <p class='modal-class'><span class='p-bold'>Clearance:</span> ${product.IsClearance}</p>
                    
                    <p class='modal-class'><span class='p-bold'>Reviews:</span> ${product.Reviews.AverageRating}</p>
                    <span class="close-modal">X</span>
                    </div>
            </li>
    `
    return productTemplate;
}

export default class ProductListing {
    constructor(category, dataSource, listElement) {
        this.category = category
        this.dataSource = dataSource
        this.listElement = listElement
        this.listOfProducts = []

    }

    async init() {
        const listOfProducts = await this.dataSource.getData(this.category);

        this.renderList(listOfProducts);
        this.modal();

        // document.querySelector(".title").innerHTML = this.category
    }


    renderList(list) {
        // renderListWithTemplate(productCartTemplate, this.listElement, list)
        // let  = document.querySelector(".product-list");
        let htmlString = list.map((items) => productCartTemplate(items));
        
        this.listElement.insertAdjacentHTML("afterbegin", htmlString.join(""));
    }



    modal() {
        // selects the button
        let buttons = document.querySelectorAll(".clickButton");
        let closeModalBtn = document.querySelectorAll(".close-modal");
        let  modal = document.querySelectorAll(".modal2");
        
        // console.log(buttons);
        // console.log(closeModalBtn);
        // loop the button
    //     buttons.forEach(button => {
    //     button.addEventListener("click", (e)=> {
    //         e.target.nextElementSibling.style.display = "block";
    //     })
    // })

        closeModalBtn.forEach(element => {
        element.addEventListener("click", (e) => {
            e.target.parentElement.classList.toggle("display");
            // element.classList.;
        })
    })


    // for(let button of closeModalBtn) {
    //     // listens to each button
    //     button.addEventListener("click", (e)=> {
            
    //          modal.forEach(element => {
    //             if(e.target.dataset.id == element.dataset.id) {
    //                 element.classList.toggle("d");
    //             }
                
    //         }
             
    //         )


            
    //     })
    // }
        // buttons.forEach((button) => {
        //     button.addEventListener("click", (e) => {
        //         let buttonsNew = [...buttons];
        //         // console.log(buttonsNew)
        //     // console.log(buttonsNew.indexOf(e.target));
        //         modal.forEach((element, index) => {
        //             if (index == buttonsNew.indexOf(e.target)) {
        //                 element.classList.toggle("display");
        //             }
        //         })
        //     })
        // })
        for(let button of buttons) {
            // listens to each button
            button.addEventListener("click", (e)=> {
                
                 modal.forEach(element => {
                    if(e.target.dataset.id == element.dataset.id) {
                        element.classList.toggle("display");
                    }
                    
                }
                 
                )
  

                
            })
        }
    }
















}




