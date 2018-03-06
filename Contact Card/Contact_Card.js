$(document).ready(function(){

    $(document).on("click", "button", function(){
        $(".card-container").append(
            "<div><h1>"+$(".first-name input").val()+" "+$(".last-name input").val()+"</h1><h2>Click for description!</h2><h3>"+$(".description textarea").val()+"</h3></div>");
    
    })

    $(document).on("click", ".card-container div", function(){
        $(this).children().toggle();
    })
})