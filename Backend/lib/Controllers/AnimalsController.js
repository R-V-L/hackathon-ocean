const Reader = require("../../lib/utils/Reader");
const AnimalsService = require("../services/AnimalsService");
const animals = Reader.readJsonFile("animals.json");

class AnimalsController {
    static getAnimalByName(name) {
        const nameInAnimals = AnimalsService.filterByName(animals, name);
        return nameInAnimals;
    }
    static getAnimalByScientificName(name) {
        const scientificNameInAnimals = AnimalsService.filterByScientificName(animals, name);
        return scientificNameInAnimals;
    }
    static getAnimalByStatus(status) {
        const statusInAnimals = AnimalsService.filterByStatus(animals, status);
        return statusInAnimals;
    }
}

module.exports = AnimalsController;