$.getJSON('http://api.dirble.com/v2/countries/UA/stations?token=1a5bbb2b353d24cee111924ea0',
                function (response) { 
                  $( "#roks" ).on( "click", function roks ()  {
                       var stream=response[15].streams[0].stream;
                     $("#player1").toggle('fast');
                      $("#player1").css('display','block');
                     $("#player1").append("<source src=" + stream + "></source>");
                      } ); 
                      
                      $( "#djfm" ).on( "click", function djfm ()  {
                       var stream=response[3].streams[0].stream;
                     $("#player2").toggle('fast');
                      $("#player2").css('display','block');
                     $("#player2").append("<source src=" + stream + "/;"+"></source>");
                      } ); 
       
                     $( "#renesans" ).on( "click", function djfm ()  {
                       var stream=response[4].streams[0].stream;
                     $("#player3").toggle('fast');
                      $("#player3").css('display','block');
                     $("#player3").append("<source src=" + stream + "/;"+"></source>");
                      } ); 
                      
                      $( "#sharmanka" ).on( "click", function djfm ()  {
                       var stream=response[5].streams[0].stream;
                     $("#player4").toggle('fast');
                      $("#player4").css('display','block');
                     $("#player4").append("<source src=" + stream + "/;" + "></source>");
                      } ); 
                      
                      $( "#transcentury" ).on( "click", function djfm ()  {
                       var stream=response[11].streams[0].stream;
                     $("#player5").toggle('fast');
                      $("#player5").css('display','block');
                     $("#player5").append("<source src=" + stream + "></source>");
                      } ); 
                      
                      $( "#comafm" ).on( "click", function djfm ()  {
                       var stream=response[12].streams[0].stream;
                     $("#player6").toggle('fast');
                      $("#player6").css('display','block');
                     $("#player6").append("<source src=" + stream + "></source>");
                      } ); 
                      
                      $( "#prostoradio" ).on( "click", function djfm ()  {
                       var stream=response[14].streams[0].stream;
                     $("#player7").toggle('fast');
                      $("#player7").css('display','block');
                     $("#player7").append("<source src=" + stream + "></source>");
                      } ); 
                      
                      $( "#mfm" ).on( "click", function djfm ()  {
                       var stream=response[16].streams[0].stream;
                     $("#player8").toggle('fast');
                      $("#player8").css('display','block');
                     $("#player8").append("<source src=" + stream + "></source>");
                      } ); 
                      
                       $( "#kissfm" ).on( "click", function djfm ()  {
                       var stream=response[17].streams[0].stream;
                     $("#player9").toggle('fast');
                      $("#player9").css('display','block');
                     $("#player9").append("<source src=" + stream + "></source>");
                      } ); 
	 });