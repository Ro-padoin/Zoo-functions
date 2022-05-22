const data = require('../data/zoo_data');

const { species } = data

function getSpeciesByIds(...ids) {
  return species.filter(specie => ids.includes(specie.id));
  // return species.filter((specie) => ids.find((id) => id === specie.id));

  // return species.reduce((acc, specie) => {
  //   ids.forEach((id) => {
  //     if (id === specie.id) return acc.push(specie)})
  //   return acc;
  // }, []);
}

// console.log(getSpeciesByIds('ef3778eb-2844-4c7c-b66c-f432073e1c6b', '0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
