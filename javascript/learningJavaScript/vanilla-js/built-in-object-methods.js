const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot);
// console.log(robotKeys);

const robotEntries = Object.entries(robot);
// console.log(robotEntries);

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(robot);
console.log(newRobot);