<?php
    $username = "monofx321"; 
    $password = "jinolee";   
    $host = "morodesignnet.ipagemysql.com";
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
        json_encode($data); 
    }
    
        

    Header ("Location:../index.html");
    

    mysql_close($server);
?>