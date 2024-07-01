import { doc } from "prettier";
import "./style.css";
import { bodyTag,dummyBtn } from "./defaultCard";


class sideDiv{
    constructor(){
        this.div = document.createElement('div');
        this.div.id = 'side-bar';
    }
}

export let sideBar = new sideDiv();
bodyTag.appendChild(sideBar.div);
sideBar.div.appendChild(dummyBtn.btn);

