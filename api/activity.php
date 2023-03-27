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

 $select = "SELECT post.*,compname,apply.*,applicant.*, applicant.`date@` AS dateA,userdetails.* FROM post LEFT JOIN company ON post.userID = company.userID INNER JOIN apply ON post.postID = apply.postID LEFT JOIN applicant ON apply.applyID = applicant.applyID LEFT JOIN userdetails ON post.userID = userdetails.userID WHERE apply.userID = '$id' ORDER BY apply.appliedat DESC";

$exec = mysqli_query($connect_db,$select);
 $i=0;
 echo "[";
while($result  = mysqli_fetch_assoc($exec)){
 
echo  ($i>0?',':'').json_encode($result);
 $i++;
}
echo("]");

 
?>