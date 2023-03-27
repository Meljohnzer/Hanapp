<?php
session_start();
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
?>
<?php
include('../conDB.php');
  $user ="SELECT COUNT(userID) as Users FROM user";
  $employer = "SELECT COUNT(userID) as Employer FROM user WHERE usertype = 2";
  $student = "SELECT COUNT(userID) as Student FROM user WHERE usertype = 1";
  $result1 = mysqli_query($connect_db,$user);
  $result2 = mysqli_query($connect_db,$employer);
  $result3 = mysqli_query($connect_db,$student);

  $assoc1 = mysqli_fetch_assoc($result1);
  $assoc2 = mysqli_fetch_assoc($result2);
  $assoc3 = mysqli_fetch_assoc($result3);
 

  if($result1 && $result2 && $result3 ){
  
    echo "[";
   echo  json_encode($assoc1['Users']);
   echo(",");
   echo  json_encode($assoc2['Employer']);
   echo(',');
   echo  json_encode($assoc3['Student']);

   echo("]");
    
   
  }else{
   echo json_encode("Unkown Error");
  }
//echo json_encode($status);



  
?>