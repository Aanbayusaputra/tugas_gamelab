$('button').click(function () {
    var countryName = $('input').val().toLowerCase();
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
        var data = res.response[0].cases;
        
        // Mengupdate informasi yang ditampilkan pada DOM
        $('.active-case').text(data.active);
        $('.critical-case').text(data.critical);
        $('.new-case').text(data.new);
        $('.recovered').text(data.recovered);
  
        // Menuliskan nama negara dengan huruf kapital
        var newCountryName = countryName.charAt(0).toUpperCase() + countryName.slice(1);
        $('.nama-negara').text(newCountryName);
  
        $('.card-statistik').show();
      }
    });
  });
