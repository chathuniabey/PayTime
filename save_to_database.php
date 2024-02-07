<?php
$servername = "localhost"; // Replace with your server name
$username = "root";
$password = "uthpala";
$dbname = "signin_paytime";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST['fname'];
    $businessName = $_POST['bname'];
    $email = $_POST['email'];
    $phoneNumber = $_POST['pnumber'];
    $address = $_POST['address'];
    $district = $_POST['district'];
    $country = $_POST['country'];
    $username = $_POST['uname'];
    $password = $_POST['password'];
    $registrationDate = date("Y-m-d");

    $sql = "INSERT INTO sign_in (fName, bName, mail, pNum, add, dis, coun, uName, pass, reg) 
            VALUES ('$fullName', '$businessName', '$email', '$phoneNumber', '$address', '$district', '$country', '$username', '$password', '$registrationDate')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
