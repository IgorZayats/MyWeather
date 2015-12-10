getWeatherData(); 
function getWeatherData() {
	 navigator.geolocation.getCurrentPosition(locSuccess,locError);

    function locSuccess(position) {
            $.getJSON(
                'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' +
                position.coords.longitude + '&units=metric&APPID=7fc874cf9bdf419b09e618fc662fcc47' + '&lang=uk'  + '&callback=?',
                function (response) { 
if (response.weather[0].icon === "10d") {
       $('#weathericon').addClass('lightrain10d');
	   $(document).ready(function(){
       $("#weather").load("load/rain.txt");
	   $("#music").append("<source src=\'sound/rain\.mp3\'type=\'audio/mp3\'></source>");
    });
} else if (response.weather[0].icon === "04n" || response.weather[0].icon === "04d") {
       $('#weathericon').addClass('brokenclouds04n04d');
	   $(document).ready(function(){
       $("#weather").load("load/rain.txt");
	   $("#music").append("<source src=\'sound/wind\.mp3\'type=\'audio/mp3\'></source>");
    });
} else if (response.weather[0].icon === "01d" || response.weather[0].icon === "01n") {
       $('#weathericon').addClass('skyisclear01d');
	   $(document).ready(function(){
       $("#weather").load("load/sun.txt");
	   $("#music").append("<source src=\'sound/sun\.mp3\'type=\'audio/mp3\'></source>");
    });
} else if (response.weather[0].icon === "02d" ) {
       $('#weathericon').addClass('fewclouds02d');
	   $(document).ready(function(){
       $("#weather").load("load/clouds.txt");
	   $("#music").append("<source src=\'sound/wind\.mp3\'type=\'audio/mp3\'></source>");
	 });
} else if (response.weather[0].icon === "13n" || response.weather[0].icon === "13d") {
       $('#weathericon').addClass('snow13d');
	   $(document).ready(function(){
        $("#weather").load("load/snow.txt");
		$("#music").append("<source src=\'sound/snow\.mp3\'type=\'audio/mp3\'></source>");
    });
} else if (response.weather[0].icon === "03d" || response.weather[0].icon === "03n") {
       $('#weathericon').addClass('scatteredclouds03d');
	   $(document).ready(function(){
       $("#weather").load("load/clouds.txt");
	   $("#music").append("<source src=\'sound/wind\.mp3\'type=\'audio/mp3\'></source>");
	 });
} else if (response.weather[0].icon === "02n") {
       $('#weathericon').addClass('fewclouds02n');
	   $(document).ready(function(){
       $("#weather").load("load/clouds.txt");
	   $("#music").append("<source src=\'sound/wind\.mp3\'type=\'audio/mp3\'></source>");
	 });
} else if (response.weather[0].icon === "10n" || response.weather[0].icon === "10d") {
       $('#weathericon').addClass('lightrain10n');
	   $(document).ready(function(){
       $("#weather").load("load/rain.txt");
	   $("#music").append("<source src=\'sound/rain\.mp3\'type=\'audio/mp3\'></source>");
	   });
} else if (response.weather[0].icon === "11n" || response.weather[0].icon === "11d") {
       $('#weathericon').addClass('thunderstorm11n11d');
	   $(document).ready(function(){
       $("#weather").load("load/rain.txt");
	   $("#music").append("<source src=\'sound/thunder\.mp3\'type=\'audio/mp3\'></source>");
	   });
} else if (response.weather[0].icon === "09n" || response.weather[0].icon === "09d") {
       $('#weathericon').addClass('heavyrain09d09n');
	   $(document).ready(function(){
       $("#weather").load("load/rain.txt");
	   $("#music").append("<source src=\'sound/rain\.mp3\'type=\'audio/mp3\'></source>");
	   });
} else if (response.weather[0].icon === "50d" || response.weather[0].icon === "50n") {
       $('#weathericon').addClass('fog50n50d');
	   $(document).ready(function(){
       $("#weather").load("load/fog.txt");
	   $("#music").append("<source src=\'sound/fog\.mp3\'type=\'audio/mp3\'></source>");
	   });
} else {
       alert ('wrong');
   }
   

        var times = SunCalc.getTimes(new Date(), position.coords.latitude, position.coords.longitude);
        $("#sunrise").html(times.sunrise.getHours() + ':' + times.sunrise.getMinutes());
        $("#sunset").html(times.sunset.getHours() + ':' + times.sunset.getMinutes());
   
   
	  var temp = Math.round(response.main.temp);
      var clouds = response.weather[0].description;
      var humidity = response.main.humidity;
     
      var preasure= Math.round(response.main.pressure*0.75006375541921);
	  var city = response.name + "," + response.sys.country ;
     
    
      var date = moment().locale('uk').format('LLL');   
     

	 $('#temp').append(temp); 
	 $('#humidity').append(humidity); 
	 $('#clouds').append(clouds);
	 $('#date').append(date);
	 $('#preasure').append(preasure); 
	 $('#city').append(city);  
});
                 
                    }
            }


    function locError(error) {
        var message = 'Location error. ';
        switch(error.code) {
            case error.TIMEOUT:
                message += 'A timeout occured! Please try again!';
                break;
            case error.POSITION_UNAVAILABLE:
                message += 'We can\'t detect your location. Sorry!';
                break;
            case error.PERMISSION_DENIED:
                message += 'Please allow geolocation access for this to work.';
                break;
            case error.UNKNOWN_ERROR:
                message += 'An unknown error occured!';
                break;
        }
    }

