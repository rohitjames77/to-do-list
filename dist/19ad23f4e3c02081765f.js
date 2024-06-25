import "./style.css";
import image from '../src/assets/todo-backdrop.jpg';
import { sideBar, title, btnImage } from './Dom.js';
import { fromUnixTime } from "date-fns";
const body = document.querySelector("body");
const testDiv = document.createElement("div");
testDiv.style.backgroundImage = image;
testDiv.id = "test";
body.appendChild(testDiv);