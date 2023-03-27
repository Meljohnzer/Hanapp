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

$select = "SELECT emp.*,company.*,post.image,post.postID,post.lookingfor,post.jobdesc,post.jobtype,post.startdate AS Pstartdate,post.enddate AS Penddate,post.street,post.city,post.province,post.zipcode,post.createdat,post.salary,post.rate,stu.userID AS stuId,stu.firstname as stuFname,stu.lastname AS stuLname,stu.midname AS stuMname,stu.suffname AS stuSname,address.street AS Sstreet,address.city AS Scity,address.province AS Sprovince,address.zipcode AS Szipcode,stu.contactno AS Scontactno,user.email,apply.*,applicant.applicantID,applicant.applicantID,applicant.status AS Astatus,applicant.`date@`,schedule.* 
FROM apply 
LEFT JOIN userdetails as stu  on apply.userID = stu.userID
LEFT JOIN post on apply.postID = post.postID 
LEFT JOIN userdetails as emp ON emp.userID = post.userID 
LEFT JOIN company on emp.userID = company.userID 
INNER JOIN user ON stu.userID = user.userID 
LEFT JOIN applicant ON apply.applyID = applicant.applyID 
LEFT JOIN schedule on applicant.applicantID = schedule.applicantID 
INNER JOIN address on stu.userID = address.userID
WHERE post.postID = '$post' AND stu.userID = '$id' LIMIT 1";

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