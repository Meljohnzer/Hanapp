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

    $Reg_Query = "UPDATE `company` SET `compname`='$compname',`establishdate`='$establishdate',`websiteurl`='$websiteurl',`compdesc`='$compdesc' WHERE userID = '$id'";
   $Reg_Query_Result = mysqli_query($connect_db, $Reg_Query);

    if ($Reg_Query_Result) 
	{
        $Message = "Company Information Updated Successfully!!";
    } else 
	{
        $Message = "Error - Try again";
    }
	


echo json_encode($Message);

?>