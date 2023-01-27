<?php
session_start();
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
?>

<?php
include('conDB.php');
include('check.php');


$user_data = check_login($connect_db);
$id = $_SESSION['id'];


 
 $select = "SELECT * FROM userdetails LEFT JOIN company ON userdetails.userID = company.userID LEFT JOIN address ON company.userID = address.userID  WHERE userdetails.userID = '$id'";


 
$exec = mysqli_query($connect_db,$select);
$row =mysqli_fetch_array($exec);
if(!$row['compname'] == null){
 echo true;
}else {
 {echo(false);}
}
?>