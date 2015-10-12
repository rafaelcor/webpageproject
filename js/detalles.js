$(document).ready(function(){
    if($("dimg").attr("proc")){
        console.log($("dimg").attr("proc"));
        strjs = "javascript:window.displayImage(0)";
        tmp = "";
        for(e=0;e<window.images.length;e++){
            if(window.images[e].match($("dimg").attr("proc"))){
                //console.log(">>>" + this);
                tmp = window.images[e];
                console.log(tmp);
            }
        }
        $("dimg").append("<a href='" + strjs + "'>" + "<img src='../img/" +tmp +"'width='200' heigth='200'></a>");
    }
});