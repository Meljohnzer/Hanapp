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


    $Reg_Query = "UPDATE `userdetails` SET `firstname`='$fname',`lastname`='$lname',`midname`='$mname',`suffname`='$sname',`birthday`='$birth',`age`='$age',`contactno`='$contact' WHERE userID = '$id'";
    $addres = "UPDATE `address` SET `street`='$street',`city`='$city',`province`='$province',`zipcode`='$zipcode' WHERE userID = '$id'";
   $Reg_Query_Result = mysqli_query($connect_db, $Reg_Query);
   $Reg_Address = mysqli_query($connect_db,$addres);
    if ($Reg_Query_Result && $Reg_Address) 
	{
		$Message = "User Info Updated Successfully!!";
    } else 
	{
        $Message = "Error - Try again";
    }
	

echo json_encode($Message);

?>