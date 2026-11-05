
const pesquisa = document.getElementById("pesquisa");

if (pesquisa) {
    pesquisa.addEventListener("input", function() {

        let texto = pesquisa.value.toLowerCase();
        let linhas = document.querySelectorAll("#tabelaProdutos tr");

        for (let i = 1; i < linhas.length; i++) {

            let livro = linhas[i].textContent.toLowerCase();

            if (livro.includes(texto)) {
                linhas[i].style.display = "";
            } else {
                linhas[i].style.display = "none";
            }
        }
    });
}

const formulario = document.getElementById("formLogin");

if (formulario) {
    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        window.location.href = "dashboard.html";

    });
}
