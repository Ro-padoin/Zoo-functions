const data = require('../data/zoo_data');

const { species } = data

function getSpeciesByIds(...ids) {
  return species.filter(specie => ids.includes(specie.id));
}
module.exports = getSpeciesByIds;

// Outras formas de resolver:

  // return species.filter((specie) => ids.find((id) => id === specie.id));

  // return species.reduce((acc, specie) => {
  //   ids.forEach((id) => {
  //     if (id === specie.id) return acc.push(specie)})
  //   return acc;
  // }, []);