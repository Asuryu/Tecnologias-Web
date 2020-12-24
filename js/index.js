$(document).ready(function(){

    emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    $("body").css({"display": "block"})
    $(".notification").hide()
    $(".flair").css({
        "transition": "0.3s",
        "width": "0px"
    })

    $(".flair, .registerBox, .loginBox, .close, .menu-mobile").hide()

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 0){
            $(".darkner").css({"background-color": "#292929"})
            $(".navbg").css({"background-color": "#212121"})
        } else {
            $(".darkner").css({"background-color": "#111111d5"})
            $(".navbg").css({"background-color": "transparent"})
        }
    })

    $(".men").click(function(){
        if($(".men").attr("id") == "off"){
            $(".menu-mobile").fadeIn()
            $(".men").attr("id", "on")
        }
        else{
            $(".menu-mobile").fadeOut()
            $(".men").attr("id", "off")
        }
    })

    $(".register-link a#register").click(function(){
        $(".flair, .loginBox, .registerBox").css({"position": "fixed"})
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
        $(".flair, .loginBox, .registerBox").css({"position": "fixed"})
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
        $(".flair").fadeOut()
        $(".men").fadeIn()
        $(".flair, .loginBox, .registerBox").css({"position": "fixed"})
        $(".registerBox, .loginBox, .close").fadeOut()
        $(".flair").css({
            "transition": "0.7s",
            "width": "0px"
        });
        $(".log").fadeIn()
    })
    $(".log").click(function(){
        $(".flair").fadeIn()
        $(".men").fadeOut()
        $(".flair, .loginBox, .registerBox").css({"position": "fixed"})
        $(".log").fadeOut()
        $(".flair").css({
            "transition": "0.7s",
            "width": "550px"
        });
        $(".loginBox, .close").fadeIn()
    })

})

function checkCredentials(){
    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("pwd").value;

    if(emailInput == "" && passwordInput == ""){
        $(".notification#log_in").fadeOut()
    }
    else if(emailInput == ""){
        showNotification("#log_in", "Por favor introduza um endereço de email")
    }
    else if(passwordInput == ""){
        showNotification("#log_in", "Por favor introduza a palavra-passe")
    } 
    
    if(emailInput != "" && passwordInput != ""){
        if(emailInput == "tweb@isec.pt" && passwordInput == "tweb"){
            alert("Correct!")
        } else {
            showNotification("#log_in", "As credenciais introduzidas estão incorretas")
        }
    }

}   

function registerUser(){
    var emailInputR = document.getElementById("email_reg").value;
    var passwordInputR = document.getElementById("pwd_reg").value;

    if(emailInputR == "" && passwordInputR == ""){
        $(".notification#sign_up").fadeOut()
    }
    else if(emailInputR == ""){
        showNotification("#sign_up", "Por favor introduza um endereço de email")
    }
    else if(emailInputR != "" && !emailRegex.test(emailInputR)){
        showNotification("#sign_up", "O endereço de email introduzido é inválido")
    }
    else if(passwordInputR == ""){
        showNotification("#sign_up", "Por favor introduza uma palavra-passe")
    } 

}

function showNotification(selector, message){
    $(selector).fadeIn()
    $(selector).html(message)
    setTimeout(function(){
        $(selector).fadeOut()
    }, 2500)
}