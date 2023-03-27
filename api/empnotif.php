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

$select = "Select * FROM post
LEFT JOIN apply ON post.postID = apply.postID
LEFT JOIN userdetails ON apply.userID = userdetails.userID
LEFT JOIN applicant ON apply.applyID = applicant.applyID
WHERE post.userID = '$id' ORDER BY appliedat DESC";

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