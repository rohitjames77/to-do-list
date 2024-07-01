
import { doc } from 'prettier'

 function body (){
let body = document.querySelector('body');
return body;
}
class defaultParent {
    constructor() {
        this.element = document.createElement('div');
        this.element.id = 'default-parent';
    }
    
    append(childElement) {
        this.element.appendChild(childElement);
    }
}


class defaultChild {
    constructor(){
        this.element = document.createElement('div');
        this.element.id = 'default-child';
    }
}

let parentDiv = new defaultParent();
let childDiv = new defaultChild();
let bodyTag = body();
console.log(bodyTag);
bodyTag.appendChild(parentDiv.element);
parentDiv.element.appendChild(childDiv.element);
export{bodyTag,parentDiv,childDiv};


class defaultBtn {
constructor(){
    this.btn = document.createElement('button');
    this.btn.id = 'default-button';
    this.btn.textContent = "Default Title & Date";
}
}

export let dummyBtn = new defaultBtn();