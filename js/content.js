window.actualPage = "";
$(document).ready(function(){
    window.loadContent = function(what){
        console.log("<<<<<<<<");
        console.log(what);
        console.log(">>>>>>>>");
        window.actualPage = what;
        $("#content").load("templates/" + what);
    }
    
    window.showDetails = function(procStr){
        loadContent(procStr + ".html");
    }
});