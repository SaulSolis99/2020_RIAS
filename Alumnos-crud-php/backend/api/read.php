<?php
require 'conexion.php';

$usuarios = [];
$sql = "SELECT sCveUsuario, sNombre, sApePat FROM Usuario";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $usuarios[$i]['cve']    = $row['sCveUsuario'];
    $usuarios[$i]['snombre'] = $row['sNombre'];
    $usuarios[$i]['sapepat'] = $row['sApePat'];
    $i++;
  }

  echo json_encode($usuarios);
}
else
{
  http_response_code(404);
}

?>