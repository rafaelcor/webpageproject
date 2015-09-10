window.fullBack = document.createElement('div');
window.fullImage = document.createElement('div');
window.close = document.createElement('a');
window.image = document.createElement('img');
window.back = document.createElement('a');
window.next = document.createElement('a');

window.fullBack.setAttribute('id', 'fullBack');
window.fullImage.setAttribute('id', 'fullImage');

window.close.setAttribute('class', 'close');
window.close.setAttribute('href', 'javascript:destroyImage()');
window.close.innerHTML = 'X';

window.back.setAttribute('id', 'back');
window.back.setAttribute('href', 'javascript:backImage()');
window.back.innerHTML = '<';

window.next.setAttribute('id', 'next');
window.next.setAttribute('href', 'javascript:nextImage()');
window.next.innerHTML = '>';

window.image.setAttribute('height', '20%');
window.image.setAttribute('index', 0);

fullImage.appendChild(window.image);
fullImage.appendChild(window.close);
