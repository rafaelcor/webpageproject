
function destroyImage() {
    var image = document.getElementById('fullImage');
    var darkback = document.getElementById('fullBack');
    var next = document.getElementById('next');
    var back = document.getElementById('back');
    
    image.parentNode.removeChild(image);
    darkback.parentNode.removeChild(darkback);
    next.parentNode.removeChild(next);
    back.parentNode.removeChild(back);
}

function displayImage(i) {
    window.image.setAttribute('src', 'img/'+window.imageArray[i]);
    
    document.body.appendChild(window.fullBack);
    document.body.appendChild(window.fullImage);
    document.body.appendChild(window.next);
    document.body.appendChild(window.back);
    
}