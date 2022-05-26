const { species } = require('../data/zoo_data');

function sortElements(element, sorted) {
  if (sorted) {
    return element.sort();
  }
  return element;
};

function getAnimalMap(options = {}) {
  const { includeNames, sex, sorted } = options;

  return species.reduce((totalAnimalMap, specie) => {

    if (!includeNames) {
      totalAnimalMap[specie.location].push(specie.name);
      return totalAnimalMap;      
    } 
    
    if (sex) {
      const filterResidents = specie.residents.filter((resident) => resident.sex === sex)
      totalAnimalMap[specie.location].push({
        [specie.name]: sortElements(filterResidents.map((resident) => resident.name), sorted),
      });
      return totalAnimalMap;
    } 
    
    totalAnimalMap[specie.location].push({
      [specie.name]: sortElements(specie.residents.map((resident) => resident.name), sorted),
    });

    return totalAnimalMap;

  }, { NE: [], NW: [], SE: [], SW: [] });
}

module.exports = getAnimalMap;
