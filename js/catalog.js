window.root = 'img/'
window.imageArray = []

function addImage(file) {
    window.imageArray.push(file);
}

function setImageArray(files) {
    window.imageArray = files;
}

function addImage(file) {
    window.imageArray.push(file);
}

function getImage() {
    return window.image.getAttribute("index");
}

function setImage(i) {
    window.image.setAttribute('src', root + imageArray[i]);
    window.image.setAttribute("index", parseInt(i));
}

function nextImage() {
    console.log(window.image.getAttribute("index"));
    //window.image.index++;
    window.image.setAttribute("index", parseInt(window.image.getAttribute("index"))+1);
    
    console.log(window.image.getAttribute("index"));
    //console.log(window.image.index);
    setImage(window.image.getAttribute("index"));
}

function backImage() {
    window.image.index--;
    setImage(window.image.getAttribute("index"));
}