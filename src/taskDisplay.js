import "./style.css";
import { doc } from "prettier";
import deleteImage from "./assets/deleteBtn.png";

class CardContainer {
  constructor() {
    this.cardContainer = document.createElement("div");
    this.cardContainer.id = "card-container";
  }
  getParent() {
    return this.cardContainer;
  }
}
class Card {
  constructor() {
    this.cardParentDiv = document.createElement("div");
    this.cardParentDiv.id = "card-parent-div";
  }
  getCard() {
    return this.cardParentDiv;
  }
}

class DescriptionParentDiv {
  constructor() {
    this.descriptionParent = document.createElement("div");
    this.descriptionParent.classList = "description_parent";
  }
  getDescriptionParent() {
    return this.descriptionParent;
  }
}

class HeadingDivClass {
  constructor() {
    this.headingDiv = document.createElement("div");
    this.headingDiv.classList = "heading_div";
  }
  getHeadingDiv() {
    return this.headingDiv;
  }
}

class InputSavedHeadingClass {
  constructor() {
    this.savedHeading = document.createElement("h1");
    this.savedHeading.classList = "saved_heading";
    this.savedHeading.textContent = localStorage.getItem("taskTitle");
  }
  getSavedHeading() {
    return this.savedHeading;
  }
}

class InputSavedDescriptionClass {
  constructor() {
    this.savedDescription = document.createElement("p");
    this.savedDescription.classList = "saved_description";
    this.savedDescription.textContent = localStorage.getItem("descriptionVal");
  }
  getSavedDescription() {
    return this.savedDescription;
  }
}

class InputSavedPriorityClass {
  constructor() {
    this.savedPriority = document.createElement("h2");
    this.savedPriority.classList = "saved_priority";
    this.savedPriority.textContent = localStorage.getItem("priority-level");
  }
  getSavedPriority() {
    return this.savedPriority;
  }
}

class InputSavedDateClass {
  constructor() {
    this.savedDate = document.createElement("h2");
    this.savedDate.classList = "saved_date";
    this.savedDate.textContent = localStorage.getItem("DateInput");
  }
  getSavedDate() {
    return this.savedDate;
  }
}

class InputSavedTimeClass {
  constructor() {
    this.savedTime = document.createElement("h2");
    this.savedTime.classList = "saved_time";
    this.savedTime.textContent = localStorage.getItem("TimeInput");
  }
  getSavedTime() {
    return this.savedTime;
  }
}

class EditBtnClass {
  constructor() {
    this.editBtn = document.createElement("button");
    this.editBtn.classList = "edit_btn";
    this.editBtn.textContent = "Edit";
  }
  getEditBtn() {
    return this.editBtn;
  }
}

class DeleteBtnClass {
  constructor() {
    this.btnImage = document.createElement("img");
    this.btnImage.classList = "delete_image";
    this.btnImage.setAttribute("src", deleteImage);
    this.btnImage.setAttribute("alt", "deleteImg");
  }
  getDeleteBtn() {
    return this.btnImage;
  }
}

export {
  CardContainer,
  InputSavedDescriptionClass,
  InputSavedHeadingClass,
  InputSavedPriorityClass,
  InputSavedTimeClass,
  InputSavedDateClass,
  HeadingDivClass,
  Card,
  DescriptionParentDiv,
  EditBtnClass,
  DeleteBtnClass,
};
