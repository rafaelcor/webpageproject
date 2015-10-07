
$(document).ready(function() {
    //console.log("preajax");
    $("#myTable").tablesorter({sortList: [[0,0], [1,0]]});
    //console.log("proc");
    
    //headerSortDown
    $("#noth").click(function(event){
        event.preventDefault();
        //console.log("nnoth");
    });
    //console.log("preajax");
    var imgFiles = [];
    //console.log("preajax");
    $.ajax("../img")
        .done(function(data){
            //console.log("ajax no error");
            $(data).find("a").each(function(){
                var image = $(this).attr("href");
                    imgFiles.push(image);
            });
            //console.log("ajax no error");
            
            $("table tbody tr").each(function(ind, obj){
                var proc = $(this).attr("procimages");
                var bk = $(this).children().first();
                bk.html($("<a></a>").text(bk.html()).attr("href", "javascript:showDetails('" +proc+ "')"))
            
            });
            $("table tr").each(function(ind, obj){
                if($(obj).attr("procimages") != undefined){
                    //console.log("if table tr");
                    var imgFiltered = [];
                    for(e=0;e<imgFiles.length;e++){
                        //console.log(e);
                        if(imgFiles[e].match($(this).attr("procimages"))){
                            imgFiltered.push(imgFiles[e]);
                        };
                    }
                    //console.log("L31");
                    //console.log(imgFiltered);
                    strjs = "javascript:window.displayImage(0)";

                    $(this).prepend("<td><a href='" + strjs + "'>" + "<img src='../img/" + imgFiltered[0] + "' width='100' heigth='100'></a></td>");
                }
            });
        
            $("td a").click(function(){
                var imageArray = [];
                var filter = $(this).parent().parent().attr("procimages");
                for(e=0;e<imgFiles.length;e++){
                    //console.log(e);
                    if(imgFiles[e].match(filter)){
                        imageArray.push(imgFiles[e]);
                    };
                }
                setRoot('../img/');
                setImageArray(imageArray);
                setImage(0);
            });
        })
            .fail(function(){});

    
    
    $("table th").click(function(){
        if ($(this).attr("id") != "noth"){
            //console.log($(this).html());
            //$(".headerSortDown").html($(this).html().replace($(this).html().substr(-1), "▼"));
            //$(".headerSortUp").html($(this).html().replace($(this).html().substr(-1), "▲"));
            if($(this).hasClass("headerSortDown")){
                //console.log("d1");
                $(this).html($(this).html().replace($(this).html().substr(-1), "▼"));
            }
            else{
                //console.log("d2");
                $(this).html($(this).html().replace($(this).html().substr(-1), "▲"));
            }
        }
        
    });
    

    
    
    
});