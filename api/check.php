<?php
include('conDB.php');
//$user_data = check_login($connect_db);
function check_login($connect_db){
 if(isset($_SESSION['id'])){
   $id = $_SESSION['id'];
   $query2 = "select * from user where userID = '$id'";
   $result = mysqli_query($connect_db,$query2);
   if($result && mysqli_num_rows($result) >= 0){
     $user_data = mysqli_fetch_assoc($result);
     return $user_data;
     
header("location:login.php");
die;
   }  

 }



}

?>

