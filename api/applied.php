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

$select = "SELECT apply.applyID AS aid,apply.postID AS pid,apply.userID AS uid,apply.cor,apply.schoolid,apply.covlet,apply.appliedat,userdetails.*,educationbg.*,guardian.*,address.*,applicant.applicantID AS appID,applicant.applyID,applicant.status,applicant.`date@`,COUNT(applicant.applicantID) AS noApprove,schedule.* FROM apply as app,userdetails,educationbg,guardian,address,apply
LEFT JOIN applicant ON apply.applyID = applicant.applyID
LEFT JOIN schedule ON applicant.applicantID = schedule.applicantID
WHERE userdetails.userID = apply.userID AND userdetails.userID = educationbg.userID AND userdetails.userID = guardian.userID AND userdetails.userID = address.userID AND apply.postID = '$post' GROUP BY apply.userID ORDER BY `date@` DESC";

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