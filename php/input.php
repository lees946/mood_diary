<?php
$servername = 'localhost';
$username = 'root';
$password = 'root';
$dbname = 'form_login';

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



$sql = "INSERT INTO login (username, mood, location, comment)
VALUES ('$value1', '$value2', '$value3', '$value4')";

if ($conn->query($sql) === TRUE) {
    
    Header ("Location:../index.html");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>