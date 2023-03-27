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
$post = $Decode_React_APP_Data['postID'];
$userID = $Decode_React_APP_Data['userID'];

$select = "SELECT apply.*,apply.applyID AS aid,userdetails.*,educationbg.*,guardian.*,user.email,address.*,applicant.*,schedule.*
FROM apply
INNER JOIN userdetails ON apply.userID = userdetails.userID
INNER JOIN educationbg ON userdetails.userID = educationbg.userID
INNER JOIN guardian ON educationbg.userID = guardian.userID
INNER JOIN address ON guardian.userID = address.userID
INNER JOIN user ON address.userID =user.userID
LEFT JOIN applicant ON apply.applyID = applicant.applyID
LEFT JOIN schedule ON applicant.applicantID = schedule.applicantID
WHERE apply.postID = '$post' AND userdetails.userID = '$userID' LIMIT 1";

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