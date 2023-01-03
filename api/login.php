<?php
include('conDB.php');
session_start();
include('check.php');
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

$email = $Decode_React_APP_Data['email'];
$password = $Decode_React_APP_Data['password']; 

$user_data = check_login($connect_db);

$query = "SELECT * FROM `user` WHERE `email` = '$email'";
$query_result = mysqli_query($connect_db, $query);
if (mysqli_num_rows($query_result)) {
$DB_Elements= mysqli_fetch_array($query_result);

    if ($DB_Elements['password'] == $password && $DB_Elements['email'] == $email) {
      //  $Message = "Logged In Successfully";
       $id = $DB_Elements['userID'];
       $query = "SELECT * FROM `userDetails` WHERE `userID` = '$id'";
       $result = mysqli_query($connect_db,$query);
      if($DB_Elements['usertype']== 1){
       if(!mysqli_num_rows($result)){
           $Message = "no details yet";
       }else{
        $Message = "Student Login";
       }
       
      }else{
       if(!mysqli_num_rows($result)){
       $Message= "no details yet";
       }else{
        
         $Message = "Employer Login";
         
        }
        
       
       }
      
  
    } else { 
		$Message = "Incorrect Email or Password";
    }
    
    $_SESSION['id'] = $DB_Elements['userID'];
} 
else if(!mysqli_num_rows($query_result))
{
    $Message = "User does not exist";
}else{
 $Message = "MUST LOGIN FIRST";
}


echo json_encode($Message);

?>