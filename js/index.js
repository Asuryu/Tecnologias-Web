$(document).ready(function () {

    var slideIndex = 1
    emailRegex = /\S+@\S+\.\S+/

    document.querySelectorAll('input').forEach(item => {
        if (item.id == "email" || item.id == "pwd") {
            item.addEventListener('keyup', event => {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    checkCredentials()
                }
            })
        } else if (item.id == "email_reg" || item.id == "pwd_reg") {
            item.addEventListener('keyup', event => {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    registerUser()
                }
            })
        }
    })

    $("#graph2, #graph3, #graph4, #graph5, #graph6").hide()

    $("#next").click(function () {

        if ($("#carousel").attr("slide") == "6") {
            $("#i" + slideIndex).removeClass("current")
            $("#graph6").hide()
            slideIndex = 1
            $("#carousel").attr("slide", slideIndex)
            $("#graph1").show()
            $("#i" + slideIndex).addClass("current")
        } else {
            $("#i" + slideIndex).removeClass("current")
            $("#graph" + slideIndex).hide()
            slideIndex += 1
            $("#carousel").attr("slide", slideIndex)
            $("#graph" + slideIndex).show()
            $("#i" + slideIndex).addClass("current")
        }

        drawChart1();
        drawChart2();
        drawChart3();
        drawChart4();
        drawChart5();
        drawChart6();

    })
    $("#prev").click(function () {

        if ($("#carousel").attr("slide") == "1") {
            $("#i" + slideIndex).removeClass("current")
            $("#graph1").hide()
            slideIndex = 6
            $("#carousel").attr("slide", slideIndex)
            $("#graph6").show()
            $("#i" + slideIndex).addClass("current")
        } else {
            $("#i" + slideIndex).removeClass("current")
            $("#graph" + slideIndex).hide()
            slideIndex -= 1
            $("#carousel").attr("slide", slideIndex)
            $("#graph" + slideIndex).show()
            $("#i" + slideIndex).addClass("current")
        }

        drawChart1();
        drawChart2();
        drawChart3();
        drawChart4();
        drawChart5();
        drawChart6();

    })

    $("#q0").click(function () {
        if ($(this).attr("state") == "off") {
            $(this).attr("state", "on")
            $(this).addClass("active")
            $("#r0").css({
                "display": "block",
                "opacity": "1.0",
                "height": "auto",
            })
        }
        else if ($(this).attr("state") == "on") {
            $(this).attr("state", "off")
            $(this).removeClass("active")
            $("#r0").css({
                "display": "none",
                "opacity": "0",
                "height": "0px",
            })
        }
    })
    $("#q1").click(function () {
        if ($(this).attr("state") == "off") {
            $(this).attr("state", "on")
            $(this).addClass("active")
            $("#r1").css({
                "display": "block",
                "opacity": "1.0",
                "height": "auto",
            })
        }
        else if ($(this).attr("state") == "on") {
            $(this).attr("state", "off")
            $(this).removeClass("active")
            $("#r1").css({
                "display": "none",
                "opacity": "0",
                "height": "0px",
            })
        }
    })
    $("#q2").click(function () {
        if ($(this).attr("state") == "off") {
            $(this).attr("state", "on")
            $(this).addClass("active")
            $("#r2").css({
                "display": "block",
                "opacity": "1.0",
                "height": "auto",
            })
        }
        else if ($(this).attr("state") == "on") {
            $(this).attr("state", "off")
            $(this).removeClass("active")
            $("#r2").css({
                "display": "none",
                "opacity": "0",
                "height": "0px",
            })
        }
    })
    $("#q3").click(function () {
        if ($(this).attr("state") == "off") {
            $(this).attr("state", "on")
            $(this).addClass("active")
            $("#r3").css({
                "display": "block",
                "opacity": "1.0",
                "height": "auto",
            })
        }
        else if ($(this).attr("state") == "on") {
            $(this).attr("state", "off")
            $(this).removeClass("active")
            $("#r3").css({
                "display": "none",
                "opacity": "0",
                "height": "0px",
            })
        }
    })
    $("#q4").click(function () {
        if ($(this).attr("state") == "off") {
            $(this).attr("state", "on")
            $(this).addClass("active")
            $("#r4").css({
                "display": "block",
                "opacity": "1.0",
                "height": "auto",
            })
        }
        else if ($(this).attr("state") == "on") {
            $(this).attr("state", "off")
            $(this).removeClass("active")
            $("#r4").css({
                "display": "none",
                "opacity": "0",
                "height": "0px",
            })
        }
    })

    $("body").css({ "display": "block" })

    $(".notification, .wrap, .lout, .wrap2, .container, .navbg").hide()
    $("#mais-apoio .items div").hide()
    $(".faq div").show()
    $("#success, #success p, #successR, #successR p").hide()
    $(".flair, .registerBox, .loginBox, .close, .menu-mobile, #sub1, #sub2, #back").hide()
    $("#bg").fadeIn()

    $(".flair").css({
        "transition": "0.3s",
        "width": "0px"
    })

    $("#logo").click(function () {
        $(".darkner").css({ "opacity": "0.95" })
        $(".container").fadeOut()
        $(".main").fadeIn()
        $(".navbg").fadeOut()
    })

    $("#0, #5").click(function () {
        $("form").trigger("reset")
        $(".darkner").css({ "opacity": "1.0" })
        $("#mais-apoio, #indicadores, #recursos, #o-que-fazemos, #quem-somos").fadeOut()
        $("#quem-somos").fadeIn()
        $(".navbg").fadeIn()
        $(".main").fadeOut()
    })
    $("#1, #6").click(function () {
        $("form").trigger("reset")
        $(".darkner").css({ "opacity": "1.0" })
        $("#mais-apoio, #indicadores, #recursos, #o-que-fazemos, #quem-somos").fadeOut()
        $("#o-que-fazemos").fadeIn()
        $(".navbg").fadeIn()
        $(".main").fadeOut()
    })
    $("#2, #7").click(function () {
        slideIndex = 1
        $("form").trigger("reset")
        $(".darkner").css({ "opacity": "1.0" })
        $("#mais-apoio, #indicadores, #recursos, #o-que-fazemos, #quem-somos").fadeOut()
        $("#indicadores").fadeIn()
        $(".navbg").fadeIn()
        $(".main").fadeOut()
        drawChart1();
    })
    $("#3, #8").click(function () {
        $("form").trigger("reset")
        $(".darkner").css({ "opacity": "1.0" })
        $("#mais-apoio, #indicadores, #recursos, #o-que-fazemos, #quem-somos").fadeOut()
        $("#recursos").fadeIn()
        $(".navbg").fadeIn()
        $(".main").fadeOut()
    })
    $("#4, #9").click(function () {
        $("#0, #1, #2, #3, #4").hide()
        $("#sub1, #sub2, #back").fadeIn()
    })
    $("#back").click(function(){
        $("#0, #1, #2, #3, #4").fadeIn()
        $("#sub1, #sub2, #back").hide()
    })
    $("#sub1, #pc_sub1").click(function(){
        $("#0, #1, #2, #3, #4").fadeIn()
        $("#sub1, #sub2, #back").hide()
        $(".faq").hide()
        $(".emergencia, .apoio, .uteis, .unidades").show()
        $(".darkner").css({ "opacity": "1.0" })
        $("#recursos, #indicadores, #recursos, #o-que-fazemos, #quem-somos").fadeOut()
        $("#mais-apoio").fadeIn()
        $(".navbg").fadeIn()
        $(".main").fadeOut()
    })
    $("#sub2, #pc_sub2").click(function(){
        $("#0, #1, #2, #3, #4").fadeIn()
        $("#sub1, #sub2, #back").hide()
        $(".faq").show()
        $(".emergencia, .apoio, .uteis, .unidades").hide()
        $(".darkner").css({ "opacity": "1.0" })
        $("#recursos, #indicadores, #recursos, #o-que-fazemos, #quem-somos").fadeOut()
        $("#mais-apoio").fadeIn()
        $(".navbg").fadeIn()
        $(".main").fadeOut()
    })

    $(".men").click(function () {
        if ($(".men").attr("id") == "off") {
            $(".men").html('<i class="fas fa-times"></i>')
            $(".menu-mobile").fadeIn()
            $(".men").attr("id", "on")
        }
        else {
            $(".men").html('<i class="fas fa-bars"></i>')
            $(".menu-mobile").fadeOut()
            $(".men").attr("id", "off")
        }
    })
    $(".register-link a#register").click(function () {
        $(".flair, .loginBox, .registerBox").css({ "position": "fixed" })
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
    $(".register-link a#login").click(function () {
        $(".flair, .loginBox, .registerBox").css({ "position": "fixed" })
        $(".registerBox").fadeOut();
        $(".flair").css({
            "transition": "0.7s",
            "width": "550px"
        });
        setTimeout(() => {
            $(".loginBox").fadeIn();
        }, 700)
    })
    $(".close").click(function () {
        $(".flair").fadeOut()
        $(".men").fadeIn()
        $(".flair, .loginBox, .registerBox").css({ "position": "fixed" })
        $(".registerBox, .loginBox, .close").fadeOut()
        $(".flair").css({
            "transition": "0.7s",
            "width": "0px"
        });
        $(".log").fadeIn()
    })
    $(".log").click(function () {
        $(".flair").fadeIn()
        $(".men").fadeOut()
        $(".flair, .loginBox, .registerBox").css({ "position": "fixed" })
        $(".log").fadeOut()
        $(".flair").css({
            "transition": "0.7s",
            "width": "550px"
        });
        $(".loginBox, .close").fadeIn()
    })

})

