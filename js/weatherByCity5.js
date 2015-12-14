var moment = window.moment;
$('#btnGetWeather5').click(function () {
        getWeatherByCity5('ua', $('#inputCityName5').val());
    });
    $('#inputCityName5').keypress(function(e) {
        var ENTER_KEY_CODE = 13;
        if ( e.which === ENTER_KEY_CODE ) 
        {
            $('#btnGetWeather5').trigger('click');
            return false;
        }
    });  
function getWeatherByCity5(lang,city) {
$.getJSON(
        'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&mode=json' +'&APPID=7fc874cf9bdf419b09e618fc662fcc47&cnt=40&units=metric&lang=' + lang + '&callback=?',
        function (data) {
            $("#weatherTable5 li").remove();
           
                        $.each(data.list, function(){ 
                        var time = new Date(this.dt*1000 );
                      addWeather(moment(time).locale('uk').format('LLL'),  this.weather[0].icon,  this.weather[0].description, 
                       Math.round(this.main.temp),
                     
                      Math.round(this.main.pressure*0.75006375541921),
                      this.main.humidity);
                      
                          });
                               
        });
}


                      
                  
                  
                  
function getIconClass(icon) {
       if (icon === "10d") {
       return 'lightrain10d';
	  
           
} else if (icon === "04n" || icon === "04d") {
     return  'brokenclouds04n04d';
	 
} else if (icon === "01d" || icon === "01n") {
    return   'skyisclear01d';
	
} else if (icon === "02d" ) {
    return   'fewclouds02d';
	 
} else if (icon === "13n" || icon === "13d") {
     return  'snow13d';
	   
} else if (icon === "03d" ||icon === "03n") {
     return 'scatteredclouds03d';
	  
} else if (icon === "02n") {
      return 'fewclouds02n';
	 
} else if (icon === "10n" || icon === "10d") {
     return  'lightrain10n';
	 
} else if (icon === "11n" ||icon === "11d") {
     return  'thunderstorm11n11d';
	  
} else if (icon === "09n" || icon === "09d") {
     return  'heavyrain09d09n';
	   
} else if (icon === "50d" || icon === "50n") {
     return  'fog50n50d';
	   
} else {
       console.log (icon);
   }
}
 

 




function addWeather(date, icon, description, temp, pressure, humidity) {
  
  var className = getIconClass(icon);
 
     var weather =
         '<li >' + '<span class="date">' + date + '</span>'+
        '<p class="icon '+ className + '" >' + '</p>' +
         '<p>' + description + ', ' + temp + ' <span class="temp">С&deg;<span></p>' +
         '<p>Тиск ' + pressure + ' <span class="preasure">мм рт.ст.</span></p>' +
         '<p>Вологість повітря ' + humidity + ' <span class="percent">%</span></p></li>';
     $("#weatherTable5").append(weather);
}

var slideCount = $('#weather5 ul li').length;
	var slideWidth = $('#weather5 ul li').width();
	var slideHeight = $('#weather5 ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#weather5').css({ width: slideWidth, height: slideHeight });
	
	$('#weather5 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#weather5 ul li:last-child').prependTo('#weather5 ul');

    function moveLeft() {
        $('#weather5 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#weather5 ul li:last-child').prependTo('#weather5 ul');
            $('#weather5 ul').css('left', '');
        });
    }

    function moveRight() {
        $('#weather5 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#weather5 ul li:first-child').appendTo('#weather5 ul');
            $('#weather5 ul').css('left', '');
        });
    }

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

  