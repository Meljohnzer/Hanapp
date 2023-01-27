<?php
session_start();
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
?>
<?php
include('conDB.php');
include('check.php');
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

$user_data = check_login($connect_db);
$postID = $Decode_React_APP_Data['postID'];
$id = $_SESSION['id'];

$select = "DELETE FROM `bookmark` WHERE userID = '$id' AND postID = '$postID'";
$exec = mysqli_query($connect_db,$select);
//$row =mysqli_fetch_assoc($exec);
if($exec){
    echo json_encode("Remove Successfully");
}else{
    echo json_encode("Unkown Error");
}
  ?>