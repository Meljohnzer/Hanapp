<?php 
session_start();

// header("Access-Control-Allow-Headers: Authorization, Content-Type");
// header("Access-Control-Allow-Origin: *");
// header('content-type: application/json; charset=utf-8');
?>

<?php
include('conDB.php');
include('check.php');

$user_data = check_login($connect_db);
$scheduleID = $Decode_React_APP_Data['scheduleID'];
$inttype = $Decode_React_APP_Data['inttype'];
$intways = $Decode_React_APP_Data['intWays'];
$intstart = $Decode_React_APP_Data['intstartdate'];
$intend = $Decode_React_APP_Data['intenddate'];
$starttime = $Decode_React_APP_Data['starttime'];
$endtime = $Decode_React_APP_Data['endtime'];

 //$select = "SELECT * FROM applicant WHERE postID = '$postID' AND userID = '$id'";
// $exec = mysqli_query($connect_db,$select);
//$row =mysqli_fetch_assoc($exec);
 //if(!mysqli_num_rows($exec)){
  $query ="UPDATE `schedule` SET `interviewType`='$inttype',`method`='$intways',`startdate`='$intstart',`enddate`='$intend',`starttime`='$starttime',`endtime`='$endtime' WHERE scheduleID = '$scheduleID'";
  $result = mysqli_query($connect_db,$query);
  if($result){
   echo json_encode("Schedule is Updated Successfully!");
  }else{
   echo json_encode("Unkown Error");
  }
//echo json_encode($status);



  
?>