function checkCredentials() {
    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("pwd").value;

    if (emailInput == "" && passwordInput == "") {
        $(".notification#log_in").fadeOut()
    }
    else if (emailInput == "") {
        showNotification("#log_in", "Por favor introduza um endereço de email")
    }
    else if (emailInput != "" && !emailRegex.test(emailInput)) {
        showNotification("#log_in", "O endereço de email introduzido é inválido")
    }
    else if (passwordInput == "") {
        showNotification("#log_in", "Por favor introduza a palavra-passe")
    }
    else if (emailInput != "" && passwordInput != "") {
        if (emailInput == "tweb@isec.pt" && passwordInput == "tweb") {
            $(".flair, .loginBox, .registerBox").css({ "position": "fixed" })
            $(".loginBox, .registerBox").fadeOut()
            $("#success").fadeIn()
            setTimeout(() => {
                $("#success h").fadeOut()
                $("#success p").fadeIn()
                $("#success p").css({ "letter-spacing": "8px" })
            }, 1000)
            $(".flair").css({
                "transition": "0.7s",
                "width": "calc(100% + 1050px)"
            });
            setTimeout(() => {
                $(".flair").css({
                    "transition": "0.7s",
                    "width": "0px",
                    "opacity": "0.0"
                });
                $("#success").fadeOut()
            }, 2000)
            $(".close").fadeOut()
            $(".lout").fadeIn()
            $(".men").fadeIn()
        } else {
            showNotification("#log_in", "As credenciais introduzidas estão incorretas")
        }
    }

}

