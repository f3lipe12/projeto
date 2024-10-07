<?php
Include 'conexao.php';

if (isset($_POST['titulos']) && !empty($_POST['titulos'])) {
    foreach ($_POST['titulos'] as $titulo) {
        $comando = "DELETE FROM livros WHERE titulo = ?";
        $s = $con->prepare($comando);
        $s->bindParam(1, $titulo);
        $s->execute();
    }
    echo "Livros excluídos com sucesso!";
} else {
    echo "Nenhum livro selecionado.";
}
?>

