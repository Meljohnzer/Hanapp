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

$compname = $Decode_React_APP_Data['compname'];
$establishdate = $Decode_React_APP_Data['establishdate'];
$websiteurl = $Decode_React_APP_Data['websiteurl'];
$compdesc = $Decode_React_APP_Data['compdesc'];
$id = $_SESSION['id'];

$query = "SELECT * FROM `company` WHERE `userID` = '$id'";
$query_result = mysqli_query($connect_db, $query);

if (!mysqli_num_rows($query_result))
{
    $Reg_Query = "INSERT INTO `company` (`userID`,`compname`,`establishdate`, `websiteurl`,`compdesc`) VALUES ('$id','$compname', '$establishdate','$websiteurl','$compdesc')";
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