<?php
include('conDB.php');
include('check.php');
session_start();
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');



$id = $_SESSION['id'];


 
 $select = "SELECT post.postID,lookingfor,status,createdat,COUNT(apply.postID) AS applicantNO FROM post 
LEFT JOIN apply ON post.postID = apply.postID
WHERE post.userID = '$id' GROUP BY post.postID ORDER BY createdat DESC";

$exec = mysqli_query($connect_db,$select);
 $i=0;
 echo "[";
while($result  = mysqli_fetch_assoc($exec)){
 
echo  ($i>0?',':'').json_encode($result);
 $i++;
}
echo("]");

 
?>