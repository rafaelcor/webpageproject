$(document).ready(function(){    
    var c = 0;
    $("html").click(function(event){
        if (c == 0){
            c++;
        }else{
            c--;
        }
        console.log($("d1").hasClass("open"));
        if ($(event.target).attr("id") == "dropdownMenu1" && c == 1){
            console.log(event.target);
            console.log("213");
            $("#d2").css("margin-top", "65px");
        }
        else{
            console.log(123123213);
            $("#d2").css("margin-top", "0px");
        }
        if ($(event.target).attr("id") == "dropdownMenu2" && c == 1){
            console.log(event.target);
            console.log("213");
            $("#d3").css("margin-top", "65px");
        }
        else{
            console.log(123123213);
            $("#d3").css("margin-top", "0px");
        }
        
    });
});