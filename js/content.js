$(document).ready(function(){
    window.loadContent = function(what){
        $("#content").load("templates/" + what);
    }

});