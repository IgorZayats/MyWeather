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
             var text;
                    $('#raw_json pre').text(JSON.stringify(data));
                     $("#weatherTable16 tr:not(:first)").remove();
                    
                   
                     
                        $.each(data.list, function(){ 
                      addWeather16(this.dt,  this.weather[0].icon,  this.weather[0].description, 
                       Math.round(this.temp.morn),
                      Math.round(this.temp.day),
                      Math.round(this.temp.eve),
                      Math.round(this.temp.night),
                      Math.round(this.pressure*0.75006375541921));
    
                          });
                          
                                       
        });
}
                      
                     
                    function addWeather16(date, icon, description, tempmorning, tempday, tempevening, tempnight, pressure){
        var weather = '<tr>'+
                '<td>' + date + '</td>' +
                '<td>' +  icon + '</td>' +
                '<td>' + description + '</td>' +
                '<td>' + tempmorning + '</td>' +
                '<td>' + tempday + '</td>' +
                '<td>' + tempevening + '</td>' +
                '<td>' + tempnight + '</td>' +
                '<td>' + pressure + '</td>' +
                '</tr>';
        document.getElementById('weatherTable16').insertRow(-1).innerHTML = weather; 
    }
                      
                          
  
            