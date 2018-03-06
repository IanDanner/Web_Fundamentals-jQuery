$(document).ready(function(){

    $("img").click(function(){

        var img= $(this).attr("src");
        var altImg= $(this).attr("data-alt-src");

        if (altImg != img){
            $(this).attr("data-alt-src", img);
            $(this).attr("src", altImg);

        }
    });
    
})