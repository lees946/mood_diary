<?php
$servername = "morodesignnet.ipagemysql.com";
$username = "monofx321";
$password = "jinolee";
$dbname = "form";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$value1 = $_POST['username'];
$value2 = $_POST['mood'];
$value3 = $_POST['location'];
$value4 = $_POST['comment'];


// sql to create table
$sql = "INSERT INTO login (username, mood, location, comment)
VALUES ('$value1', '$value2', '$value3', '$value4')";

if ($conn->query($sql) === TRUE) {
    Header ("Location:query.php");
    

} else {
    echo "Error creating table: " . $conn->error;

}



$conn->close();
?>

