window.images = [];
$(document).ready(function() {
    
    var imgs = [];

    $("#myTable").tablesorter({sortList: [[0,0], [1,0]]});

    $("#noth").click(function(event){
        event.preventDefault();
        //console.log("nnoth");
    });
    /*var listarDirectorio = function(directorio, callback){
        var files = [];
        $.ajax(directorio)
            .done(function(data){
                $(data).find("a").each(function(){files.push($(this).attr("href"))});
                console.log(files);
                imgs.concat(files);
                callback;
            });
    }*/
    
    
    /*listarDirectorio("../img", 
        listarDirectorio("../img/perifericos/controles",
            listarDirectorio("../img/perifericos/mouses",
                listarDirectorio("../img/perifericos/parlantes",
                    listarDirectorio("../img/perifericos/teclados",
                        function(){console.log(imgs)})))));*/
    
    
        
        $.ajax("../img")
            .done(function(data){
            var files = [];
                $(data).find("a").each(function(){files.push("../"+$(this).attr("href"))});
                console.log(files);
                imgs.concat(files);
                
            $.ajax("../img/perifericos/controles")
                .done(function(data){
                    $(data).find("a").each(function(){files.push("../"+"perifericos/controles/" + $(this).attr("href"))});
                    console.log(files);
                    imgs.concat(files);
                    $.ajax("../img/perifericos/mouses")
                        .done(function(data){
                            $(data).find("a").each(function(){files.push("../" + $(this).attr("href"))});
                            console.log(files);
                            imgs.concat(files);
                            
                            $.ajax("../img/perifericos/parlantes")
                                .done(function(data){
                                    $(data).find("a").each(function(){files.push("../"+$(this).attr("href"))});
                                    console.log(files);
                                    imgs.concat(files);
                                    $.ajax("../img/perifericos/teclados")
                                        .done(function(data){
                                            $(data).find("a").each(function(){files.push("../"+$(this).attr("href"))});
                                            console.log(files);
                                            imgs.concat(files);
                                            console.log("ttt");
    $("table tbody tr").each(function(ind, obj){
        var proc = $(this).attr("procimages");
        var bk = $(this).children().first();
        bk.html($("<a></a>").text(bk.html()).attr("href", "javascript:showDetails('" +proc+ "')"))
            
    });
            $("table tr").each(function(ind, obj){
                if($(obj).attr("procimages") != undefined){
                    imgs = files;
                    window.images = imgs;
                    //console.log("if table tr");
                    var imgFiltered = [];
                    for(e=0;e<imgs.length;e++){
                        //console.log(e);
                        if(imgs[e].match($(this).attr("procimages"))){
                            imgFiltered.push(imgs[e]);
                        };
                    }
                    
                    strjs = "javascript:window.displayImage(0)";
                    console.log(imgFiltered[0]);
                    $(this).prepend("<td><a href='" + strjs + "'>" + "<img src='../img/" + imgFiltered[0] + "' width='100' heigth='100'></a></td>");
                }
            });
            
            $("td a").click(function(){
                var imageArray = [];
                var filter = $(this).parent().parent().attr("procimages");
                for(e=0;e<imgs.length;e++){
                    //console.log(e);
                    if(imgs[e].match(filter)){
                        imageArray.push(imgs[e]);
                    };
                }
                /*console.log("<<<<<<<<<<<<<");
                console.log(window.image.getAttribute('width'));
                console.log(window.image.getAttribute('heigth'));
                console.log(">>>>>>>>>>>>>");*/
                setRoot('../img/');
                setImageArray(imageArray);
                setImage(0);
            });

    $("table th").click(function(){
        if ($(this).attr("id") != "noth"){

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
                                });
                            
                            
                        });
                });
            });

});