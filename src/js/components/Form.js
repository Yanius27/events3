export default class Form {
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
