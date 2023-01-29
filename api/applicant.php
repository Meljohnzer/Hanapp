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
$applyID = $Decode_React_APP_Data['applyID'];
$status = $Decode_React_APP_Data['status'];

 //$select = "SELECT * FROM applicant WHERE postID = '$postID' AND userID = '$id'";
// $exec = mysqli_query($connect_db,$select);
//$row =mysqli_fetch_assoc($exec);
 //if(!mysqli_num_rows($exec)){
  $query ="INSERT INTO applicant (applyID,status) VALUES ('$applyID','$status')";
  $result = mysqli_query($connect_db,$query);
  if($result){
      if($status == "Approved"){
   echo json_encode("Approved Successfully");
      }else{
          echo json_encode("Application Decline");
      }
  }else{
   echo json_encode("Unkown Error");
  }
//echo json_encode($status);



  
?>