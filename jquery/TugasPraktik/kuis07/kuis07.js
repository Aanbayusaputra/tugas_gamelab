$(document).ready(function() {
    // Form Event
    $("#myForm").submit(function(event) {
        event.preventDefault();
        var name = $("#name").val();
        alert("Hallo: " + name);
    });

    // Mouse Event
    $("#mouseDiv").mouseenter(function() {
        $(this).css("background-color", "lightgreen");
        $(this).text("Hallo");
    });

    $("#mouseDiv").mouseleave(function() {
        $(this).css("background-color", "#007bff");
        $(this).text("Mouse Events");
    });

    // Button Event
    $("#btn-click").click(function() {
        alert("Kamu telah klik Saya!");
    });
    
    // Input Event
    $("#input-text").on("input", function() {
        var text = $(this).val();
        $("#input-message").text("Input Event akan ditampilkan disini: " + text);
    });

  

    // Hover Event pada Form
    $(".form").hover(
        function() {
            $(this).css("background-color", "yellow");
        },
        function() {
            $(this).css("background-color", "white");
        }
    );
});