function registerUser() {
    var emailInputR = document.getElementById("email_reg").value;
    var passwordInputR = document.getElementById("pwd_reg").value;

    if (emailInputR == "" && passwordInputR == "") {
        $(".notification#sign_up").fadeOut()
    }
    else if (emailInputR == "") {
        showNotification("#sign_up", "Por favor introduza um endereço de email")
    }
    else if (emailInputR != "" && !emailRegex.test(emailInputR)) {
        showNotification("#sign_up", "O endereço de email introduzido é inválido")
    }
    else if (passwordInputR == "") {
        showNotification("#sign_up", "Por favor introduza uma palavra-passe")
    } else {
        $(".loginBox, .registerBox").fadeOut()
        $("#successR").fadeIn()
        setTimeout(() => {
            $("#successR h").fadeOut()
            $("#successR p").fadeIn()
            $("#successR p").css({ "letter-spacing": "8px" })
        }, 1000)
        $(".flair").css({
            "transition": "0.7s",
            "width": "calc(100% + 1050px)"
        });
        setTimeout(() => {
            $(".flair").css({
                "transition": "0.7s",
                "width": "0px",
                "opacity": "0.0"
            });
            $("#successR").fadeOut()
        }, 2000)
        $(".close").fadeOut()
        $(".lout").fadeIn()
    }

}

function showNotification(selector, message) {
    $(selector).fadeIn()
    $(selector).html("<center>" + message + "</center>")
    setTimeout(function () {
        $(selector).fadeOut()
    }, 2500)
}

function closeMobileNav() {
    $(".men").html('<i class="fas fa-bars"></i>')
    $(".menu-mobile").fadeOut()
    $(".men").attr("id", "off")
    return true;
}