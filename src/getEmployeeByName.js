const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const findEmployees = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return findEmployees === undefined ? {} : findEmployees;

  // return employees.reduce((acc, employee) => {
  //   if (employee.firstName === employeeName || employee.lastName === employeeName) acc = employee;
  //   return acc;
  // }, {})

}

module.exports = getEmployeeByName;
