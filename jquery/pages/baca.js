$(document).ready(function () {
    // URL API Al-Quran (gantilah dengan URL API yang sesuai)
    var apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

    // Mengambil data dari API menggunakan Ajax
    $.ajax({
        url: apiUrl,
        type: "GET",
        dataType: "json",
        success: function (data) {
            // Data berhasil diambil dari API
            var quranContent = $("#quran-content");

            // Menampilkan data Al-Quran di halaman web
            quranContent.html(data.text); // Ganti dengan properti yang sesuai dari data API
        },
        error: function (error) {
            // Menangani kesalahan jika terjadi
            console.log("Terjadi kesalahan: " + error);
        }
    });
});
