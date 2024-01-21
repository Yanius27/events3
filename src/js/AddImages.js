export default class AddImages {
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
