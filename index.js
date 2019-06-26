const express = require("express");

const server = express();

server.use(express.json());

// projetos iniciais pre definidos
const projects = [
  { id: "1", title: "Novo projeto", tasks: ["Nova tarefa"] },
  { id: "2", title: "Projeto dois", tasks: [] }
];

// contador de requisições
let count_calls = 0;

// middleware contagem requisições
server.use((req, res, next) => {
  next();

  count_calls++;
  console.log(count_calls);
});

// middleware se existe projeto
function checkProjectInArray(req, res, next) {
  const project = projects.find(project => project.id === req.params.index);

  if (!project)
    return res.status(400).json({ error: "Project does not exists" });

  req.project = project;

  return next();
}

// listar todos os projetos
server.get("/projects", (req, res) => {
  return res.json(projects);
});

// listar projeto especifico
server.get("/projects/:index", checkProjectInArray, (req, res) => {
  return res.json(req.project);
});

// alterar titulo projeto
server.put("/projects/:index", checkProjectInArray, (req, res) => {
  const { title } = req.body;

  req.project.title = title;

  return res.json(projects);
});

// adicionar projeto
server.post("/projects", (req, res) => {
  const { id, title, tasks } = req.body;

  const project = { id: id, title: title, tasks: tasks };

  projects.push(project);

  return res.json(projects);
});

// adicionar task ao projeto
server.put("/projects/:index/tasks", checkProjectInArray, (req, res) => {
  const { task } = req.body;

  req.project.tasks.push(task);

  return res.json(projects);
});

// deletar projeto
server.delete("/projects/:index", checkProjectInArray, (req, res) => {
  const { index } = req.params;

  projects.splice(projects.indexOf(req.project), 1);

  return res.json(projects);
});

server.listen(3000);
