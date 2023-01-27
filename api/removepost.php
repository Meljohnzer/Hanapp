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

$id = $_SESSION['id'];


$Reg_Query = "DELETE FROM `post` WHERE postID = '$postID'";
   $Reg_Query_Result = mysqli_query($connect_db, $Reg_Query);
  
    if ($Reg_Query_Result) 
	{
	 $Message = "Post Deleted Successfully";
	  } else 
	{
        $Message = "Error - Try again";
    }
	


echo json_encode($Message);

?>