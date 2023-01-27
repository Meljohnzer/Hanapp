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
$applicantID = $Decode_React_APP_Data['applicantID'];
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
  $query ="INSERT INTO schedule (applicantID,interviewType,method,startdate,enddate,starttime,endtime) VALUES ('$applicantID','$inttype','$intways','$intstart','$intend','$starttime','$endtime')";
  $result = mysqli_query($connect_db,$query);
  if($result){
   echo json_encode("Schedule Set Successfully!");
  }else{
   echo json_encode("Unkown Error");
  }
//echo json_encode($status);



  
?>