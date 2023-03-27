<?php
session_start();
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
?>
<?php
include('../conDB.php');
  $user ="SELECT COUNT(`created@`) AS user FROM user WHERE `created@` = CURRENT_DATE";
  $employer = "SELECT COUNT(`created@`)  AS employer  FROM user WHERE `created@` = CURRENT_DATE AND usertype = 2";
  $student = "SELECT COUNT(`created@`)  AS student  FROM user WHERE `created@` = CURRENT_DATE AND usertype = 1";
  $result1 = mysqli_query($connect_db,$user);
  $result2 = mysqli_query($connect_db,$employer);
  $result3 = mysqli_query($connect_db,$student);

  
  
 
 

  if($result1 && $result2 && $result3 ){
   echo "[";
   $a=0;
    $b =0;
    $c = 0;
    echo ("[");
  while($assoc1 = mysqli_fetch_assoc($result1) ){
 
   echo ($a>0?',':'').json_encode($assoc1['user']);
   $a++;
}
echo("],");
echo ("[");
while($assoc2 = mysqli_fetch_assoc($result2))
{
    echo  ($b>0?',':'').json_encode($assoc2['employer']);
    $b++;
}
echo("],");
echo ("[");
while( $assoc3 = mysqli_fetch_assoc($result3)){
      echo  ($c>0?',':'').json_encode($assoc3['student']);
      $c++;
}

   echo("]]");
    
   
  }else{
   echo json_encode("Unkown Error");
  }
//echo json_encode($status);



  
?>