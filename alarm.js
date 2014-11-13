      function EvalSound(soundobj) {
          var thissound=document.getElementById(soundobj);
          thissound.Play();
      }
            
      function handleInsertClick(event){
        var timeset = document.getElementById('timeset');
        timeset2 = timeset.value;
        timerset();
      }
      //clock
      var myVar = setInterval(function () {myTimer()}, 1);
      function myTimer() {
          var d = new Date();
          document.getElementById("clock").innerHTML = d.toLocaleTimeString();
      }

      //timer
      var initDate = new Date(); 
      var interval;

      function keepAlive() { 
          EvalSound('sound1')
          alert('How do you feel now?')
          
      }

      window.onload = function() {
          var insertButton = document.getElementById('insert-button');
        insertButton.onclick = handleInsertClick;
      };

       function timerset(){
         interval = window.setInterval(function() {
                var now = new Date();
                if(now.getTime() - initDate.getTime() < 8*60*60*1000 && now.getDate() == initDate.getDate()) {
                     keepAlive();
                }
                else {
                 
                    window.clearInterval(interval);
                }
            }, timeset2*1000);
        };
