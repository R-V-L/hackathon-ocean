class AnimalsService {
    static filterByName(animals, name) {
        const animalsByName = animals.filter(animal => animal.nombre.toLowerCase().includes(name.toLowerCase()));
        return animalsByName;
    }
    static filterByScientificName(animals, name) {
        const animalsByScientificName = animals.filter(animal => animal.nombre_cientifico.toLowerCase().includes(name.toLowerCase()));
        return animalsByScientificName;
    }
    static filterByStatus(animals, status) {
        const animalByStatus = animals.filter(animal => animal.estatus === status);
        return animalByStatus;
    }
}

module.exports = AnimalsService;