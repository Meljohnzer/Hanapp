<?php


header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

 $host='localhost';
 $username='root';
 $password=''; 
 $db_name='hanapp_db'; 

 $connect_db = mysqli_connect($host, $username, $password, $db_name);


 $React_APP_Data = file_get_contents('php://input'); 
 $Decode_React_APP_Data = json_decode($React_APP_Data , true);

if(!$connect_db)
{
	echo json_encode("Connection to DB Failed");
}
?>