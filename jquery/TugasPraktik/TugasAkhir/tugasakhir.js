function formatNumber(number) {
    if (isNaN(number) || number == null) {
        return 0;
    } else {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
}

$(document).ready(function () {
    $('#cekStatistikButton').click(function () {
        if ($('#name').val().length == 0) {
            return swal('', 'Mohon masukan nama negara terlebih dahulu', 'warning');
        }
        var countryName = $('#name').val().toLowerCase();
        swal({
            title: "",
            text: "Mencari data .",
            icon: "https://media.tenor.com/7Nh1E8OC8KkAAAAC/love-meter-love-you.gif",
            button: false
        });
        $.ajax({
            url: "https://covid-193.p.rapidapi.com/statistics",
            method: "GET",
            data: {
                country: countryName
            },
            headers: {
                "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
                "X-RapidAPI-Key": "8534b7f6eemshb1acd285e30f4e5p169c07jsn06fa8bd93f05"
            },
            success: function (res) {
                if (res && res.response && res.response.length > 0) {
                    var data = res.response[0].cases;

                    // Mengupdate informasi yang ditampilkan pada DOM
                    $('.active-case').text(formatNumber(data.active));
                    $('.critical-case').text(formatNumber(data.critical));
                    $('.new-case').text(formatNumber(data.new));
                    $('.recovered').text(formatNumber(data.recovered));
                    swal.close();

                    // Menuliskan nama negara dengan huruf kapital
                    var newCountryName = countryName.charAt(0).toUpperCase() + countryName.slice(1);
                    $('.nama-negara').text(newCountryName);

                    $('.card-statistik').show();
                    $('#tampilkanButton').show();
                    $('#sembunyikanButton').hide();
                } else {
                    swal('', 'Data negara tidak ditemukan', 'error');
                }
            },
            error: function (error) {
                swal('', 'Terjadi kesalahan dalam memuat data. Pastikan koneksi internet Anda berfungsi dengan baik dan URL endpoint masih berfungsi.', 'error');
            }
        });
    });

   
    $('#tampilkanButton').click(function () {
        $('.card-statistik').show();
        $('#tampilkanButton').hide();
        $('#sembunyikanButton').show();
    });

  
    $('#sembunyikanButton').click(function () {
        $('.card-statistik').hide();
        $('#tampilkanButton').show();
        $('#sembunyikanButton').hide();
    });
});
