import Form from "./components/Form.js";
import ImagesContainer from "./components/ImagesContainer.js";
import AddImages from "./AddImages.js";

export default class App {
  constructor() {
    this.form = new Form();
    this.form.createForm();

    this.imagesContainer = new ImagesContainer();
    this.imagesContainer.createContainer();

    this.addImages = new AddImages();
  }

  addListeners() {
    const nameInput = document.querySelector(".input_name");
    const urlInput = document.querySelector(".input_url");
    const addButton = document.querySelector(".btn_add");

    nameInput.addEventListener("keyup", (event) => {
      if (
        event.code === "Enter" &&
        event.target.value !== "" &&
        urlInput.value !== ""
      ) {
        this.imgActions(nameInput, urlInput);
      }
    });

    urlInput.addEventListener("keyup", (event) => {
      if (
        event.code === "Enter" &&
        event.target.value !== "" &&
        nameInput.value !== ""
      ) {
        this.imgActions(nameInput, urlInput);
      }
    });

    addButton.addEventListener("click", () => {
      if (urlInput.value !== "" && nameInput.value !== "") {
        this.imgActions(nameInput, urlInput);
      }
    });

    this.imagesContainer.element.addEventListener("click", (event) => {
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
