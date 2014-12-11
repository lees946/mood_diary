var main = function() {

     /* 
     //get json data from query.php
     $.getJSON('query.php', function(data) {
      $.each(data, function(key,val) {
        $("#" + fieldName).val(fieldValue);
      });
    });
   */
   

    var $toggle = 0;
    $(".alarmPage,.diaryPage,.contactPage,.graphPage,.registerPage").hide();
    
    // menu toggle animation
    $(".loginInsert,.menuIcon,.loginRegister").click(function(){
        if($toggle == 0){
          $('.menu').animate({
              top: '15px'
            }, 200);
          $("#loginBox").hide();
          $(".aboutPage").hide();
          $toggle = 1;
        }
        else if($toggle == 1){
          $('.menu').animate({
              top: '-150px'
            }, 200 );
          $("#loginBox").show();
          $(".aboutPage").show();
          $toggle = 0;
        }
        $(".diaryPage,.contactPage,.graphPage,.registerPage,.alarmPage").hide();
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

        
    });

};
$(document).ready(main);

var taskArray = [];
var moodArray = [];
var locationArray = [];
var d = new Date();
var fullyear = d.getFullYear();
var month = d.getMonth();
var date = d.getDate();
var f = fullyear.toString();
var m = month.toString();
var dt = date.toString();

var saveTask = function(){

    var taskInput = document.getElementById('loginId');
    var newTask = taskInput.value;
    taskArray.push(newTask);
    taskInput.value = "";

    var moodInput = document.getElementById('myMood');
    var newmood = moodInput.value;
    moodArray.push(newmood);
    taskInput.value = "";

    var locationInput = document.getElementById('diaryLocation');
    var newlocation = locationInput.value;
    locationArray.push(newlocation);
    taskInput.value = "";

  updateTasks();

};

var updateTasks = function(){
  
  var taskListHolding = document.getElementById('diaryList');
  taskListHolding.innerHTML = "";   
  var len = taskArray.length;
  
  for(i = 0; i < len; i++){
  
    var newTask = document.createElement("div");
    newTask.id = i;
    newTask.className = "task";
    var task = document.createElement("p");
    task.innerText = f+' '+m+" "+dt+" "+ taskArray[i]+" "+moodArray[i]+" "+locationArray[i];
    newTask.appendChild(task);
    taskListHolding.appendChild(newTask);
    
  };
  
};


var init = function(){

  var addButton = document.getElementById('diaryInsert');
  addButton.addEventListener('click', function(e){ 
    e.preventDefault(); 
    saveTask();
  });
    
};

window.onload = init();