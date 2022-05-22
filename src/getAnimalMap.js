const data = require('../data/zoo_data');

function getAnimalMap(options) {
  const template = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  }
  
  if (!options) {
    return data.species.reduce((result, {location, name}) => {
      if(!result[location].includes(name)) {
        result[location].push(name);
      }
      return result;
    }, {...template});
  }
  const {sorted, sex } = options;

  let result = data.species.reduce((result, {location, name, residents}) => {
    let _residents = [...residents];
    if (sex) {
      _residents = _residents.filter(resident => resident.sex === sex);
    }
    const residentsNames = _residents.map(resident => resident.name);
    if (sorted) {
      residentsNames.sort();
    }
    if (residentsNames.length) result[location][name] = residentsNames;
    return result;
  }, {...template});

  return result;
}

// console.log(getAnimalMap({includeNames: true, sex: 'male', sorted: true}));

module.exports = getAnimalMap;
