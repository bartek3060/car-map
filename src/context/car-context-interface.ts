import { CarModel } from "../shared/models/car.model";

export interface CarContextInterface {
  filteredCars: CarModel[];
  displayAllCars: () => void;
  displayAvailableCars: () => void;
  displayUnavailableCars: () => void;
  displayCarsWithHighBatteryLevel: () => void;
  displayCarsWithMediumBatteryLevel: () => void;
  displayCarsWithLowBatteryLevel: () => void;
}
