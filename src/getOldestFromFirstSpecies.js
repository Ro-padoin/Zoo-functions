const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const primeiroAnimalResp = employees.find((numeroId) => numeroId.id === id).responsibleFor[0]; // retorna os ID dos animals que o employee e responsavel.
  const animal = species.find((especie) => especie.id === primeiroAnimalResp).residents;
  return animal.reduce((maisVelho, especie) => {
    if (especie.age > maisVelho[2]) {
      return [especie.name, especie.sex, especie.age];
    }
    return maisVelho;
  }, ['', '', 0]);
}

module.exports = getOldestFromFirstSpecies;
