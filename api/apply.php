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
$id = $_SESSION['id'];

$server_url = "localhost:8080";
$upload_dir = "upload/";

$COR = $_FILES['file1'];
$SchholID = $_FILES['file2'];
$CovLet = $_FILES['file3'];
$Facebook = $_POST['file4'];
$postID = $_POST['file5'];
//$cortmp = $Decode_React_APP_Data['CoR']['uri'];

$user = "SELECT * FROM userdetails WHERE userID = '$id'";
$query = mysqli_query($connect_db,$user);
$key = mysqli_fetch_array($query);

$dir = preg_replace('/\s+/','-',$upload_dir.$key['lastname']."/".$key['userID']."-".$postID);
if(!is_dir($dir)){
if(mkdir($dir,0777,true)){
$cor = $dir."/".$COR['name'];
$schoolid = $dir."/".$SchholID['name'];
$covlet = $dir."/".$CovLet['name'];
$target1 =preg_replace('/\s+/','-',$cor);
$target2 =preg_replace('/\s+/','-',$schoolid);
$target3 =preg_replace('/\s+/','-',$covlet);
if(
 move_uploaded_file($COR['tmp_name'],$target1) && 
 move_uploaded_file($SchholID['tmp_name'],$target2) && 
 move_uploaded_file($CovLet['tmp_name'],$target3) 
){
 
$apply = "INSERT INTO apply(postID,userID,cor,schoolid,covlet)VALUES('$postID','$id','$target1','$target2','$target3')";
$appl_query = mysqli_query($connect_db,$apply);

if($appl_query){
 echo json_encode("Appliaction Sent Successfully");
}else{
 echo json_encode("unkown error");
}
 
}else{
 echo json_encode("error ");
}
}else{
 echo("error");
}

}else{
 echo json_encode("Already exist");
}
//$apply = "SEELECT * FROM apply WHERE postID = '$postID' AND userID = '$id'";
//$check = mysqli_query($connect_db,$apply);
//if(!mysqli_num_rows($check)){
// if(is_dir($upload_dir."/".$key['lastname'])){
  
  
  
// }
 
 
//}




?>