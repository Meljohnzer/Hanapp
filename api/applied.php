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

$select = "SELECT apply.*,userDetails.*,educationBG.*,guardian.* FROM apply,userDetails,educationBG,guardian WHERE userDetails.userID = apply.userID AND userDetails.userID = educationBG.userID AND userDetails.userID = guardian.userID AND apply.postID = '$post'";

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