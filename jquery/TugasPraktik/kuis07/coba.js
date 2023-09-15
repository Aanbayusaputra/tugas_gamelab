$(document).ready(function () {
    // 1. Event Click
    $("#btn1").click(function () {
        alert("Tombol sudah diklik!");
    });

    // 2. Event Mouseover dan Mouseout
    $("#div1").mouseover(function () {
        $(this).text("Mouse di atas saya");
    }).mouseout(function () {
        $(this).text("Mouse keluar dari saya");
    });

    // 3. Event Keyup
    $("#input1").keyup(function () {
        var text = $(this).val();
        $("#div1").text("Anda mengetik: " + text);
    });

    // 4. Event Double Click
    $("li").dblclick(function () {
        $(this).css("color", "red");
    });

    // 5. Event Click dengan Animasi
    $("#paragraf1").click(function () {
        $(this).animate({
            fontSize: "24px",
            paddingLeft: "20px"
        }, 1000);
    });
});
