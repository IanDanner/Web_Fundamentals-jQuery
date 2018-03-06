$(document).ready(function(){

        $(document).on("click", "button", function(){
            $(".first").append("<p>"+$(".f1 input").val()+"</p>");
            $(".last").append("<p>"+$(".f2 input").val()+"</p>");
            $(".email").append("<p>"+$(".f3 input").val()+"</p>");
            $(".contact").append("<p>"+$(".f4 input").val()+"</p>");            
        })
    })