// only work on browsers
import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(
    (element) => { 
      console.log(`Fuel Capacity of ${element.name} : ${element.fuelCapacity}`);
    }
  );
}

displayFuelCapacity();