$(document).ready(function(){

    $("#0").hide()

    $(".navbar a#1").mouseover(function(){
        $("body").css("background-color", "#42c2f5")
        $(this).css("background-color", "#42c2f5")
    })
    $(".navbar a#2").mouseover(function(){
        $("body").css("background-color", "#810aff")
        $(this).css("background-color", "#810aff")
    })
    $(".navbar a#3").mouseover(function(){
        $("body").css("background-color", "#ff4d35")
        $(this).css("background-color", "#ff4d35")
    })
    $(".navbar a#4").mouseover(function(){
        $("body").css("background-color", "#78ff56")
        $(this).css("background-color", "#78ff56")
    })
    $(".navbar a").mouseleave(function(){
        $("body").css("background-color", "white")
        $(".navbar a").css("background-color", "transparent")

    })

    $(document).scroll(function(event){
        var scroll = $(window).scrollTop();
        if(scroll >= 10){
            $("#title, #subtitle").fadeOut();
        } else {
            $("#title, #subtitle").fadeIn();
        }
    })

})
