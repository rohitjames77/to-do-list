import { todoBtn } from "./toDoBtn";
import "./style.css";
import { doc } from "prettier";
import {
  DeleteBtnClass,
  EditBtnClass,
  DescriptionParentDiv,
  CardContainer,
  InputSavedDescriptionClass,
  InputSavedHeadingClass,
  InputSavedPriorityClass,
  InputSavedTimeClass,
  InputSavedDateClass,
  HeadingDivClass,
  Card,
} from "./taskDisplay.js";

class FormParentClass {
  constructor() {
    this.formParentDiv = document.createElement("form");
    this.formParentDiv.classList = "form_parent_div";
  }
  getFormParent() {
    return this.formParentDiv;
  }
}

class FormHeadingClass {
  constructor() {
    this.heading = document.createElement("h1");
    this.heading.classList = "heading";
    this.heading.textContent = "ADD-TASK";
  }
}

class FormTaskTitleClass {
  constructor() {
    this.taskTitle = document.createElement("input");
    this.taskTitle.type = "text";
    this.taskTitle.classList = "task_title";
    this.taskTitle.placeholder = "Task-title...............................";
  }
  getElement() {
    return this.taskTitle;
  }
}

class FormTaskBtnClass {
  constructor() {
    this.taskBtn = document.createElement("button");
    this.taskBtn.classList = "task_btn";
    this.taskBtn.textContent = "Save";
  }
  getBtn() {
    return this.taskBtn;
  }
}

class FormDescriptionClass {
  constructor() {
    this.description = document.createElement("textarea");
    this.description.classList = "description";
    this.description.placeholder =
      "Task description................................";
  }
  getDescription() {
    return this.description;
  }
}

class FormPriorityInputClass {
  constructor() {
    this.priorityInput = document.createElement("select");
    this.priorityInput.classList = "priority_input";
    this.priorityInput.name = "priority";
  }
  getPriority() {
    return this.priorityInput;
  }
}

class PriorityOptionDefClass {
  constructor() {
    this.defOption = document.createElement("option");
    this.defOption.classList = "def_option";
    this.defOption.value = "default";
    this.defOption.textContent = "Priority-Level";
  }
  getDefOption() {
    return this.defOption;
  }
}

class PriorityOption1Class {
  constructor() {
    this.option1 = document.createElement("option");
    this.option1.classList = "option_1";
    this.option1.value = `Level-1`;
    this.option1.textContent = `Level-1`;
  }
  getOption1() {
    return this.option1;
  }
}

class PriorityOption2Class {
  constructor() {
    this.option2 = document.createElement("option");
    this.option2.value = `Level-2`;
    this.option2.classList = "option_2";
    this.option2.textContent = `Level-2`;
  }
  getOption1() {
    return this.option2;
  }
}

class PriorityOption3Class {
  constructor() {
    this.option3 = document.createElement("option");
    this.option3.value = `Level-3`;
    this.option3.classList = "option_3";
    this.option3.textContent = `Level-3`;
  }
  getOption1() {
    return this.option3;
  }
}

class PriorityOption4Class {
  constructor() {
    this.option4 = document.createElement("option");
    this.option4.value = `Level-4`;
    this.option4.classList = "option_4";
    this.option4.textContent = `Level-4`;
  }
  getOption4() {
    return this.option4;
  }
}

class DateClass {
  constructor() {
    this.dateInput = document.createElement("input");
    this.dateInput.classList = "date_input";
    this.dateInput.setAttribute("type", "date");
    this.dateInput.value = "2024-01-01";
  }
  getDate() {
    return this.dateInput;
  }
}
class TimeClass {
  constructor() {
    this.timeInput = document.createElement("input");
    this.timeInput.classList = "time_input";
    this.timeInput.setAttribute("type", "time");
  }
  getTime() {
    return this.timeInput;
  }
}

todoBtn.element.addEventListener("click", () => {
  callInstances();
});

