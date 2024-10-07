const listaLivros = document.querySelector("#lista-livros");

function carregarLivros() {
    const livros = JSON.parse(localStorage.getItem("livros")) || [];
    listaLivros.innerHTML = ""; 
    
    livros.forEach((livro, index) => {
        const novoItem = document.createElement("li");
        novoItem.innerHTML = `
            <label>${livro.titulo}</label>
            <button onclick="prepararEdicao(${index})">Editar</button>
        `;
        listaLivros.appendChild(novoItem);
    });
}

function prepararEdicao(index) {
    const livros = JSON.parse(localStorage.getItem("livros")) || [];
    const livro = livros[index];

    localStorage.setItem("livroEditado", JSON.stringify(livro));

    window.location.href = "editor.html";
}

carregarLivros();