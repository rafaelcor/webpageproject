$(document).ready(function(){
   
    window.destroyImage = function() {
        $("body").css("overflow", "auto");
        $("#fullImage").remove();
        $("#fullBack").remove();
        $("#next").remove();
        $("#back").remove();
    }

    window.displayImage = function(i) {
        window.image.setAttribute('src', '../img/'+window.imageArray[i]);
        $("body").css("overflow", "hidden");
        $("body").append(window.fullBack);
        $("body").append(window.fullImage)
        $("body").append(window.next);
        $("body").append(window.back);
    }

});