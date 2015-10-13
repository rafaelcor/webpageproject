window.actualPage = "";
$(document).ready(function(){
    window.loadContent = function(what){
        window.actualPage = what;
        $("#content").load("templates/" + what);
    }
    
    window.showDetails = function(procStr){
        loadContent(procStr + ".html");
    }
});