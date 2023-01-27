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

$fname = $Decode_React_APP_Data['fname'];
$lname = $Decode_React_APP_Data['lname'];
$mname = $Decode_React_APP_Data['mname'];
$sname = $Decode_React_APP_Data['sname'];
$birth = $Decode_React_APP_Data['birth'];
$age = $Decode_React_APP_Data['age'];
$contact = $Decode_React_APP_Data['contact'];
$street = $Decode_React_APP_Data['street'];
$city = $Decode_React_APP_Data['city'];
$province = $Decode_React_APP_Data['province'];
$zipcode = $Decode_React_APP_Data['zipcode'];
$id = $_SESSION['id'];

$query = "SELECT * FROM `userdetails` WHERE `userID` = '$id'";
$query_result = mysqli_query($connect_db, $query);

if (!mysqli_num_rows($query_result))
{
    $Reg_Query = "INSERT INTO `userdetails` (`userID`,`firstname`,`lastname`, `midname`,`suffname`,`birthday`,`age`,`contactno`) VALUES ('$id','$fname', '$lname','$mname','$sname','$birth','$age','$contact')";
    $addres = "INSERT INTO `address` (`userID`,`street`,`city`,`province`,`zipcode`) VALUES ('$id','$street','$city','$province','$zipcode')";
   $Reg_Query_Result = mysqli_query($connect_db, $Reg_Query);
   $Reg_Address = mysqli_query($connect_db,$addres);
    if ($Reg_Query_Result && $Reg_Address) 
	{
	 $sql = "SELECT * FROM `user` WHERE `userID` = '$id'";
	 $type = mysqli_query($connect_db,$sql);
	 $elements = mysqli_fetch_array($type);
	 if($elements['usertype'] == 1){
	  $Message = "Student";
	 }else{
	  $Message = "Employer";
	 }
    } else 
	{
        $Message = "Error - Try again";
    }
	
} else 
{
    $Message = "User Already Registered";
}

echo json_encode($Message);

?>