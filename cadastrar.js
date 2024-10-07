const form = document.querySelector("#cadastro-form");
const button = document.querySelector("#cadastrar");

button.addEventListener("click", () => {
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

    const livro = {
        titulo,
        autor,
        preco,
        genero,
        estoque,
        isbn
    }

    let livros = JSON.parse(localStorage.getItem("livros")) || [];

    livros.push(livro);

    localStorage.setItem("livros", JSON.stringify(livros));

    window.alert("Livro cadastrado com sucesso!");
});
