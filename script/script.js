var main = function() {

     //get json data from query.php
     $.getJSON('query.php', function(data) {
      $.each(data, function(key,val) {
        $("#" + fieldName).val(fieldValue);
      });
    });
    

    var $toggle = 0;
    $(".alarmPage,.diaryPage,.contactPage,.graphPage,.registerPage").hide();
    
    // menu toggle animation
    $(".loginInsert,.menuIcon,.loginRegister").click(function(){
        if($toggle == 0){
          $('.menu').animate({
              top: '15px'
            }, 200);
          
          $toggle = 1;
        }
        else if($toggle == 1){
          $('.menu').animate({
              top: '-150px'
            }, 200 );
        
          $toggle = 0;
        }
        $("#loginBox,.aboutPage,.diaryPage,.contactPage,.graphPage,.registerPage,.alarmPage").hide();
         $('body').css('background-Image', 'url(image/graph_bg2.jpg)');
       
    });
    // "register" page load
    $(".loginRegister").click(function(){
        $(".registerPage").show();
        $("#loginBox").hide();
        $(".aboutPage").hide();
    });

   
     // "diary" page toggle
    $(".diaryIcon").click(function(){
        $(".diaryPage").fadeToggle("slow");
        $(".aboutPage,.alarmPage,.contactPage,.graphPage").hide();
    });
     // "group" page toggle
    $(".contactIcon").click(function(){
        $(".contactPage").fadeToggle("slow");
        $(".aboutPage,.alarmPage,.diaryPage,.graphPage").hide();

    });
    // "alarm" page toggle
    $(".alarmIcon").click(function(){
        $(".alarmPage").fadeToggle("slow");
        $(".aboutPage,.contactPage,.diaryPage,.graphPage").hide();

    });
     // "graph" page toggle
     $(".graphIcon").click(function(){
        $(".graphPage").fadeToggle("slow");
        $(".aboutPage,.alarmPage,.diaryPage,.contactPage").hide();
        $('body').css('backgroundImage', 'url(image/graph_bg1.jpg)');
    });



};
$(document).ready(main);