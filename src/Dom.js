import "./style.css";
import image from '../src/assets/to-do-list.png'
// Sidebar Div .......................................
const body = document.querySelector('body');
const sideBar = document.createElement('div');
sideBar.classList= 'side-bar';
body.appendChild(sideBar);
// Sidebar Title and Logo ...............................
const title = document.createElement('h1');
title.id = 'side-bar-title';
title.textContent='To-Do';
sideBar.appendChild(title);
// new To Do create Button ................................
const btnImage = document.createElement('img');
btnImage.id ='btn-image';
btnImage.src=image;
btnImage.alt = 'btn-image'
body.appendChild(btnImage);
const card = document.createElement('div ');
card.id ='card';
body.appendChild(card);















export{sideBar,title,btnImage,card}