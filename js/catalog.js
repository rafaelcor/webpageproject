window.root = ''
window.imageArray = []


function setRoot(path) {
    window.root = path;
}

function setImageArray(files) {
    window.imageArray = files;
}

function setImageSize(w, h) {
    window.image.setAttribute('width', w);
    window.image.setAttribute('height', h);
}

function addImage(file) {
    window.imageArray.push(file);
}

function addImage(file) {
    window.imageArray.push(file);
}

function getImage() {
    return window.image.getAttribute("index");
}

function setImage(i) {
    window.image.setAttribute('src', imageArray[i]);
    window.image.setAttribute("index", parseInt(i));
}

function nextImage() {
    var i = parseInt(window.image.getAttribute("index"))+1;
    console.log(i);
    if (i<imageArray.length && imageArray[i] != undefined) window.image.setAttribute("index", i);
    setImage(window.image.getAttribute("index"));
}

function backImage() {
    var i = parseInt(window.image.getAttribute("index"))-1
    if (i>=0) window.image.setAttribute("index", i);
    setImage(window.image.getAttribute("index"));
}

$(document).ready(function(){
    $("body").keypress(function(e){
        if(e.keyCode == 27){ // 27 -> ESC
            destroyImage();
        }
    })
});
