
$(document).ready(function() {
        
    $("#myTable").tablesorter({sortList: [[0,0], [1,0]]}); 
    console.log("proc");
    //headerSortDown
    $("#noth").click(function(event){
        event.preventDefault();
        console.log("nnoth");
    });
    
    $("table th").click(function(){
        if ($(this).attr("id") != "noth"){
            console.log($(this).html());
            //$(".headerSortDown").html($(this).html().replace($(this).html().substr(-1), "▼"));
            //$(".headerSortUp").html($(this).html().replace($(this).html().substr(-1), "▲"));
            if($(this).hasClass("headerSortDown")){
                console.log("d1");
                $(this).html($(this).html().replace($(this).html().substr(-1), "▼"));
            }
            else{
                console.log("d2");
                $(this).html($(this).html().replace($(this).html().substr(-1), "▲"));
            }
        }
        
    });
    
    /*$("table img").click(function(){
        console.log("img click");
    })*/
    
    
    
    $("td a").click(function(){
        var imageArray = [];
        //console.log(this.getParent());
        var filter = $(this).parent().parent().attr("procimages");
        console.log(filter);
        $.ajax({
          url: "../img",
          success: function(data){
              setRoot('../img/');
              $(data).find("a:contains(" + filter  + ")").each(function(){
                // will loop through 
                 var image = $(this).attr("href");
                 imageArray.push(image);
                
             });
              setImageArray(imageArray);
          }
        });
        
    });
    
    
    
});