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
$postID = $_POST['postID'];
$server_url = "localhost:8080";
$upload_dir = "post/";

$profile = $_FILES['file1'];
//$cortmp = $Decode_React_APP_Data['CoR']['uri'];

$user = "SELECT * FROM userdetails WHERE userID = '$id'";
$query = mysqli_query($connect_db,$user);
$key = mysqli_fetch_array($query);

$dir = preg_replace('/\s+/','-',$upload_dir.$key['lastname']."/".$key['userID']);
if(!is_dir($dir)){
if(mkdir($dir,0777,true)){
$profiles = $dir."/".$profile['name'];

$target1 =preg_replace('/\s+/','-',$profiles);

if(
 move_uploaded_file($profile['tmp_name'],$target1)
){
 
$apply = "UPDATE `post` SET `image`='$target1' WHERE userID = '$id' AND postID = '$postID'";
$appl_query = mysqli_query($connect_db,$apply);

if($appl_query){
 echo json_encode("Picture Added");
}else{
 echo json_encode("unkown error");
}
 
}else{
 echo json_encode("error ");
}
}else{
 echo("error");
}

}else if(is_dir($dir))
{
 $files = glob($dir.'/*');
 foreach($files as $file){
    is_dir($file) ? removeDirectory($file) : unlink($file);
 }
 if(rmdir($dir)){
    if(mkdir($dir,0777,true)){
$profiles = $dir."/".$profile['name'];

$target1 =preg_replace('/\s+/','-',$profiles);

if(
 move_uploaded_file($profile['tmp_name'],$target1)
){
 
$apply = "UPDATE `post` SET `image`='$target1' WHERE userID = '$id' AND postID = '$postID'";
$appl_query = mysqli_query($connect_db,$apply);

if($appl_query){
 echo json_encode("Picture Added");
}else{
 echo json_encode("unkown error");
}
 
}else{
 echo json_encode("error ");
}
}
 }
}



?>