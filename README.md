# Projeto novaweb-projeto-inicial - Especificações de UI/UX (Tela de Login)

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
