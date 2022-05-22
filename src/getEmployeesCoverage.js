const { employees, species } = require('../data/zoo_data');

function getEmployeesCoverage() {
  if (dadosEmployee === undefined) return employees.map(getEmployeesCoverage); // recursividade: employees esta sendo mapeado e cada employee esta sendo passado a funcao.
  const { name, id } = dadosEmployee;
  const verificaEmployee = employees.find((employee) => employee
    .firstName === name || employee.lastName === name || employee.id === id);
  if (verificaEmployee === undefined) { throw new Error('Informações inválidas'); }
  const dadosAnimais = verificaEmployee.responsibleFor.reduce((acumulador, animalId) => {
    const especieEncontrada = species.find((especie) => especie.id === animalId);
    acumulador.species.push(especieEncontrada.name);
    acumulador.locations.push(especieEncontrada.location);
    return acumulador;
  }, { species: [], locations: [] });
  return {
    id: verificaEmployee.id,
    fullName: `${verificaEmployee.firstName} ${verificaEmployee.lastName}`,
    species: dadosAnimais.species,
    locations: dadosAnimais.locations,
  };
}

module.exports = getEmployeesCoverage;
