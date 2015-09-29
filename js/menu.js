$(document).ready(function() {
    
    hideThing(".sub");
    $(".sub").each(function () {$(this).parent().attr("class", "spl");});
    
    function hideThing(id) {
        $(id).each(function () {$(this).hide()});
    }
    
    function showThing(id) {
        $(id).each(function () {$(this).show()});
    }

    $("a").click(function () {
        console.log($(this).attr("sub"));
        
        if (! $(this).hasClass("sp1") || 
            ! $(this).hasClass("sp2") ||
            ! $(this).hasClass("sp3") ||
            ! $(this).hasClass("sp4"))
            {
                console.log($(this).html());
                loadContent($(this).html().replace(" ", "") + ".html");
            }
        
        if ($(this).attr("sub") == "0") {
            console.log("open");
            cs = $(this).attr("class").split(" ");
            showThing(".s"+cs[0][2]);
            
            $(this).attr("sub", "1");
            val = $(this).html().split(" ", 2);
            console.log(val[1]);
            $(this).html("&#9660; " + val[1]);
        }
        else if ($(this).attr("sub") == "1") {
            console.log("close");
            cs = $(this).attr("class").split(" ");
            hideThing(".s"+cs[0][2]);
            val = $(this).html().split(" ", 2);
            console.log(val[1]);
            $(this).html("&#9658; " + val[1]);
            $(this).attr("sub", "0");
        }
    });
    
    

});