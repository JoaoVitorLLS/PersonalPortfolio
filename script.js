$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navigationBar").addClass("sticky");
        } else {
            $(".navigationBar").removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $(".backToTopButton").addClass("show");
        } else {
            $(".backToTopButton").removeClass("show");
        }
    });

    // Navigation bar script:
    $(".backToTopButton").click(function () {
        $("html").animate({scrollTop: 0});
        $("html").css("scrollBehavior", "auto");
    });

    $(".navigationBar .menu li a").click(function () {
        $("html").css("scrollBehavior", "smooth");
    });

    $(".menuButton").click(function () {
        $(".navigationBar .menu").toggleClass("active");
        $(".menuButton i").toggleClass("active");
    });

    // Typing animation script:
    const firstTyped = new Typed(".firstTypingEffect", {
        strings: ["Computer Science student", "developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const secondTyped = new Typed(".secondTypingEffect", {
        strings: ["Computer Science student", "developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const thirdTyped = new Typed(".thirdTypingEffect", {
        strings: ["if(isWebsiteGood()) { celebrate(); }", "while(!isCoffeeMugEmpty()) { keepCoding(); }"],
        typeSpeed: 80,
        backSpeed: 90,
        loop: true
    });

    // Owl carousel script:
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});