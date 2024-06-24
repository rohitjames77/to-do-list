import "./style.css";
const body = document.querySelector("body");
const testDiv = document.createElement("h1");
testDiv.id = "test";
testDiv.textContent = "testing";
body.appendChild(testDiv);
