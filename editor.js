document.addEventListener("DOMContentLoaded", () => {
    const livro = JSON.parse(localStorage.getItem("livroEditado"));

    if (livro) {
        document.querySelector("#titulo").value = livro.titulo;
        document.querySelector("#autor").value = livro.autor;
        document.querySelector("#preco").value = livro.preco;
        document.querySelector("#genero").value = livro.genero;
        document.querySelector("#estoque").value = livro.estoque;
        document.querySelector("#isbn").value = livro.isbn;
    }

    document.querySelector("#atualizar").addEventListener("click", () => {
        const titulo = document.querySelector("#titulo").value;
        const autor = document.querySelector("#autor").value;
        const preco = document.querySelector("#preco").value;
        const genero = document.querySelector("#genero").value;
        const estoque = document.querySelector("#estoque").value;
        const isbn = document.querySelector("#isbn").value;

        if (!titulo || !autor || !preco || !genero || !estoque || !isbn) {
            window.alert("Todos os campos são obrigatórios.");
            return;
        }

        const livroAtualizado = { titulo, autor, preco, genero, estoque, isbn };
        let livros = JSON.parse(localStorage.getItem("livros")) || [];

        const index = livros.findIndex(l => l.titulo === livro.titulo);
        if (index !== -1) {
            livros[index] = livroAtualizado; 
            localStorage.setItem("livros", JSON.stringify(livros)); 
            localStorage.removeItem("livroEditado"); 

            window.alert("Livro atualizado com sucesso!");
            window.location.href = "editar.html"; 
        } else {
            window.alert("Erro ao atualizar o livro.");
        }
    });
});