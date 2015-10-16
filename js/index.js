$(document).bind('keydown keyup', function(e) {
    if(e.which === 116) {
        e.preventDefault();
        if (window.actualPage != ""){
            loadContent(window.actualPage);
            return false;
        }
        else{
            loadContent("index.html");
            return false;
        }
        
    }
});



$(document).ready(function(){
    /*if($("#fullBack").length){
        console.log("fulllength");
        $("body").css("overflow", "hidden");
    }*/
    loadContent("index.html");
    
    
});