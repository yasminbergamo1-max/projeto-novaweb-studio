/*
Descricao: Exercícios da Aula 14 - CSS para Formulários
nome_arquivo: script.js
nome_exercicio: Atividade 14 - CSS para Formulários
nome_aluno: Yasmin Bergamo Esposto
email_aluno: yasmin.esposto@portalsesisp.org.br
turma: TDE-1BHH-26
*/

function habilitar(id) {
    let campo = document.getElementById(id);

    campo.disabled = false;
    campo.focus();

    campo.onblur = function() {
        campo.disabled = true;
    };
}