const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsibleForAnimal = employees.find((numeroId) => numeroId.id === id).responsibleFor[0]; // retorna os ID dos animals que o employee e responsavel.
  const animalResidents = species.find((specie) => specie.id === responsibleForAnimal).residents;
  const reduceAnimal =  animalResidents.reduce((older, specie) => {
    if (specie.age > older[2]) {
      return [specie.name, specie.sex, specie.age];
    }
    return older
  }, ['', '', 0]);
}

module.exports = getOldestFromFirstSpecies;

// Outra forma de resolver

// let result = { age: 0 };
// animalResidents.forEach((animal) => {
//   if (animal.age > result.age) {
//     result = animal;
//   }
// })

// return [ result.name, result.sex, result.age] ;

// const animals = animalResidents.sort((a, b) => b.age - a.age);

// return [animals[0].name, animals[0].sex, animals[0].age];