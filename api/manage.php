<?php
session_start();
include('conDB.php');
include('check.php');
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

$user_data = check_login($connect_db);

$postID = $Decode_React_APP_Data['postID'];

$select = "SELECT post.*,userDetails.firstname,userDetails.lastname,userDetails.midname,company.compname,company.establishdate,company.compdesc FROM post,userDetails LEFT JOIN company ON userDetails.userID = company.userID WHERE post.userID = userDetails.userID AND postID = '$postID'";

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