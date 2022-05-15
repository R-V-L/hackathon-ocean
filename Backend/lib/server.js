const AnimalsController = require("./controllers/AnimalsController");
const express = require("express");
const { response } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({ message: "¡Bienvenido al Hack The Ocean API!" });
});

app.get("/v1/animals/name/:name", (request, response) => {
    const name = request.params.name;
    const nameInAnimals = AnimalsController.getAnimalByName(name);
    response.json(nameInAnimals);
});

app.get("/v1/animals/scientificName/:name", (request, response) => {
    const name = request.params.name;
    const scientificNameInAnimals = AnimalsController.getAnimalByScientificName(name);
    response.json(scientificNameInAnimals);
});

app.get("/v1/animals/status/:status", (request, response) => {
    const status = request.params.status;
    const statusInAnimals = AnimalsController.getAnimalByStatus(status);
    response.json(statusInAnimals);
});

app.listen(port, () => {
    console.log(`Acceder al Hack The Ocean API en: http://localhost:${port}`);
});