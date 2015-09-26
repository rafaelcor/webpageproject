function sub(obj, items) {
    console.log(obj.innerHTML);
    obj.innerHTML = "&#9660; " + obj.innerHTML.split(" ")[1];
    console.log(obj.innerHTML.split(" ")[1]);
    lis = [];
    list = document.createElement("ul");
    if(obj.getAttribute("sub") == 0){
        console.log(obj.getAttribute("sub"));
        for (i=0; i<items.length; i++) {
            element = document.createElement("li");
            element.setAttribute("style", "background-color: cornflowerblue;");
            element.innerHTML = items[i];
            list.appendChild(element);
        }
        obj.setAttribute("sub", "1");
    }
    else{
        console.log("asasdasdasd");
        obj.innerHTML = "&#9658; " + obj.innerHTML.split(" ")[1];
        obj.setAttribute("sub", "0");
    }
    console.log(this);
    obj.appendChild(list);
}

$(document).ready(function(){
    $("li a").click(function(){
       //$("li a").each(function(index){
            if ($(this).attr("subm")){
                sub(this, $(this).attr("subm").split(","));
            }
        //});
    });
    
    
});