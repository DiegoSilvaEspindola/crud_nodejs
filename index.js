const express = require("express");

const server = express();

server.use(express.json());

const cursos = ["letras", "psicologia", "arquitetura"];

//retornar um curso
server.get("/cursos/:index", (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index]);
});

//retornar todos os cursos
server.get("/cursos", (req, res) => {
  res.json(cursos);
});

//criar um novo curso
server.post("/cursos", (req, res) => {
  const { curso } = req.body;
  cursos.push(curso);

  return res.json(cursos);
});

//atualizar um curso
server.put("/cursos/:index", (req, res) => {
  const { index } = req.params;
  const { curso } = req.body;

  cursos[index] = curso;
  return res.json(cursos);
});

//deletar um curso
server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);
  return res.json({ message: "O curso foi deletado" });
});

server.listen(3000);
