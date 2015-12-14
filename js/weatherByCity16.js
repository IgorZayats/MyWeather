var moment = window.moment;
$('#btnGetWeather16').click(function () {
        getWeatherByCity16('ua', $('#inputCityName16').val());
    });
    $('#inputCityName16').keypress(function(e) {
        var ENTER_KEY_CODE = 13;
        if ( e.which === ENTER_KEY_CODE ) 
        {
            $('#btnGetWeather16').trigger('click');
            return false;
        }
    });  
function getWeatherByCity16(lang,city) {
$.getJSON(
        'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city +'&APPID=7fc874cf9bdf419b09e618fc662fcc47&cnt=16&units=metric&lang=' + lang + '&callback=?',
        function (data) {
                     $("#weatherTable16 li").remove();
                    
                   
                     
                        $.each(data.list, function(){ 
                        var time = new Date(this.dt*1000 );
                      addWeather16(moment(time).locale('uk').format('LL'),  this.weather[0].icon,  this.weather[0].description, 
                       Math.round(this.temp.morn),
                      Math.round(this.temp.day),
                      Math.round(this.temp.eve),
                      Math.round(this.temp.night),
                      Math.round(this.pressure*0.75006375541921));
    
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

                      
                     
                    function addWeather16(date, icon, description, tempmorning, tempday, tempevening, tempnight, pressure){
       
       var className = getIconClass(icon);
        var weather = 
                '<li>' + '<span class="date">' + date + '</span>'  +
                '<p class="icon16 '+ className + '">' + '</p>' +
                '<p>' + description + '</p>' +
                '<p>Ранок ' + tempmorning + ' <span class="temp">С&deg;<span></p>' +
                '<p>День ' + tempday + ' <span class="temp">С&deg;<span></p>' +
                '<p>Вечір ' + tempevening + ' <span class="temp">С&deg;<span></p>' +
                '<p>Ніч ' + tempnight + ' <span class="temp">С&deg;<span></p>' +
                '<p>Тиск ' + pressure + ' <span class="preasure">мм рт.ст.</span></p></li>' ;
           $("#weatherTable16").append(weather); 
    }
                      
 var slideCount16 = $('#weather16 ul li').length;
	var slideWidth16 = $('#weather16 ul li').width();
	var slideHeight16 = $('#weather16 ul li').height();
	var sliderUlWidth16 = slideCount16 * slideWidth16;
	
	$('#weather16').css({ width: slideWidth16, height: slideHeight16 });
	
	$('#weather16 ul').css({ width: sliderUlWidth16, marginLeft: - slideWidth16 });
	
    $('#weather16 ul li:last-child').prependTo('#weather16 ul');

    function moveLeft16() {
        $('#weather16 ul').animate({
            left: + slideWidth16*3
        }, 200, function () {
            $('#weather16 ul li:last-child').prependTo('#weather16 ul');
            $('#weather16 ul').css('left', '');
        });
    }

    function moveRight16() {
        $('#weather16 ul').animate({
            left: - slideWidth16*3
        }, 200, function () {
            $('#weather16 ul li:first-child').appendTo('#weather16 ul');
            $('#weather16 ul').css('left', '');
        });
    }

    $('a.control_prev').click(function () {
        moveLeft16();
    });

    $('a.control_next').click(function () {
        moveRight16();
    });
  
            