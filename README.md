# API Rest em NodeJS

Resolução do desáfio referente à https://github.com/Rocketseat/bootcamp-gostack-desafio-01

## Rotas

* POST /projects A rota deve receber id e title dentro corpo de cadastrar um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] };

* GET /projects Lista todos projetos e suas tarefas;

* PUT /projects/:id Alterar apenas o título do projeto com o id presente nos parâmetros da rota;

* DELETE /projects/:id Deletar o projeto com o id presente nos parâmetros da rota;

* POST /projects/:id/tasks Receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id;
