const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsibleForAnimal = employees.find((numeroId) => numeroId.id === id).responsibleFor[0]; // retorna os ID dos animals que o employee e responsavel.
  const animalResidents = species.find((specie) => specie.id === responsibleForAnimal).residents;
  return animalResidents.reduce((older, specie) => {
    if (specie.age > older[2]) {
      return [specie.name, specie.sex, specie.age];
    }
    return older;
  }, ['', '', 0]);
}

module.exports = getOldestFromFirstSpecies;
