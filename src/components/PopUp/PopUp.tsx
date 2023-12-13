import React, { FC } from "react";

import styles from "./PopUp.module.css";
import { CarModel } from "../../shared/models/car.model";
 interface Props extends CarModel {
  closeModal: () => void;
}

export const Backdrop = ({ closeModal }: () => void) => {
  return (
    <div className={styles.backdrop} onClick={closeModal}></div>
  );
};
const Modal:FC<Props> = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}><img src={props.image} alt="" /></div>
      <div className={styles.container}>
        <h5> Vehicle type: </h5>
        <div>{props.type}</div>
      </div>
      <div className={styles.container}>
        <h5> Status of the car: </h5>
        <div>{props.status}</div>
      </div>
      <div className={styles.container}>
        <h5> Plates number: </h5>
        <div>{props.platesNumber}</div>
      </div>
      <div className={styles.container}>
        <h5> Available distance: </h5>
        <div>

          {props.rangeKm}
          km
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={props.closeModal}> Close</button>
      </div>
    </div>
  );
};

const PopUp:FC<Props> = (props) => {
  return (
    <div>
      <Backdrop closeModal={props.closeModal}> </Backdrop>
      <Modal {...props}> </Modal>
    </div>
  );
};
export default PopUp;
