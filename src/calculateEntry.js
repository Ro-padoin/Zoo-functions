const { prices } = require('../data/zoo_data');

const countByAgeGroup = (entrants) => entrants.reduce((populacao, { age }) => {
  let { adult, child, senior } = populacao;
  if (age < 50 && age >= 18) adult += 1;
  if (age < 18) child += 1;
  if (age >= 50) senior += 1;
  return { adult, child, senior };
}, { adult: 0, child: 0, senior: 0 });

function countEntrants(entrants) {
  if (entrants === undefined) return 0;
  return countByAgeGroup(entrants);
}

function calculateEntry(entrants) {

  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  const { child, adult, senior } = countEntrants(entrants);
  return (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
}

console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
