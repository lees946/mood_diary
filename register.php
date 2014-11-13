<?php
$servername = 'localhost';
$username = 'root';
$password = 'root';
$dbname = 'form_register';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$value1 = $_POST['id'];
$value2 = $_POST['password'];
$value3 = $_POST['first_name'];
$value4 = $_POST['last_name'];
$value5 = $_POST['email'];


$sql = "INSERT INTO demo (id, password, first_name, last_name, email)
VALUES ('$value1', '$value2', '$value3', '$value4', '$value5')";

if ($conn->query($sql) === TRUE) {
    Header ("Location:index.html");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
