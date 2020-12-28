$(document).ready(function(){

    emailRegex = /\S+@\S+\.\S+/
    $("body").css({"display": "block"})
    $(".notification, .wrap").hide()
    $("form#oqf, form#qs").hide()
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

            $(".wrap").fadeIn()
            $(".darkner").css({"height": "0px"})
            $(".background img#bg").css({"height": "0px"})
        } else {
            $(".darkner").css({"background-color": "#111111d5"})
            $(".navbg").css({"background-color": "transparent"})

            $(".wrap").fadeOut()
            $(".darkner").css({"height": "100vh"})
            $(".background img").css({"height": "100vh"})
        }
    })

    $(".quem-somos h2").click(function(){
        if($("form#qs").attr("state") == "off"){
            $("form#qs").fadeIn()
            $("form#qs").attr("state", "on")
        } else {
            $("form#qs").fadeOut()
            $("form#qs").attr("state", "off")
        }
    })
    $(".o-que-fazemos h2").click(function(){
        if($("form#oqf").attr("state") == "off"){
            $("form#oqf").fadeIn()
            $("form#oqf").attr("state", "on")
        } else {
            $("form#oqf").fadeOut()
            $("form#oqf").attr("state", "off")
        }
    })

    $("#0, #5").click(function(){
        $(".wrap").fadeIn()
        $("#quem-somos")[0].scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
        $("#quem-somos").css({"opacity": "0.5"})
        setTimeout(function(){
            $("#quem-somos").css({"opacity": "1.0"})
        }, 300)
    })
    $("#1, #6").click(function(){
        $(".wrap").fadeIn()
        $("#o-que-fazemos")[0].scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
        $("#o-que-fazemos").css({"opacity": "0.5"})
        setTimeout(function(){
            $("#o-que-fazemos").css({"opacity": "1.0"})
        }, 300)
    })
    $("#2, #7").click(function(){
        $(".wrap").fadeIn()
        $("#indicadores")[0].scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
        $("#indicadores").css({"opacity": "0.5"})
        setTimeout(function(){
            $("#indicadores").css({"opacity": "1.0"})
        }, 300)
    })
    $("#3, #8").click(function(){
        $(".wrap").fadeIn()
        $("#recursos")[0].scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
        $("#recursos").css({"opacity": "0.5"})
        setTimeout(function(){
            $("#recursos").css({"opacity": "1.0"})
        }, 300)
    })
    $("#4, #9").click(function(){
        $(".wrap").fadeIn()
        $("#mais-apoio")[0].scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
        $("#mais-apoio").css({"opacity": "0.5"})
        setTimeout(function(){
            $("#mais-apoio").css({"opacity": "1.0"})
        }, 300)
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