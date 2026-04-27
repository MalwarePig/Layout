const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const productos = [
  {
    id: 1,
    Nombre: "Taladro",
    Descripcion: "Taladro percutor",
    Cantidad: 5,
    Estatus: "Nuevo",
  },
  {
    id: 2,
    Nombre: "Martillo",
    Descripcion: "Martillo de carpintero",
    Cantidad: 10,
    Estatus: "Nuevo",
  },
  {
    id: 3,
    Nombre: "Sierra",
    Descripcion: "Sierra circular",
    Cantidad: 3,
    Estatus: "Nuevo",
  },
  {
    id: 4,
    Nombre: "Taladro 2",
    Descripcion: "Taladro percutor 2",
    Cantidad: 2,
    Estatus: "Usado",
  },
  {
    id: 5,
    Nombre: "Taladro 3",
    Descripcion: "Taladro percutor 3",
    Cantidad: 3,
    Estatus: "Usado",
  },
];

const personal = [
  {
    id: 1,
    Nombre: "Pedro Pérez",
    Planta: "Planta 1",
  },
  {
    id: 2,
    Nombre: "Maria Garcia",
    Planta: "Planta 1",
  },
  {
    id: 3,
    Nombre: "Pedro Sanchez",
    Planta: "Planta 2",
  },
  {
    id: 4,
    Nombre: "Ana Lopez",
    Planta: "Planta 2",
  },
];

app.get("/search", (req, res) => {
  const q = req.query.q?.toLowerCase() || "";

  const resultados = productos.filter((p) =>
    p.Nombre.toLowerCase().includes(q),
  );

  res.json({ results: resultados });
});

app.get("/personal", (req, res) => {
  const q = req.query.q?.toLowerCase() || "";

  const resultados = personal.filter((p) => p.Nombre.toLowerCase().includes(q));

  res.json({ results: resultados });
});

app.listen(3000, () => {
  console.log("API corriendo en http://localhost:3000");
});
