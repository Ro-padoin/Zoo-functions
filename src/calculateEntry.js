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

// const countTotalPrice = (entrants) => entrants.reduce((acc, { age }) => {
//   const { adult, senior, child } = prices;
//   if (age < 18) return Number((acc + child).toFixed(2));
//   if (age >= 50) return Number((acc + senior).toFixed(2));
//   return Number((acc + adult).toFixed(2));
// }, 0);

function calculateEntry(entrants) {

  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  // const precos = countTotalPrice(entrants);
  const { child, adult, senior } = countEntrants(entrants);
  return (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
}

console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
