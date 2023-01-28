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

$newpass = $Decode_React_APP_Data['password'];
$id = $_SESSION['id'];


    $Reg_Query = "UPDATE `user` SET `password`='$newpass' WHERE userID = '$id'";
   $Reg_Query_Result = mysqli_query($connect_db, $Reg_Query);

    if ($Reg_Query_Result) 
	{
        $Message = "Password Updated Successfully!!";
    } else 
	{
        $Message = "Error - Try again";
    }

echo json_encode($Message);

?>