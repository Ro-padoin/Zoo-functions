const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((totalResidentes, residente) => {
      const obj = { ...totalResidentes }; 
      // const obj = Object.assign({}, totalResidentes);
      obj[residente.name] = residente.residents.length;
      return obj;
    }, {});

    // return species.map(specie => ({[specie.name]: specie.residents.length})); nao da certo assim
  }
  const { specie, sex } = animal;
  if (specie !== undefined && sex !== undefined) {
    const findSpecieName = species.find(({ name }) => name === specie);
    const filterSpecieSex = findSpecieName.residents.filter((residente) => residente.sex === sex);
    return filterSpecieSex.length;
  }
  if (specie !== undefined) {
    const specieList = species.find(({ name }) => name === specie)
    return specieList.residents.length;
  }
}

module.exports = countAnimals;
