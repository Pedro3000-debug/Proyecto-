<!DOCTYPE html>
<html lang="es">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=divice-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Datos de registro</title>

    <link rel="stylesheet" href="css/datos.css">
    <link rel="stylesheet" href="css/fontawesome.css">

<script src="js/jquery-3.4.1.js"></script>
<script src="js/script.js"></script>
</head>
<body>
<section class="form_wrap">

    <section class="informacion">
    <h1>DATOS DEL REGISTRO</h1>
    <div class="php">
<?php
    echo "Nombre: " .$_REQUEST['nombre']."<br>";
    echo "Telefono: " .$_REQUEST['telefono']."<br>";
    echo "Correo: " .$_REQUEST['correo']."<br>";
    echo "Direccion: " .$_REQUEST['direccion'];
   
?>
<a href="Formulario.html">Ingresar nueva informacion</a>
</div>
</section>
</section>
</body>
</html>
