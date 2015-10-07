$(document).ready(function(){
    window.loadContent = function(what){
        $("#content").load("templates/" + what);
    }
    
    window.showDetails = function(procStr){
        loadContent(procStr + ".html");
    }
});