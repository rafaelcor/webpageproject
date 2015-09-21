window.fullBack = document.createElement('div');
window.fullImage = document.createElement('div');
window.close = document.createElement('a');
window.image = document.createElement('img');
window.back = document.createElement('a');
window.next = document.createElement('a');

window.fullBack.setAttribute('id', 'fullBack');
window.fullBack.setAttribute('onclick', 'destroyImage()');

window.fullImage.setAttribute('id', 'fullImage');
window.fullImage.setAttribute('width', 400);
window.fullImage.setAttribute('height', 300);

window.close.setAttribute('class', 'close');
window.close.setAttribute('href', 'javascript:destroyImage()');
window.close.innerHTML = 'X';

window.back.setAttribute('id', 'back');
window.back.setAttribute('href', 'javascript:backImage()');
window.back.innerHTML = '<';

window.next.setAttribute('id', 'next');
window.next.setAttribute('href', 'javascript:nextImage()');
window.next.innerHTML = '>';

//window.image.setAttribute('style', 'position: absolute;');
window.image.setAttribute('width', parseInt(window.fullImage.getAttribute('width'))-5);
window.image.setAttribute('height', parseInt(window.fullImage.getAttribute('height'))-5);
window.image.setAttribute('index', 0);

fullImage.appendChild(window.close);
fullImage.appendChild(window.image);