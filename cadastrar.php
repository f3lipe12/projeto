<?php
Include 'conexao.php';

$comando = "Insert into livros (titulo, autor, preco, genero, estoque, isbn)
VALUES (?, ?, ?, ?, ?, ?)";

$s = $con->prepare($comando);

$s->bindParam(1, $titulo);
$s->bindParam(2, $autor);
$s->bindParam(3, $preco);
$s->bindParam(4, $genero);
$s->bindParam(5, $estoque);
$s->bindParam(6, $isbn);

$titulo = $_POST["titulo"];
$autor = $_POST["autor"];
$preco = $_POST["preco"];
$genero = $_POST["genero"];
$estoque = $_POST["estoque"];
$isbn = $_POST["isbn"];

$s->execute();
?>
