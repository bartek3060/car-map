import { SingleCarProps } from "../cars/single-car-props";

export interface PopUpProps extends SingleCarProps {
  closeModal: () => void;
}
