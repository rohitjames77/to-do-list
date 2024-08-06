import image from "./assets/button2.png";
import "./style.css";

class element {
  constructor(type = "", id) {
    this.element = document.createElement(type);
    this.element.id = id;
  }
  append(childElement) {
    this.element.appendChild(childElement);
  }
  setAttribute(attribute, value) {
    this.element.setAttribute(attribute, value);
  }
}

const todoBtn = new element("img", "btn-image");

todoBtn.setAttribute("src", image);
todoBtn.setAttribute("alt", "btn-image");
document.body.appendChild(todoBtn.element);

export { todoBtn, element };
