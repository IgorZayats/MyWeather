
$('#btnGetWeather5').click(function() {
    getWeatherByCity5('ua', $('#inputCityName5').val());
});
$('#inputCityName5').keypress(function(e) {
    var ENTER_KEY_CODE = 13;
    if (e.which === ENTER_KEY_CODE) {
        $('#btnGetWeather5').trigger('click');
        return false;
    }
});

function getWeatherByCity5(lang, city) {
    $.getJSON(
        'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&mode=json' + '&APPID=7fc874cf9bdf419b09e618fc662fcc47&cnt=40&units=metric&lang=' + lang + '&callback=?',
        function(data) {

            $.each(data.list, function() {
                addWeather(this.dt, this.weather[0].icon, this.weather[0].description,
                    Math.round(this.main.temp),

                    Math.round(this.main.pressure * 0.75006375541921),
                    this.main.humidity);

            });

        });
}









function addWeather(date, icon, description, temp, pressure, humidity) {

    if (icon === "10d") {
        $('.icon').addClass('lightrain10d');


    }
    else if (icon === "04n" || icon === "04d") {
        $('.icon').addClass('brokenclouds04n04d');

    }
    else if (icon === "01d" || icon === "01n") {
        $('.icon').addClass('skyisclear01d');

    }
    else if (icon === "02d") {
        $('.icon').addClass('fewclouds02d');

    }
    else if (icon === "13n" || icon === "13d") {
        $('.icon').addClass('snow13d');

    }
    else if (icon === "03d" || icon === "03n") {
        $('.icon').addClass('scatteredclouds03d');

    }
    else if (icon === "02n") {
        $('.icon').addClass('fewclouds02n');

    }
    else if (icon === "10n" || icon === "10d") {
        $('.icon').addClass('lightrain10n');

    }
    else if (icon === "11n" || icon === "11d") {
        $('.icon').addClass('thunderstorm11n11d');

    }
    else if (icon === "09n" || icon === "09d") {
        $('.icon').addClass('heavyrain09d09n');

    }
    else if (icon === "50d" || icon === "50n") {
        $('.icon').addClass('fog50n50d');

    }
    else {
        alert(icon);
    }


    var weather =
        '<li>' + date +
        '<div class="icon">' + icon + '</div>' +
        '<p>Погода</p>' + description + '</p>' +
        '<p>Температура</p>' + temp +
        '<p>Тиск</p>' + pressure +
        '<p>Вологість повітря</p>' + humidity + '</li>';
    $("#weatherTable5").append(weather);
}