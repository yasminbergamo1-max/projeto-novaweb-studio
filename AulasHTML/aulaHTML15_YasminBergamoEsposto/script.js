/*
Descricao: Exercícios da Aula 15 - JavaScript aplicado a Formulários
nome_arquivo: script.js
nome_exercicio: Atividade 15 - JavaScript aplicado a Formulários
nome_aluno: Yasmin Bergamo Esposto
email_aluno: yasmin.esposto@portalsesisp.org.br
turma: TDE-1BHH-26
*/

function cadastrar(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.textContent = "Cadastrado com sucesso! Bem-vinda, " + nome + "!";
}
