<?php
include('conDB.php');
include('check.php');
session_start();
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
$id = $_SESSION['id'];
$user_data = check_login($connect_db);
 
$select = "SELECT postID,lookingfor,status,createdat FROM post WHERE userID = '$id'";

$exec = mysqli_query($connect_db,$select);
$i=0;
echo "[";
while($result  = mysqli_fetch_assoc($exec)){
 
echo  ($i>0?',':'').json_encode($result);
$i++;
}
echo("]");

 
?>