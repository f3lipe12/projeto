<?php
include 'conexao.php';

$titulo = $_POST["titulo"];
var_dump($titulo);
$autor = $_POST["autor"];
$preco = $_POST["preco"];
$genero = $_POST["genero"];
$estoque = $_POST["estoque"];
$isbn = $_POST["isbn"];

$comando = "UPDATE livros SET autor = ?, preco = ?, genero = ?, estoque = ?, isbn = ? WHERE titulo = ?";
$s = $con->prepare($comando);

$s->bindParam(1, $autor);
$s->bindParam(2, $preco);
$s->bindParam(3, $genero);
$s->bindParam(4, $estoque);
$s->bindParam(5, $isbn);
$s->bindParam(6, $titulo);
?>
