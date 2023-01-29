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

$postID = $Decode_React_APP_Data['postID'];

$select = "SELECT post.*,userdetails.firstname,userdetails.lastname,userdetails.midname,userdetails.profile,company.compname,company.establishdate,company.compdesc FROM post,userdetails LEFT JOIN company ON userdetails.userID = company.userID WHERE post.userID = userdetails.userID AND postID = '$postID'";

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