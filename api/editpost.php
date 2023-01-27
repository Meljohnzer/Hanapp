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
$lookingfor = $Decode_React_APP_Data['lookingfor'];
$jobdesc = $Decode_React_APP_Data['jobdesc'];
$jobtype = $Decode_React_APP_Data['jobtype'];
$startdate = $Decode_React_APP_Data['startdate'];
$enddate = $Decode_React_APP_Data['enddate'];
$street = $Decode_React_APP_Data['street'];
$city = $Decode_React_APP_Data['city'];
$province = $Decode_React_APP_Data['province'];
$zipcode = $Decode_React_APP_Data['zipcode'];
$salary = $Decode_React_APP_Data['salary'];
$rate = $Decode_React_APP_Data['rate'];

$id = $_SESSION['id'];


$Reg_Query = "UPDATE `post` SET `lookingfor`='$lookingfor',`jobdesc`='$jobdesc',`jobtype`='$jobtype',
`startdate`='$startdate',`enddate`='$enddate',`street`='$street',`city`='$city',`province`='$province',`zipcode`='$zipcode'
,`salary`='$salary',`rate`='$rate' WHERE postID = '$postID'";
   $Reg_Query_Result = mysqli_query($connect_db, $Reg_Query);
  
    if ($Reg_Query_Result) 
	{
	 $Message = "Post Edited Successfully";
	  } else 
	{
        $Message = "Error - Try again";
    }
	


echo json_encode($Message);

?>