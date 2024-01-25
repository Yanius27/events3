/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/components/Form.js
class Form {
  constructor() {}
  createForm() {
    const container = document.createElement("div");
    container.classList.add("container");
    const nameInput = document.createElement("input");
    nameInput.classList.add("input_name");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("required", "");
    nameInput.setAttribute("placeholder", "Введите название для изображения");
    const nameInputSpan = document.createElement("span");
    nameInputSpan.classList.add("input_name_span");
    nameInputSpan.textContent = "Название";
    const nameInputLabel = document.createElement("label");
    nameInputLabel.classList.add("input_label");
    nameInputLabel.appendChild(nameInputSpan);
    nameInputLabel.appendChild(nameInput);
    const urlInput = document.createElement("input");
    urlInput.classList.add("input_url");
    urlInput.setAttribute("type", "url");
    urlInput.setAttribute("required", "");
    urlInput.setAttribute("placeholder", "Введите ссылку на изображение");
    const urlInputSpan = document.createElement("span");
    urlInputSpan.classList.add("input_url_span");
    urlInputSpan.textContent = "Ссылка на изображение";
    const urlInputLabel = document.createElement("label");
    urlInputLabel.classList.add("input_label");
    urlInputLabel.appendChild(urlInputSpan);
    urlInputLabel.appendChild(urlInput);
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input_container");
    inputContainer.appendChild(nameInputLabel);
    inputContainer.appendChild(urlInputLabel);
    const addButton = document.createElement("button");
    addButton.classList.add("btn_add");
    addButton.textContent = "Добавить";
    container.appendChild(inputContainer);
    container.appendChild(addButton);
    this._element = container;
    this.drawForm();
  }
  drawForm() {
    document.children[0].children[1].appendChild(this.element);
  }
  get element() {
    return this._element;
  }
}
;// CONCATENATED MODULE: ./src/js/components/ImagesContainer.js
class ImagesContainer_Form {
  constructor() {}
  createContainer() {
    const imagesContainer = document.createElement("div");
    imagesContainer.classList.add("images_container");
    this._element = imagesContainer;
    this.drawImagesContainer();
  }
  drawImagesContainer() {
    document.children[0].children[1].appendChild(this.element);
  }
  get element() {
    return this._element;
  }
}
;// CONCATENATED MODULE: ./src/js/AddImages.js
class AddImages {
  constructor() {}
  loadImage(url) {
    const image = document.createElement("img");
    image.classList.add("image");
    image.src = url;
    image.onload = () => {
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("image_div");
      imageDiv.appendChild(image);
      const imageDivClose = document.createElement("div");
      imageDivClose.classList.add("image_div_close");
      imageDivClose.textContent = "X";
      imageDiv.appendChild(imageDivClose);
      this._element = imageDiv;
      this.drawImageElement(this.element);
    };
    image.onerror = () => {
      const errorSpan = document.createElement("span");
      errorSpan.classList.add("error_span");
      errorSpan.textContent = "Неверный URL изображения";
      document.querySelector(".input_label").appendChild(errorSpan);
      setTimeout(() => errorSpan.remove(), 3000);
    };
  }
  drawImageElement() {
    document.querySelector(".images_container").appendChild(this.element);
  }
  get element() {
    return this._element;
  }
}
;// CONCATENATED MODULE: ./src/js/App.js



class App {
  constructor() {
    this.form = new Form();
    this.form.createForm();
    this.imagesContainer = new ImagesContainer_Form();
    this.imagesContainer.createContainer();
    this.addImages = new AddImages();
  }
  addListeners() {
    const nameInput = document.querySelector(".input_name");
    const urlInput = document.querySelector(".input_url");
    const addButton = document.querySelector(".btn_add");
    nameInput.addEventListener("keyup", event => {
      if (event.code === "Enter" && event.target.value !== "" && urlInput.value !== "") {
        this.imgActions(nameInput, urlInput);
      }
    });
    urlInput.addEventListener("keyup", event => {
      if (event.code === "Enter" && event.target.value !== "" && nameInput.value !== "") {
        this.imgActions(nameInput, urlInput);
      }
    });
    addButton.addEventListener("click", () => {
      if (urlInput.value !== "" && nameInput.value !== "") {
        this.imgActions(nameInput, urlInput);
      }
    });
    this.imagesContainer.element.addEventListener("click", event => {
      if (event.target.classList.contains("image_div_close")) {
        event.target.parentNode.remove();
      }
    });
  }
  imgActions(nameInput, urlInput) {
    this.addImages.loadImage(urlInput.value);
    urlInput.value = "";
    nameInput.value = "";
  }
}
;// CONCATENATED MODULE: ./src/index.js


const app = new App();
app.addListeners();
/******/ })()
;