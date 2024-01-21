export default class Form {
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
