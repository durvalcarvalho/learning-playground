
const Airplane = {
}

let availableAirplanes = [
  { 
    name: 'AeroJet', 
    fuelCapacity: 800, 
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
  },
  { 
    name: 'SkyJet', 
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants']
  }
];

let flightRequirements = {
  requiredStaff: 4
}

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if(availableStaff.length < requiredStaff ) {
    return false;
  }

  return true;
}


export { 
  availableAirplanes,  
  flightRequirements, 
  meetsStaffRequirements  
};
