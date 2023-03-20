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

    export function renderWithTemplate(template, parentElement, data, callback) {
          parentElement.insertAdjacentHTML("afterbegin", template)
          if(callback) {
            callback(data)
          }
        
      }

     export async function loadTemplate(path) {
      const response = await fetch(path);
      const template = await response.text();
      return template;
    }

    export async function loadHeaderFooter() {
      const headerTemplate = await loadTemplate("../partials/header.html");
      const footerTemplate = await loadTemplate("../partials/footer.html");
      const headerElement = document.querySelector("#page--header");
      const footerElement = document.querySelector("#page--footer")

      renderWithTemplate(headerTemplate, headerElement);
      renderWithTemplate(footerTemplate, footerElement);
    }

    