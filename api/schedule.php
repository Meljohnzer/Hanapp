<?php
session_start();
include('conDB.php');
include('check.php');
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

$user_data = check_login($connect_db);
$applicantID = $Decode_React_APP_Data['applicantID'];
$inttype = $Decode_React_APP_Data['inttype'];
$intways = $Decode_React_APP_Data['intWays'];
$intstart = $Decode_React_APP_Data['intstartdate'];
$intend = $Decode_React_APP_Data['intenddate'];

 //$select = "SELECT * FROM applicant WHERE postID = '$postID' AND userID = '$id'";
// $exec = mysqli_query($connect_db,$select);
//$row =mysqli_fetch_assoc($exec);
 //if(!mysqli_num_rows($exec)){
  $query ="INSERT INTO schedule (applicantID,interviewType,method,startdate,enddate) VALUES ('$applicantID','$inttype','$intways','$intstart','$intend')";
  $result = mysqli_query($connect_db,$query);
  if($result){
   echo json_encode("Schedule Set Successfully!");
  }else{
   echo json_encode("Unkown Error");
  }
//echo json_encode($status);



  
?>