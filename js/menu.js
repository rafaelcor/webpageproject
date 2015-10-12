$(document).ready(function() {
    
    hideThing(".sub");
    $(".sub").each(function () {$(this).parent().attr("class", "spl");});
    
    function hideThing(id) {
        $(id).each(function () {$(this).hide()});
    }
    
    function showThing(id) {
        $(id).each(function () {$(this).show()});
    }

    $("li a").click(function () {
        console.log($(this).attr("sub"));
        
        //if (! $(this).attr("class").match(/sp./)){
            console.log($(this).html());
            loadContent($(this).html().replace(" ", "") + ".html");
        //}
        
        if ($(this).attr("sub") == "0") {
            $("[class*=sp]").attr("sub", "0");
            $(this).attr("sub", "1");
            
        }
        else if ($(this).attr("sub") == "1") {
            $(this).attr("sub", "0");
        }
        
        $("li a").each(function(){
            if($(this).attr("sub") == "0"){
                console.log(0);
                cs = $(this).attr("class").split(" ");
                hideThing(".s"+cs[0][2]);
                val = $(this).html().split(" ", 2);
                $(this).html("&#9658; " + val[1]);
            }
            else if($(this).attr("sub") == "1"){
                
                console.log(1);
                cs = $(this).attr("class").split(" ");
                showThing(".s"+cs[0][2]);
                val = $(this).html().split(" ", 2);
                $(this).html("&#9660; " + val[1]);
            }
        });
        
        
    });
    
    

});