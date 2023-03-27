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

$query = "SELECT * FROM `user` WHERE `userID` = '$id'";
$result = mysqli_query($connect_db,$query);
$db = mysqli_fetch_array($result);

if($db['usertype'] == 1){
$select = "SELECT * FROM user,userdetails,address,guardian,educationbg WHERE user.userID = userdetails.userId AND userdetails.userID = guardian.userID AND guardian.userID = educationbg.userID AND educationbg.userID = address.userID AND user.userID = '$id' LIMIT 1";

}else{
 
 $select = "SELECT
    *
FROM
    userdetails
LEFT JOIN address ON userdetails.userID = address.userID
LEFT JOIN company ON address.userID = company.userID
LEFT JOIN user ON company.userID = user.userID
WHERE
    userdetails.userID = '$id' LIMIT 1";

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