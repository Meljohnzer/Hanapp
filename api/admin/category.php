<?php
session_start();
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
?>
<?php
include('../conDB.php');
  $user ="SELECT `created@` FROM user WHERE `created@` = CURRENT_DATE  GROUP BY `created@` ORDER BY `created@` ASC";
  $employer = "SELECT `created@` FROM user WHERE usertype = 2 AND `created@` = CURRENT_DATE GROUP BY `created@` Order BY `created@` ASC";
  $student = "SELECT `created@` FROM user WHERE usertype = 1 AND `created@` = CURRENT_DATE GROUP BY `created@` Order BY `created@` ASC";
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
 
   echo ($a>0?',':'').json_encode($assoc1['created@']);
   $a++;
}
echo("],");
echo ("[");
while($assoc2 = mysqli_fetch_assoc($result2))
{
    echo  ($b>0?',':'').json_encode($assoc2['created@']);
    $b++;
}
echo("],");
echo ("[");
while( $assoc3 = mysqli_fetch_assoc($result3)){
      echo  ($c>0?',':'').json_encode($assoc3['created@']);
      $c++;
}

   echo("]]");
    
   
  }else{
   echo json_encode("Unkown Error");
  }
//echo json_encode($status);



  
?>