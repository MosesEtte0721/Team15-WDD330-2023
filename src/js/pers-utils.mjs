
export default class PersonalUtils{
    constructor(data) {
        this.data = data;
        this.url = `../json/${this.data}.json`;
        
    }

    getInfo() {
        return fetch(this.url)
            .then(convertJson)
                .then(data => data);
    }

    async fetchItemById(id) {
        let getdata = await this.getInfo();
        getdata.find(product=>{if(product.Id === id){
            return product;
        }})
    }

// Increasecrease the quantity of an item in a cart
 increaseItem() {
    let product = this.data.map((item) => {
        if(item.id === product) {
           item.qty += this.quan;
           return item;
        }
     }
    )
    }


// crease the quantity of an item in a cart
 decreaseItem() {
    let reduceItem = this.data.map(item => {
        if(item.Id === reduceItem) {
            item.qty -= this.quan;
            return item;
        }
    })
    
    reduceItem.forEach(item => {
        if(item.Id !== this.data && item.qty === 0) {
            item.remove(this.data)
            // return item;
        }
    })

}



}

// set LocalStorage
export function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.strigify(value));
}

// fetch localStorage
export function fetchLocalStorage(key) {
  return JSON.parse(localStorage.get(key)) 

}

function convertJson(file) {
    if(file.ok) {
        return file.json();
    } else {
        throw new Error("Failed response");
    }
}