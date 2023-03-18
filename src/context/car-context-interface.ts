import { CarModel } from "../shared/models/car.model";

export interface CarContextInterface {
  carDataToDisplay: CarModel[];
  showAll: () => void;
  showActive: () => void;
  showNoAcive: () => void;
  showHighBatery: () => void;
  showMediumBatery: () => void;
  showLowBatery: () => void;
}
