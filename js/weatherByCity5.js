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
             var text;
                    $('#raw_json pre').text(JSON.stringify(data));
 $("#weatherTable5 tr:not(:first)").remove();
                    
                   
                     
                        $.each(data.list, function(){ 
                      addWeather5(this.dt,  this.weather[0].icon,  this.weather[0].description, 
                       Math.round(this.main.temp),
                     
                      Math.round(this.main.pressure*0.75006375541921),
                      this.main.humidity);
    
                          });
                          
                                       
        });
}
                      
                     
                    function addWeather5(date, icon, description, temp, pressure, humidity){
        var weather = '<tr>'+
                '<td>' + date + '</td>' +
                '<td>' +  icon + '</td>' +
                '<td>' + description + '</td>' +
                '<td>' + temp + '</td>' +
                '<td>' + pressure + '</td>' +
                '<td>' + humidity + '</td>' +
                '</tr>';
        document.getElementById('weatherTable5').insertRow(-1).innerHTML = weather; 
    }
                      
                          
  
            