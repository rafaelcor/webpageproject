window.images = [];
$(document).ready(function() {
    
    var imgs = [];

    IMG_FOLDER = "../img";
    ajaxPath = ["perifericos/controles", 
                "perifericos/mouses",
                "perifericos/parlantes",
                "perifericos/teclados",
                "procesadores/intel",
                "procesadores/amd",
                "refrigeracion/aire",
                "refrigeracion/liquida",
                "laptops",
                "pcs",
                "motherboards",
                "tarjetas/video/ati",
                "tarjetas/video/nvidia"
                ];
    
    $.ajax(IMG_FOLDER)
        .done(function(data){
            console.log("1stajax");
            var files = [];
            var ajaxArray = [];
            $(data).find("a").each(function(){files.push("../"+$(this).attr("href"))});
            console.log(files);
            imgs.concat(files);
                
            for(e=0;e<ajaxPath.length;e++){
                ajaxArray.push(
                    $.ajax({
                        url: IMG_FOLDER+"/"+ajaxPath[e],
                        success: function(data){
                            $(data).find("a").each(
                                function(){
                                    files.push(".." + $(this).attr("href"));
                                }
                            );
                            
                            imgs.concat(files);
                            console.log(files);
                        }
                        
                    })
                );
                    
            }
            window.images = files;
            $.when.apply($, ajaxArray).done(function(){
                console.log(files);
                $("table tbody tr").each(function(ind, obj){
                    var proc = $(this).attr("procimages");
                    var bk = $(this).children().first();
                    bk.html($("<a></a>").text(bk.html()).attr("href", "javascript:showDetails('" +proc+ "')"))

                });
                $("table tr").each(function(ind, obj){
                    if($(obj).attr("procimages") != undefined){
                        imgs = files;
                        var imgFiltered = [];
                        for(e=0;e<imgs.length;e++){
                            if(imgs[e].match($(this).attr("procimages"))){
                                imgFiltered.push(imgs[e]);
                            };
                        }

                        strjs = "javascript:window.displayImage(0)";
                        console.log(imgFiltered[0]);
                        $(this).prepend("<td><a href='" + strjs + "'>" + "<img src='" + imgFiltered[0] + "' width='100' heigth='100'></a></td>");
                    }
                    
                });
                $("#myTable").tablesorter();
                $("#myTable #noth").removeClass("header");

                $("td a").click(function(){
                    console.log("TD A!!");
                    var imageArray = [];
                    var filter = $(this).parent().parent().attr("procimages");
                    for(e=0;e<imgs.length;e++){
                        if(imgs[e].match(filter)){
                            imageArray.push(imgs[e]);
                        };
                    }
                    setRoot(IMG_FOLDER);
                    setImageArray(imageArray);
                    console.log(imageArray.length);
                    setImage(0);
                });

                $("table th").click(function(){
                    if ($(this).attr("id") != "noth"){

                        if($(this).hasClass("headerSortDown")){
                            $(this).html($(this).html().replace($(this).html().substr(-1), "▼"));
                        }
                        else{
                            $(this).html($(this).html().replace($(this).html().substr(-1), "▲"));
                        }
                    }

                });
            });
        });
    
    
});