<?php
session_start();

include('conDB.php');
include('check.php');
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

 $user_data = check_login($connect_db);


$schname = $Decode_React_APP_Data['schname'];
$schaddress = $Decode_React_APP_Data['schaddress'];
$course = $Decode_React_APP_Data['course'];
$yearlevel = $Decode_React_APP_Data['yearlevel'];
$id = $_SESSION['id'];


    $Reg_Query = "UPDATE `educationbg` SET `schname`='$schname',`schaddress`='$schaddress',`course`='$course',`yearlevel`='$yearlevel' WHERE userID = '$id'";
   $Reg_Query_Result = mysqli_query($connect_db, $Reg_Query);

    if ($Reg_Query_Result) 
	{
        $Message = "Educational Background is Successfully updated!!";
    } else 
	{
        $Message = "Error - Try again";
    }

echo json_encode($Message);

?>