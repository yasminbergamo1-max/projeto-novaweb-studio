/*
Descricao: Exercícios da Aula 12 -  Introdução aos Formulários Web
nome_arquivo: login.js
nome_exercicio: Atividade 12 -  Introdução aos Formulários Web
nome_aluno: Yasmin Bergamo Esposto
email_aluno: yasmin.esposto@portalsesisp.org.br
turma: TDE-1BHH-26
*/ 

document.getElementById("Login").addEventListener("submit", function(event) {
event.preventDefault();

let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;
let mensagem = document.getElementById("mensagem");

if (email == "" || senha == "") {
    mensagem.innerHTML = "Preencha todos os campos.";
} else {
    mensagem.innerHTML = "Login realizado com sucesso!";
}

});