<?php

try {
    $con = new PDO("mysql:host=localhost;dbname=livraria","root","");
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Erro ao Conectar'. $e->getMessage();
}

?>