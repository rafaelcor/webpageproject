$(document).ready(function(){
   
    window.destroyImage = function() {
        $("#fullImage").remove();
        $("#fullBack").remove();
        $("#next").remove();
        $("#back").remove();
    }

    window.displayImage = function(i) {
        window.image.setAttribute('src', '../img/'+window.imageArray[i]);
        $("body").append(window.fullBack);
        $("body").append(window.fullImage)
        $("body").append(window.next);
        $("body").append(window.back);
    }

});