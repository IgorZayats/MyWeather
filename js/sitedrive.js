function winter () {
$(document).ready(function(){
        $("body").css('background-image','url(images/winter.jpg)');
    });
}
function autumn () {
$(document).ready(function(){
        $("body").css('background-image','url(images/autumn.jpg)');
    });
}
function spring () {
$(document).ready(function(){
        $("body").css('background-image','url(images/spring.jpg)' );
    });
}

function summer () {
$(document).ready(function(){
        $("body").css('background-image','url(images/summer.jpg)');
    });
}

function sea () {
$(document).ready(function(){
        $("body").css('background-image','url(images/sea.jpg)');
    });
}

function forest () {
$(document).ready(function(){
        $("body").css('background-image','url(images/forest.jpg)');
    });
}

function lake () {
$(document).ready(function(){
        $("body").css('background-image','url(images/lake.jpg)');
    });
}

$( "#menubutton" ).click(function() {
  $( "#list" ).toggle( "fast" );
});

$( "#backgroundbutton" ).click(function() {
  $( "#carousel" ).toggle( "fast" );
});
$( "#radio" ).click(function() {
  $( "#radiotable" ).fadeToggle( "fast" );
});


$( "#sevendays" ).click( function hide16 () {
     $("#weatherTable16 table").remove();
    $( "#blockweather16" ).css('display', 'none');
    
    $( "#blockweather5" ).css('display', 'block');
   
});

$( "#sixteenthdays" ).click( function hide5 () {
     $("#weatherTable5 table").remove();
    $( "#blockweather5" ).css('display', 'none');
    $( "#blockweather16").css('display', 'block');
});

$( "#menubutton" ).click( function showAllweather () {
    $( "#allweather" ).css('display', 'block');
    });