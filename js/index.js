$(document).bind('keydown keyup', function(e) {
    if(e.which === 116) {
        e.preventDefault();
        if (window.actualPage != ""){
            console.log(window.actualPage);
            loadContent(window.actualPage);
            return false;
        }
        else{
            console.log("index");
            loadContent("index.html");
            return false;
        }
        
    }
});

$(document).ready(function(){
    loadContent("index.html");

});