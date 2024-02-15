# :construction: Projeto Trybe Wallet :construction:
Este projeto é uma aplicação web chamada Trybe Wallet, projetada para ajudar os usuários a gerenciar suas despesas pessoais. Ele oferece recursos para adicionar despesas em diferentes moedas, calcular o total das despesas em uma moeda específica e excluir despesas. Abaixo está uma breve descrição dos principais componentes e funcionalidades do projeto:

## Componentes Principais:
### Header: 
Exibe o email do usuário logado e o total das despesas em reais (BRL).
### WalletForm: 
Permite ao usuário adicionar uma nova despesa, especificando o valor, moeda, método de pagamento, categoria e descrição.
### Table: 
Mostra uma tabela com todas as despesas adicionadas, incluindo descrição, tag, método de pagamento, valor, moeda, câmbio utilizado, valor convertido e opção para editar ou excluir a despesa.
## Funcionalidades Principais:
#### Adicionar Despesa: 
O usuário pode adicionar uma nova despesa especificando seus detalhes através do formulário.
#### Calcular Total das Despesas: 
O valor total das despesas é calculado automaticamente em reais (BRL) com base nas taxas de câmbio.
#### Editar Despesa: 
O usuário tem a opção de editar as despesas existentes na tabela.
#### Excluir Despesa: 
O usuário pode excluir uma despesa existente na tabela.

## Além disso...
Além disso, o projeto inclui integração com Redux para gerenciamento de estado global, React Router para navegação entre páginas e testes unitários para garantir a qualidade do código.

## Tecnologias Utilizadas:
### React: 
O projeto é desenvolvido utilizando React, uma biblioteca JavaScript de código aberto para construção de interfaces de usuário.

### Redux: 
Redux é utilizado para gerenciamento de estado global na aplicação, facilitando o compartilhamento de dados entre os diferentes componentes.

### React Router: 
React Router é utilizado para o roteamento da aplicação, permitindo a navegação entre as diferentes páginas sem recarregar a página inteira.

### Redux Thunk: 
Redux Thunk é usado para lidar com ações assíncronas no Redux, permitindo que as ações retornem funções em vez de objetos, útil para chamadas de API assíncronas.

### CSS: 
O estilo da aplicação é escrito utilizando CSS puro, proporcionando uma aparência agradável e responsiva.

### TypeScript: 
TypeScript é utilizado para adicionar tipagem estática ao JavaScript, o que ajuda na detecção de erros durante o desenvolvimento e melhora a manutenibilidade do código.

### Fetch API: 
A Fetch API é utilizada para realizar requisições HTTP para uma API externa a fim de obter informações sobre as moedas e as taxas de câmbio.

### Jest e React Testing Library: 
Jest e React Testing Library são utilizados para escrever e executar testes unitários, garantindo a qualidade e a robustez do código.

### Vite: 
Vite é utilizado como o bundler para o projeto, fornecendo um ambiente de desenvolvimento rápido e eficiente.

### Cypress: 
Cypress é utilizado para escrever e executar testes de integração e end-to-end, garantindo a funcionalidade adequada da aplicação em diferentes cenários de uso.