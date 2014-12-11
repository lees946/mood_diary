<?php
    $username = "morodesignnet.ipagemysql.com"; 
    $password = "monofx321";   
    $host = "jinolee";
    $database="form";
    
    $server = mysql_connect($host, $username, $password);
    $connection = mysql_select_db($database, $server);

    $myquery = "
                SELECT * FROM `login`
               ";

    $query = mysql_query($myquery);
    
    if ( ! $query ) {
        echo mysql_error();
        die;
    }
    
    $data = array();
    
    for ($x = 0; $x < mysql_num_rows($query); $x++) {
        $data[] = mysql_fetch_assoc($query);
     

    }
    

   $datajson = json_encode($data,JSON_FORCE_OBJECT);
   //echo $datajson;

?>
<script>
 function drawSomeText(id) {
         var pjs = Processing.getInstanceById(id);
         var t = "hello world";
          }

var data= '<?php echo $datajson; ?>';
var dataobj = JSON.parse(data);


/*
var _str ='';
for(var i=0; i<dataobj.length; i++){
    _str +='<li>'+dataobj[i]+'</li>';
}
_str = '<ul>'+_str+'</ul>';
document.querySelector('#diaryPage').innerHTML = _str;
*/


//redirect
window.location="../index.html";

</script>


