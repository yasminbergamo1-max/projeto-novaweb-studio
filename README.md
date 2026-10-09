# Projeto novaweb-projeto-inicial - Especificações de UI/UX (Tela de Login)

## Aula 08: UI Design: Tela de Login e Boas Práticas

## 1. Conceitos de Usabilidade em Formulários

### Labels vs. Placeholders

A label identifica o que deve ser preenchido no campo e permanece visível mesmo depois que o usuário começa a digitar. O placeholder serve apenas como exemplo ou orientação. Por isso, o placeholder não deve substituir a label.

### Hierarquia Visual

O botão Primary é o botão de ação principal da tela, por isso deve ter maior destaque visual. Na tela de login, o botão “Entrar” será o Primary. As ações secundárias, como “Criar Conta” e “Esqueci minha senha”, terão menos destaque para não competir com a ação principal.

## 2. Estados de Validação dos Campos

### Default

O campo apresenta uma borda neutra e uma label visível, indicando que está pronto para ser preenchido.

### Focus

Quando o usuário seleciona o campo, sua borda recebe um destaque visual para indicar onde o usuário está digitando.

### Error

O campo apresenta uma borda vermelha e uma mensagem explicando o problema, como “E-mail inválido”.

### Success

O campo apresenta um indicador visual mostrando que o preenchimento foi realizado corretamente.

### Disabled

O campo apresenta menor contraste e aparência diferenciada para indicar que está temporariamente indisponível.

## 3. Padrões de Acessibilidade

Os textos devem possuir contraste adequado com o fundo para facilitar a leitura. Os campos e botões devem permitir navegação utilizando a tecla Tab. As mensagens de erro devem ser claras para facilitar a compreensão do usuário e o uso por leitores de tela.



# Projeto Nova-Web - UI/UX Design

## Aula 09: Interface de Usuários e Consulta de Dados

### 1. Estudo sobre Tabelas e Experiência do Usuário

**Distribuição dos dados:**

Os textos e nomes ficam alinhados à esquerda para facilitar a leitura. Números, quantidades e valores são alinhados à direita. Informações como status e ações podem ficar centralizadas.

**Localização da busca:**

O campo de pesquisa deve ficar em uma posição de destaque, antes da tabela. Os filtros podem ser organizados próximos à busca para facilitar a localização e utilização.

**Visual da tabela:**

O cabeçalho da tabela deve possuir destaque visual para facilitar a identificação das colunas. As linhas podem utilizar pequenas diferenças de cor para facilitar a visualização de cada registro. Espaçamentos e divisores ajudam a organizar as informações.

### 2. Desenvolvimento do Protótipo

**Projeto no Figma:** [Cole o link do seu projeto aqui]

### Telas criadas

**Perfil do Usuário**

* Foto e identificação do usuário.
* Nome, cargo e status da conta.
* Dados pessoais para consulta e alteração.
* Configurações de segurança.
* Botões para salvar ou cancelar alterações.

**Consulta de Usuários**

* Campo para pesquisar usuários.
* Filtro por status.
* Botão para exportar informações.
* Botão para cadastrar novos usuários.
* Tabela com os principais dados dos usuários.
* Botões para visualizar, editar ou excluir registros.
* Paginação para navegar entre os resultados.
