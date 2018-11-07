<?php 

$mail='lukas.bergengruen@gmail.com'; 

  
$nombreCompleto = $_POST['nombreCompleto']; 
$direccion = $_POST['direccion']; 
$celular = $_POST['celular'];
$correo = $_POST['correo']; 
$comentarios = $_POST['comentarios'];
$pedido = $_POST['pedidoHecho'];

$thank="index.html"; 

$message = "nombre:".$nombre." direccion:".$direccion." celular:".$celular." correo:".$correo." comentarios: ".$comentarios." pedido: ".$pedido.""; 
   
  if (mail($mail,"Pedido",$message))  
       Header ("Location: $thank");
   
 ?>