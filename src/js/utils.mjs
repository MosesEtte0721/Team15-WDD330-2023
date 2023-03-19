// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParams(param){
  const queryString = location.search;
  const data = new URLSearchParams(queryString);
  const getData = data.get(param)
  return getData;
}

export function renderListWithTemplate(templateFn, 
    parentElement, 
    list, 
    position = "afterbegin", 
    clear = false) {
      const htmlStrings = list.map((templateFn));
      // if clear is true, the content of the parent needs to be cleared
      if(clear) {
        parentElement.innerHTML = "";
      } else {
        parentElement.insertAdjacentHTML(position, htmlStrings.join(""))
      }
    }