$(document).ready(function(){

    emailRegex = /\S+@\S+\.\S+/

    $("body").css({"display": "block"})

    $(".notification, .wrap, .lout, .wrap2, .container").hide()
    $("#success, #success p, #successR, #successR p").hide()
    $(".flair, .registerBox, .loginBox, .close, .menu-mobile").hide()

    $(".flair").css({
        "transition": "0.3s",
        "width": "0px"
    })

    $("#0, #5").click(function(){
        $("#mais-apoio, #indicadores, #recursos, #o-que-fazemos, #quem-somos").fadeOut()
        $("#quem-somos").fadeIn()
    })
    $("#1, #6").click(function(){
        $("#mais-apoio, #indicadores, #recursos, #o-que-fazemos, #quem-somos").fadeOut()
        $("#o-que-fazemos").fadeIn()
    })
    $("#2, #7").click(function(){
        $("#mais-apoio, #indicadores, #recursos, #o-que-fazemos, #quem-somos").fadeOut()
        $("#indcadores").fadeIn()
    })
    $("#3, #8").click(function(){
        $("#mais-apoio, #indicadores, #recursos, #o-que-fazemos, #quem-somos").fadeOut()
        $("#recursos").fadeIn()
    })
    $("#4, #9").click(function(){
        $("#mais-apoio, #indicadores, #recursos, #o-que-fazemos, #quem-somos").fadeOut()
        $("#mais-apoio").fadeIn()
    })

    $(".men").click(function(){
        if($(".men").attr("id") == "off"){
            $(".men").html('<i class="fas fa-times"></i>')
            $(".menu-mobile").fadeIn()
            $(".men").attr("id", "on")
        }
        else{
            $(".men").html('<i class="fas fa-bars"></i>')
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
    else if(emailInput != "" && !emailRegex.test(emailInput)){
        showNotification("#log_in", "O endereço de email introduzido é inválido")
    }
    else if(passwordInput == ""){
        showNotification("#log_in", "Por favor introduza a palavra-passe")
    } 
    else if(emailInput != "" && passwordInput != ""){
        if(emailInput == "tweb@isec.pt" && passwordInput == "tweb"){
            $(".flair, .loginBox, .registerBox").css({"position": "fixed"})
            $(".loginBox, .registerBox").fadeOut()
            $("#success").fadeIn()
            setTimeout(() => {
                $("#success h").fadeOut()
                $("#success p").fadeIn()
                $("#success p").css({"letter-spacing": "8px"})
            }, 1000)
            $(".flair").css({
                "transition": "0.7s",
                "width": "calc(100% + 1050px)"
            });
            setTimeout(() => {
                $(".flair").css({
                    "transition": "0.7s",
                    "width": "550px",
                    "opacity": "0.0"
                });
                $("#success").fadeOut()
            }, 2000)
            $(".close").fadeOut()
            $(".lout").fadeIn()
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
    } else {
        $(".loginBox, .registerBox").fadeOut()
            $("#successR").fadeIn()
            setTimeout(() => {
                $("#successR h").fadeOut()
                $("#successR p").fadeIn()
                $("#successR p").css({"letter-spacing": "8px"})
            }, 1000)
            $(".flair").css({
                "transition": "0.7s",
                "width": "calc(100% + 1050px)"
            });
            setTimeout(() => {
                $(".flair").css({
                    "transition": "0.7s",
                    "width": "550px",
                    "opacity": "0.0"
                });
                $("#successR").fadeOut()
            }, 2000)
            $(".close").fadeOut()
            $(".lout").fadeIn()
    }

}

function showNotification(selector, message){
    $(selector).fadeIn()
    $(selector).html("<center>" + message + "</center>")
    setTimeout(function(){
        $(selector).fadeOut()
    }, 2500)
}

function closeMobileNav(){
    $(".men").html('<i class="fas fa-bars"></i>')
    $(".menu-mobile").fadeOut()
    $(".men").attr("id", "off")
    return true;
}