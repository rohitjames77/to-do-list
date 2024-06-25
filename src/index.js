import "./style.css";
import {header,headerTitle,logo} from "./Dom.js"
import { fromUnixTime } from "date-fns";
const body = document.querySelector("body");
const testDiv = document.createElement("h1");
testDiv.id = "test";
testDiv.textContent = "testing";
body.appendChild(testDiv);
