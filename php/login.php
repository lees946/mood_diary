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
$value2 = $_POST['password'];


$sql = "INSERT INTO login (username, password)
VALUES ('$value1', '$value2')";

if ($conn->query($sql) === TRUE) {
    
    Header ("Location:index.html");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>