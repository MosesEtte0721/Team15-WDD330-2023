const baseURL = import.meta.env.VITE_SERVER_URL
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    
  }
  async getData(category) {
    const res = await fetch(baseURL + `products/search/${category}`)
    // return fetch(this.path)
    const data = await convertToJson(res)
      // .then(convertToJson)
    return data.Result
      // .then((data) => data);
  }
  async findProductById(id) {
    const products = await fetch(baseURL + `product/${id}`);
    const data = await convertToJson(products);
    return data.Result;
  }
}
