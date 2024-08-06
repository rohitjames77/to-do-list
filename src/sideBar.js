import { doc } from "prettier";
import "./style.css";
import { element } from "./toDoBtn";

class sideDiv {
  constructor() {
    this.div = document.createElement("div");
    this.div.id = "side-bar";
  }
}

let sideBar = new sideDiv();
document.body.appendChild(sideBar.div);
let sideTitle = new element("h1", "side-bar-title");
sideTitle.element.textContent = "To-Do";
sideBar.div.appendChild(sideTitle.element);
sideTitle.element.addEventListener("click", () => {
  parentDiv.element.style.display = "block";
});

export { sideBar };
