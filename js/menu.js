function sub(obj, items) {
    obj.innerHTML = "&#9660; " + obj.value;
    lis = [];
    list = document.createElement("ul");
    
    for (i=0; i<items.length; i++) {
        element = document.createElement("li");
        element.setAttribute("style", "background-color: cornflowerblue;");
        element.innerHTML = items[i];
        list.appendChild(element);
    }
    this.appendChild(list);
}