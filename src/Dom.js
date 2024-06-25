import "./style.css";
import image from "./header-logo.png"
// Header Div......................................
const body = document.querySelector('body');
const header = document.createElement('header');
header.classList ='header';
body.appendChild(header);
// Header title ......................................
const headerTitle = document.createElement('h1');
headerTitle.classList ='header-title';
headerTitle.textContent='To-Do';
header.appendChild(headerTitle); 
// Header Logo .......................................
// Header title logo...................................
const logo = document.createElement('img');
logo.src= image;
logo.alt='header-logo';
header.appendChild(logo);

export{header,headerTitle,logo};
