const AnimalsService = require("../../lib/services/AnimalsService");
const animals = [{ nombre: "Vaquita Marina", nombre_cientifico: "Phocoena sinus", estatus: "En peligro de extinción" }, { nombre: "Tortuga Laud", nombre_cientifico: "Dermochelys coriacea", estatus: "En peligro de extinción"} ];

describe("Test para AnimalsService", () => {
    test("Regresar animal por nombre", () => {
        expect(AnimalsService.filterByName(animals, "marina")).toEqual([{ nombre: "Vaquita Marina", nombre_cientifico: "Phocoena sinus", estatus: "En peligro de extinción" }]);
    }),
    test("Regresar animal por nombre cientifico", () => {
        expect(AnimalsService.filterByScientificName(animals, "Phocoena")).toEqual([{ nombre: "Vaquita Marina", nombre_cientifico: "Phocoena sinus", estatus: "En peligro de extinción" }]);
    }),
    test("Regresar animal por estatus", () => {
        expect(AnimalsService.filterByStatus(animals, "En peligro de extinción")).toEqual([{ nombre: "Vaquita Marina", nombre_cientifico: "Phocoena sinus", estatus: "En peligro de extinción" }, { nombre: "Tortuga Laud", nombre_cientifico: "Dermochelys coriacea", estatus: "En peligro de extinción" }]);
    });
});