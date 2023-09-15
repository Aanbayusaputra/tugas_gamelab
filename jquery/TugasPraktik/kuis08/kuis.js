$(document).ready(function(){
    // Hide efek
    $("#hideBtn").click(function(){
        $(".box").hide(1000);
    });

    // Show efek
    $("#showBtn").click(function(){
        $(".box").show(1000);
    });

    // Fade In efek
    $("#fadeInBtn").click(function(){
        $(".box").fadeIn(1000);
    });

    // Fade Out efek
    $("#fadeOutBtn").click(function(){
        $(".box").fadeOut(1000);
    });

    // Slide Up efek
    $("#slideUpBtn").click(function(){
        $(".box").slideUp(1000);
    });

    // Slide Down efek
    $("#slideDownBtn").click(function(){
        $(".box").slideDown(1000);
    });

    // Toggle efek
    $("#toggleBtn").click(function(){
        $(".box").toggle(1000);
    });

    // Animasi efek
    $("#animateBtn").click(function(){
        $(".box").animate({left: '200px', opacity: '0.5', height: '+=150', width: '+=150'}, 1000);
    });
});
