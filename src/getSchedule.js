const { hours, species } = require('../data/zoo_data');

const animalName = species.map((animal) => animal.name);

const daysOfTheWeek = Object.keys(hours);

function scheduleTheMonday(scheduleTarget) {
  return {
    [scheduleTarget]: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
}

function schedulePerAnimal(scheduleTarget) {
  const individualAgenda = species.find((specie) => specie.name.includes(scheduleTarget));
  return individualAgenda.availability;
}

function scheduleByDay(scheduleTarget, { open, close }, exhibition) {
  return {
    [scheduleTarget]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition,
    },
  };
}

function getSchedule(scheduleTarget) {
  if (!daysOfTheWeek.includes(scheduleTarget) && !animalName.includes(scheduleTarget)) {
    return daysOfTheWeek.reduce((entireAgenda, day) => ({
      ...entireAgenda,
      ...getSchedule(day),
    }), {});
  }

  if (animalName.includes(scheduleTarget)) return schedulePerAnimal(scheduleTarget);
  
  const filterExhibition = species.filter(({ availability }) => availability
    .includes(scheduleTarget));

  const mapExhibition = filterExhibition.map(({ name }) => name);

  const agenda = hours[scheduleTarget];  

  if (scheduleTarget === 'Monday') return scheduleTheMonday(scheduleTarget);

  return scheduleByDay(scheduleTarget, agenda, mapExhibition);
}

console.log(schedulePerAnimal('penguins'));

module.exports = getSchedule;
