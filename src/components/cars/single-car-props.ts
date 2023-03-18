import { CarModel } from "../../shared/models/car.model";
import { StatusEnum } from "../../shared/enums/status.enum";

export interface SingleCarProps extends CarModel {
  status: StatusEnum;
}
