<?php

// echo 'Los datos han pasado al servidor en PHP';
$nombre = $_POST['name'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$comentarios= $_POST['comentarios'];

$res = "
    <p>Los datos que enviaste son:</p>
    <ul>
        <li>Nombre: $nombre</li>
        <li>Email: $email</li>
        <li>Asunto: $asunto</li>
        <li>Comentario: $comentarios</li>
    </ul>
";

echo $res;

// mail();