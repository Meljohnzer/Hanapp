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

$select = "SELECT apply.*,userDetails.*,educationBG.*,guardian.*,user.email,address.*,applicant.*
FROM apply
INNER JOIN userDetails ON apply.userID = userDetails.userID
INNER JOIN educationBG ON userDetails.userID = educationBG.userID
INNER JOIN guardian ON educationBG.userID = guardian.userID
INNER JOIN address ON guardian.userID = address.userID
INNER JOIN user ON address.userID =user.userID
LEFT JOIN applicant ON apply.applyID = applicant.applyID
WHERE apply.postID = '$post' AND userDetails.userID = '$userID'";

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