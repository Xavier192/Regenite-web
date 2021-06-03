<?php

$user = 'root';
$password = '';
$dbName = 'tests';
$consulta = null;

try {
    $conexion = new PDO('mysql:host=localhost;dbname=tests',$user, $password);
    $consulta = $conexion->query('SELECT * from test');

    $conexion = null;
} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}

?>