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
$status = $Decode_React_APP_Data['status'];

 //$select = "SELECT * FROM applicant WHERE postID = '$postID' AND userID = '$id'";
// $exec = mysqli_query($connect_db,$select);
//$row =mysqli_fetch_assoc($exec);
 //if(!mysqli_num_rows($exec)){
  $query ="UPDATE `post` SET `status`='$status' WHERE postID = '$postID'";
  $result = mysqli_query($connect_db,$query);
  if($result){
    if($status == "close" ){
   echo json_encode("Post is now Closed!!");
    }else if ($status == true ){
      echo json_encode("Post is now Open!!");
    }
  }else{
   echo json_encode("Unkown Error");
  }
//echo json_encode($status);



  
?>