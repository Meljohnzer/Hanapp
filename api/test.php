<?php

include('conDB.php');

$select = "SELECT * FROM user";
 
 $exec = mysqli_query($connect_db,$select);
 $i=0;
 echo "[";
while($result =mysqli_fetch_assoc($exec)){
 
echo  ($i>0?',':'').json_encode($result);

 $i++;

}
echo("]")
?>