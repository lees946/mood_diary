<?php
$servername = 'localhost';
$username = 'root';
$password = 'root';
$dbname = 'form_diary';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$value1 = $_POST['mood'];
$value2 = $_POST['location'];
$value3 = $_POST['comment'];



$sql = "INSERT INTO diary (mood, location, comment)
VALUES ('$value1', '$value2', '$value3')";

if ($conn->query($sql) === TRUE) {
    Header ("Location:index.html");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>