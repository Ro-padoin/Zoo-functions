const { species } = require('../data/zoo_data');

function getAnimalBySex(sex, template) {
  return species.reduce((totalSpecies, specie) => {
    const { location, name, residents } = specie;
    totalSpecies[location] = species.map((resident) => 
    );
    return totalSpecies;
  }, { ...template });
  
}

function getAnimalMap(options) {
  const template = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  }

  if (!options.includeNames && options.sex) {
    console.log(options.sex);
    return getAnimalBySex(options.sex, template);
  }

//   let result = species.reduce((result, { location, name, residents }) => {
//     let _residents = [...residents];
//     if (sex) {
//       _residents = _residents.filter(resident => resident.sex === sex);
//     }
//     const residentsNames = _residents.map(resident => resident.name);
//     if (sorted) {
//       residentsNames.sort();
//     }
//     if (residentsNames.length) result[location][name] = residentsNames;
//     return result;
//   }, { ...template });

//   return result;
}

console.log(getAnimalMap({ sex: 'female' }));

module.exports = getAnimalMap;
