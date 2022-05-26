const { employees } = require('../data/zoo_data');

function isManager(id) {
  const searchaManager = employees
  .reduce((totalGerente, employee) => totalGerente.concat(...employee.managers), []);
  // .reduce((totalGerente, employee) => {
  //   totalGerente.push(...employee.managers)
  //   return totalGerente;
  // }, []);
  return searchaManager.includes(id);
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  if (isManager(managerId)) {
    const filterManager = employees
      .filter((employee) => employee.managers.some((manager) => manager === managerId));

    const result = filterManager.map(({ firstName, lastName }) => `${firstName} ${lastName}`);

    return result;
  }
}

module.exports = { isManager, getRelatedEmployees };
