Projeto BackUs

Este projeto tem como objetivo o desenvolvimento de um sistema para o gerenciamento de um jogo, com funcionalidades como cadastro de alunos, interação entre jogadores, gerenciamento de chat e validação de regras do jogo.

Tecnologias Utilizadas
- JavaScript (ES6+)
- Node.js
- Express.js
- Postman (para testes das rotas)
- Miro/Draw.io (para criação do Diagrama UML)

Diagrama de Classes (UML)
O Diagrama de Classes UML foi elaborado conforme as funcionalidades do jogo. Ele descreve as classes envolvidas e seus respectivos métodos e atributos. Usei ferramentas como Miro e Draw.io para sua criação.

Estrutura do Projeto
|_primeiraEtapa
|_segundaEtapa
|_terceiraEtapa
|_quartaEtapa
        |_anexos
        |_src
        |    |_models
        |    |_routes
        |_server.js

Responsabilidades do Grupo
Vitor Argeri
- Verificar e ajustar as classes do código. *FEITO* (ETAPA 4>src>models)
- Refazer o Diagrama UML conforme o código. *FEITO* (ETAPA 4>anexo>anexos)
- Organizar o README.md. *FEITO* (README.md)
- Criar as listas de jogadores e alunos cadastrados. *FEITO* (ETAPA 4>src>routes>cadastroRoutes.js)

Pablo Delgado
- Rota Delete. *FEITO*
- Estruturar o código (pastas, arquivos, etc.).

Vinicius Rocha
- Testar as rotas no Postman.
- Definir a quantidade de grupos padrão (6).

Vinicius Pereira
- Criar o Chat.
- Exibir todos os alunos, ordenados por nome e agrupados por grupo.

Raphaelle
- Implementar a função de deletar aluno pelo nome.

Miguel Sarti
- Exibir informações dos jogadores (tipo, estado, grupo, etc.).