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


$select = "SELECT
post.*,
compname,
userdetails.*
FROM
post
LEFT JOIN company ON post.userID = company.userID
LEFT JOIN userdetails ON post.userID = userdetails.userID
INNER JOIN bookmark ON post.postID = bookmark.postID
WHERE
bookmark.userID = '$id'";

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