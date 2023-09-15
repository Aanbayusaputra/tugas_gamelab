// Mengambil elemen-elemen yang diperlukan setelah halaman dimuat sepenuhnya (DOMContentLoaded)
document.addEventListener("DOMContentLoaded", function () {
    const starForm = document.getElementById("starForm");
    const numStarsInput = document.getElementById("numStars");
    const outputElement = document.getElementById("output");

    // Menangani submit form
    starForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const numStars = parseInt(numStarsInput.value);

        if (!isNaN(numStars)) {
            const starPattern = createStarPattern(numStars);
            outputElement.textContent = starPattern;
            console.log(starPattern);
        }
    });

    // Fungsi untuk membuat pola bintang
    function createStarPattern(numStars) {
        var pattern = "";

        // Pola pertama 
        pattern += "*";
        pattern += "\n"; 

        // Pola kedua 
        for (var x = 2; x <= numStars; x++) {
            // Menambahkan spasi
            for (var space = 1; space <= numStars - x; space++) {
                pattern += " "; 
            }
            for (var y = 1; y <= x; y++) {
                pattern += "*"; 
            }
            pattern += "\n";
        }

        return pattern;
    }

});