function callInstances() {
  const formParent = new FormParentClass();
  document.body.appendChild(formParent.formParentDiv);
  const formHeading = new FormHeadingClass();
  formParent.formParentDiv.appendChild(formHeading.heading);
  const formTitle = new FormTaskTitleClass();
  formParent.formParentDiv.appendChild(formTitle.taskTitle);
  formTitle.taskTitle.textContent = "";
  const taskBtn = new FormTaskBtnClass();
  formParent.formParentDiv.appendChild(taskBtn.taskBtn);
  const title = formTitle.getElement();
  const description = new FormDescriptionClass();
  formParent.formParentDiv.appendChild(description.description);
  description.description.textContent = "";
  const descriptionEle = description.getDescription();
  const prioritySelect = new FormPriorityInputClass();
  formParent.formParentDiv.appendChild(prioritySelect.priorityInput);
  const defaultOption = new PriorityOptionDefClass();
  prioritySelect.priorityInput.appendChild(defaultOption.defOption);
  const optionClass1 = new PriorityOption1Class();
  prioritySelect.priorityInput.appendChild(optionClass1.option1);
  const optionClass2 = new PriorityOption2Class();
  prioritySelect.priorityInput.appendChild(optionClass2.option2);
  const optionClass3 = new PriorityOption3Class();
  prioritySelect.priorityInput.appendChild(optionClass3.option3);
  const optionClass4 = new PriorityOption4Class();
  prioritySelect.priorityInput.appendChild(optionClass4.option4);
  const dateInput = new DateClass();
  formParent.formParentDiv.appendChild(dateInput.dateInput);
  const timeInput = new TimeClass();
  formParent.formParentDiv.appendChild(timeInput.timeInput);
  const dateVal = dateInput.getDate();
  const timeVal = timeInput.getTime();
  saveOnclick(
    taskBtn,
    title,
    descriptionEle,
    prioritySelect,
    dateVal,
    timeVal,
    formParent,
  );
}

function saveOnclick(
  taskBtn,
  title,
  descriptionEle,
  prioritySelect,
  timeVal,
  dateVal,
  formParent,
) {
  const btn = taskBtn.getBtn();
  btn.addEventListener("click", (event) => {
    localStorage.setItem("taskTitle", title.value);
    localStorage.setItem("descriptionVal", descriptionEle.value);
    localStorage.setItem("priority-level", prioritySelect.priorityInput.value);
    localStorage.setItem("DateInput", timeVal.value);
    localStorage.setItem("TimeInput", dateVal.value);
    changeDisplay(formParent);
    createTaskDisplay();
    event.preventDefault();
  });
}

function changeDisplay(formParent) {
  const parent = formParent.getFormParent();
  parent.style.display = "none";
}

function createTaskDisplay() {
  const container = new CardContainer();
  document.body.appendChild(container.cardContainer);
  const cardDiv = new Card();
  container.cardContainer.appendChild(cardDiv.cardParentDiv);
  const headingDiv = new HeadingDivClass();
  cardDiv.cardParentDiv.appendChild(headingDiv.headingDiv);
  const title = new InputSavedHeadingClass();
  headingDiv.headingDiv.appendChild(title.savedHeading);
  const descriptionParent = new DescriptionParentDiv();
  cardDiv.cardParentDiv.appendChild(descriptionParent.descriptionParent);
  const descriptionInput = new InputSavedDescriptionClass();
  descriptionParent.descriptionParent.appendChild(
    descriptionInput.savedDescription,
  );
  const priority = new InputSavedPriorityClass();
  cardDiv.cardParentDiv.appendChild(priority.savedPriority);
  const date = new InputSavedDateClass();
  cardDiv.cardParentDiv.appendChild(date.savedDate);
  const time = new InputSavedTimeClass();
  cardDiv.cardParentDiv.appendChild(time.savedTime);
  const editBtn = new EditBtnClass();
  cardDiv.cardParentDiv.appendChild(editBtn.editBtn);
  const deleteBtn = new DeleteBtnClass();
  cardDiv.cardParentDiv.appendChild(deleteBtn.btnImage);

  function priorityChange(cardDiv) {
    let storeVal = localStorage.getItem("priority-level");
    if (storeVal === `Level-1`) {
      cardDiv.cardParentDiv.style.backgroundColor = "#45d153";
    } else if (storeVal === `Level-2`) {
      cardDiv.cardParentDiv.style.backgroundColor = "#45a0d1";
    } else if (storeVal === `Level-3`) {
      cardDiv.cardParentDiv.style.backgroundColor = "#e37210";
    } else if (storeVal === `Level-4`) {
      cardDiv.cardParentDiv.style.backgroundColor = "#d13030";
    }
  }
  priorityChange(cardDiv);
  editListener(editBtn);
  deleteListener(deleteBtn);
}
function editListener(editBtn) {
  editBtn.editBtn.addEventListener("click", () => {
    console.log("hello");
    let parent = document.querySelector(".form_parent_div");
    let card = document.querySelector("#card-container");
    let title = document.querySelector(".task_title");
    let description = document.querySelector(".description");
    title.textContent = localStorage.getItem("taskTitle");
    description.textContent = localStorage.getItem("descriptionVal");
    parent.style.display = "block";
    parent.style.zIndex = "1";
    card.style.display = "none";
  });
}

function deleteListener(deleteBtn) {
  deleteBtn.btnImage.addEventListener("click", () => {
    const card = document.querySelector("#card-container");
    card.remove();
  });
}

export { FormParentClass };
