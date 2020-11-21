$(document).ready(function(){

    $(".registerBox").hide()

    $(".register-link a#register").click(function(){
        $(".loginBox").fadeOut();
        $(".close i").addClass("flip")
        $(".flair").css({
            "transition": "0.7s",
            "width": "calc(100% + 1050px)"
        });
        setTimeout(() => {
            $(".registerBox").fadeIn();
        }, 700)
    })
    $(".register-link a#login").click(function(){
        $(".registerBox").fadeOut();
        $(".flair").css({
            "transition": "0.7s",
            "width": "550px"
        });
        setTimeout(() => {
            $(".loginBox").fadeIn();
        }, 700)
    })

    $(".close").click(function(){
        $(".registerBox, .loginBox, .close").fadeOut()
        $(".flair").css({
            "transition": "0.7s",
            "width": "0px"
        });
    })

})
