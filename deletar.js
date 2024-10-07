const listaLivros = document.querySelector("#lista-livros");
const deletarButton = document.querySelector("#deletar");

function carregarLivros() {
    const livros = JSON.parse(localStorage.getItem("livros")) || [];
    listaLivros.innerHTML = "";

    livros.forEach((livro, index) => {
        const novoItem = document.createElement("li");
        novoItem.innerHTML = `
            <input type="checkbox" id="livro-${index}" value="${livro.titulo}">
            <label for="livro-${index}">${livro.titulo}</label>
        `;
        listaLivros.appendChild(novoItem);
    });
}

deletarButton.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll("#lista-livros input[type='checkbox']:checked");
    
    if (checkboxes.length > 0) {
        const titulosParaDeletar = Array.from(checkboxes).map(checkbox => checkbox.value);
        
        let livros = JSON.parse(localStorage.getItem("livros")) || [];
        livros = livros.filter(livro => !titulosParaDeletar.includes(livro.titulo));
        localStorage.setItem("livros", JSON.stringify(livros));

        const formData = new FormData();
        titulosParaDeletar.forEach(titulo => formData.append('titulos[]', titulo));

        fetch('deletar.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data); 
            carregarLivros(); 
        })
        .catch(error => {
            console.error('Erro:', error);
            alert("Ocorreu um erro ao tentar deletar os livros.");
        });
    } else {
        alert("Selecione pelo menos um livro para deletar.");
    }
});

carregarLivros();
