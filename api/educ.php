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
$schname = $Decode_React_APP_Data['schname'];
$schaddress = $Decode_React_APP_Data['schaddress'];
$course = $Decode_React_APP_Data['course'];
$yearlevel = $Decode_React_APP_Data['yearlevel'];
$id = $_SESSION['id'];

$query = "SELECT * FROM `educationbg` WHERE `userID` = '$id'";
$query_result = mysqli_query($connect_db, $query);

if (!mysqli_num_rows($query_result))
{
    $Reg_Query = "INSERT INTO `educationbg` (`userID`,`schname`,`schaddress`, `course`,`yearlevel`) VALUES ('$id','$schname','$schaddress','$course','$yearlevel')";
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