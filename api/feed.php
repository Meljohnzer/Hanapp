<?php
session_start();
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
?>

<?php
include('conDB.php');
include('check.php');

$id = $_SESSION['id'];

 $select = "SELECT
 post.*,
 compname,
 userdetails.*
FROM
 post
LEFT JOIN userdetails ON post.userID = userdetails.userID
LEFT JOIN company ON userdetails.userID = company.userID
ORDER BY
 post.createdat
DESC";

$exec = mysqli_query($connect_db,$select);
 $i=0;
 echo "[";
while($result  = mysqli_fetch_assoc($exec)){
 
echo  ($i>0?',':'').json_encode($result);
 $i++;
}
echo("]");

 
?>