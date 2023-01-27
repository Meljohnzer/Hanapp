<?php
 
 $host='localhost';
 $username='id20212380_besagunsa';
 $password='850M|yVgagU$kb<T'; 
 $db_name='id20212380_mydb'; 

 $connect_db = mysqli_connect($host, $username, $password, $db_name);

  
 $React_APP_Data = file_get_contents('php://input'); 
 $Decode_React_APP_Data = json_decode($React_APP_Data , true);

if(!$connect_db)
{
	echo json_encode("Connection to DB Failed");
}
?>