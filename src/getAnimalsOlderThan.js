const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const searchAnimal = species.find(specie => specie.name === animal);
  const residents = searchAnimal.residents.every(resident => resident.age >= age);
  return residents;

  // return species.find((especie) => especie.name === animal).residents
  //   .every((item) => item.age >= age);
}

module.exports = getAnimalsOlderThan;
