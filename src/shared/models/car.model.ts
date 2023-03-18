import { CoordsModel } from "./coords.model";
import { StatusEnum } from "../enums/status.enum";
import { TypeEnum } from "../enums/type.enum";

export interface CarModel {
  id: string;
  position: CoordsModel;
  status: StatusEnum;
  batteryLevelPct: number;
  platesNumber: string;
  type: TypeEnum;
  rangeKm: number;
  image: string;
}
