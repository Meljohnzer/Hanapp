
<?php
session_start();
include('conDB.php');
include('check.php');
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

$user_data = check_login($connect_db);

$email = $Decode_React_APP_Data['email'];
$password = $Decode_React_APP_Data['password'];
$usertype = $Decode_React_APP_Data['usertype'];


$query = "SELECT * FROM `user` WHERE `email` = '$email'";
$query_result = mysqli_query($connect_db, $query);

if (!mysqli_num_rows($query_result))
{
    $Reg_Query = "INSERT INTO `user` (`userID`,`email`,`password`, `usertype`) VALUES ('','$email', '$password','$usertype')";
   $Reg_Query_Result = mysqli_query($connect_db, $Reg_Query);

    if ($Reg_Query_Result) 
	{
        $Message = "Registered successfully!";
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