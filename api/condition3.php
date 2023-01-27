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
$id = $_SESSION['id'];

$select = "SELECT * FROM apply WHERE postID = '$postID' AND userID = '$id'";
$exec = mysqli_query($connect_db,$select);
//$row =mysqli_fetch_assoc($exec);
if(!mysqli_num_rows($exec)){
 echo json_encode("not apply");
}else{
    echo json_encode("Already applied");
}




  
?>