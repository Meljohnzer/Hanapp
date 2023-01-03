<?php
include('conDB.php');
include('check.php');
session_start();
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');


$user_data = check_login($connect_db);
$id = $_SESSION['id'];

$query = "SELECT * FROM `user` WHERE `userID` = '$id'";
$result = mysqli_query($connect_db,$query);
$db = mysqli_fetch_array($result);

if($db['usertype'] == 1){
$select = "SELECT * FROM user,userDetails,address,guardian,educationBG WHERE user.userID = userDetails.userId AND userDetails.userID = guardian.userID AND guardian.userID = educationBG.userID AND educationBG.userID = address.userID AND user.userID = '$id'";

}else{
 
 $select = "SELECT
    *
FROM
    userDetails
LEFT JOIN address ON userDetails.userID = address.userID
LEFT JOIN company ON address.userID = company.userID
WHERE
    userDetails.userID = '$id'";

}
 
$exec = mysqli_query($connect_db,$select);
//$row =mysqli_fetch_assoc($exec);

 $i=0;
 echo "[";
while($result  = mysqli_fetch_assoc($exec)){
 
 
echo  ($i>0?',':'').json_encode($result);

 $i++;

}

echo("]");

 
 

?>