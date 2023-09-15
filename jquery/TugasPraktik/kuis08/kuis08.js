$(document).ready(function(){
    // Hide effect
    $("#hideBtn").click(function(){
        $(".box").hide(1000);
    });

    // Show effect
    $("#showBtn").click(function(){
        $(".box").show(1000);
    });

    // Fade In effect
    $("#fadeInBtn").click(function(){
        $(".box").fadeIn(1000);
    });

    // Fade Out effect
    $("#fadeOutBtn").click(function(){
        $(".box").fadeOut(1000);
    });

    // Slide Up effect
    $("#slideUpBtn").click(function(){
        $(".box").slideUp(1000);
    });

    // Slide Down effect
    $("#slideDownBtn").click(function(){
        $(".box").slideDown(1000);
    });

    // Toggle effect
    $("#toggleBtn").click(function(){
        $(".box").toggle(1000);
    });

    // Animate effect
    $("#animateBtn").click(function(){
        $(".box").animate({left: '200px', opacity: '0.5', height: '+=150', width: '+=150'}, 1000);
    });
});
