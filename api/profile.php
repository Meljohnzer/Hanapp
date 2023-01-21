<?php
session_start();
include('conDB.php');
include('check.php');
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

$user_data = check_login($connect_db);

$id = $_SESSION['id'];
$post = $Decode_React_APP_Data['postID'];
$userID = $Decode_React_APP_Data['userID'];

$select = "SELECT apply.*,userDetails.*,educationBG.*,guardian.*,user.email,address.* FROM apply,userDetails,educationBG,guardian,user,address WHERE userDetails.userID = apply.userID AND userDetails.userID = educationBG.userID AND userDetails.userID = guardian.userID AND userDetails.userID = user.userID AND userDetails.userID = address.userID AND apply.postID = '$post' AND userDetails.userID = '$userID'";

$exec = mysqli_query($connect_db,$select);
//$row =mysqli_fetch_assoc($exec);

 $i=0;
 echo "[";
while($result  = mysqli_fetch_assoc($exec)){
 
 
echo  ($i>0?',':'').json_encode($result);

 $i++;

}

echo("]");




  
?>