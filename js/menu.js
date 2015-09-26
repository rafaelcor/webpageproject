function sub(obj, items) {
    console.log(123);
    console.log(obj);
    obj.innerHTML = "&#9660; " + obj.innerHTML.split(" ")[1];
    console.log(obj.innerHTML.split(" ")[1]);
    lis = [];
    list = document.createElement("ul");
    list.setAttribute("sm", "");
    if(obj.getAttribute("sub") == 0){
        console.log(obj);
        for (i=0; i<items.length; i++) {
            element = document.createElement("li");
            element.setAttribute("style", "background-color: cornflowerblue;");
            element.innerHTML = items[i];
            list.appendChild(element);
        }
        console.log(this);
        obj.parentElement.appendChild(list);
        obj.setAttribute("sub", "1");
        
    }
    else{
        console.log("asasdasdasd");
        obj.parentElement.removeChild(obj.parentElement.children[1]);
        obj.innerHTML = "&#9658; " + obj.innerHTML.split(" ")[1];
        obj.setAttribute("sub", "0");
    }
    
}

$(document).ready(function(){
    $("li").click(function(){
       //$("li a").each(function(index){
            if ($(this).children("a").attr("subm")){
                console.log(this);
                sub($(this).children("a").get(0), $(this).children("a").attr("subm").split(","));
            }
        //});
    });
    
    
});