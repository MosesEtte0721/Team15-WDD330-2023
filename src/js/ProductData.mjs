const baseURL = "http://server-nodejs.cit.byui.edu:3000/";
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ExternalServices {
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

  async checkout(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + "checkout/", options).then(convertToJson);
  }

}
