$(document).ready(function () {
    $(".hide").click(function () {
        $(".click p").hide();
    })
    $(".show").click(function () {
        $(".click p").show();
    })
    $(".toggle").click(function () {
        $(".toggle p").toggle();
    })
    $(".slideUp").click(function () {
        $(".slide p").slideUp();
    })
    $(".slideDown").click(function () {
        $(".slide p").slideDown();
    })
    $(".slideToggle").click(function () {
        $(".toggle p").slideToggle();
    })
    $(".fadeOut").click(function () {
        $(".fade p").fadeOut();
    })
    $(".fadeIn").click(function () {
        $(".fade p").fadeIn();
    })
    $(".addClass button").click(function () {
        $(".addClass p").addClass("newClass");
    })
    $(".before button").click(function () {
        $(".before p").before("I AM BEFORE!");
    })
    $(".after button").click(function () {
        $(".after p").after("I AM AFTER!");
    })
    $(".append button").click(function () {
        $(".append p").append("I AM APPENDED!");
    })
    $(".html button").click(function () {
        $(".html p").html("I AM REPLACING THIS!");
    })
    $(".attr button").click(function () {
        $(".attr p").attr("align","left");
    })
    $(".val button").click(function () {
        console.log($(".val select").val());
    })
    $(".text button").click(function () {
        console.log($(".text").text());
    })
    $(".data button").click(function () {
        $(".data p").data();
    })
})