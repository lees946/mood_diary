var main = function() {


    var $toggle = 0;
    $(".alarmPage,.diaryPage,.mygroupPage,.graphPage,.registerPage").hide();
    
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
        $("#loginBox,.aboutPage,.diaryPage,.mygroupPage,.graphPage,.registerPage,.alarmPage").hide();
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
        $(".aboutPage,.alarmPage,.mygroupPage,.graphPage").hide();
    });
     // "group" page toggle
    $(".mygroupIcon").click(function(){
        $(".mygroupPage").fadeToggle("slow");
        $(".aboutPage,.alarmPage,.diaryPage,.graphPage").hide();

    });
    // "alarm" page toggle
    $(".alarmIcon").click(function(){
        $(".alarmPage").fadeToggle("slow");
        $(".aboutPage,.mygroupPage,.diaryPage,.graphPage").hide();

    });
     // "graph" page toggle
     $(".graphIcon").click(function(){
        $(".graphPage").fadeToggle("slow");
        $(".aboutPage,.alarmPage,.diaryPage,.mygroupPage").hide();
        $('body').css('backgroundImage', 'url(image/graph_bg1.jpg)');
    });

};
$(document).ready(main);
