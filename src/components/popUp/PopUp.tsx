import React from "react";

import styles from "./PopUp.module.css";
import { PopUpProps } from "./pop-up-props";

export const Backdrop = ({ closeModal }: () => void) => {
  return (
    <div className={styles.backdrop} onClick={closeModal}>
      {" "}
      Backdrop{" "}
    </div>
  );
};
const Modal = (props: PopUpProps) => {
  return (
    <div className={styles.modal}>
      <img src={props.image} alt="" />
      <div className={styles.container}>
        <h5> Type: </h5>
        <div>{props.type}</div>{" "}
      </div>{" "}
      <div className={styles.container}>
        <h5> Status: </h5>
        <div>{props.status}</div>{" "}
      </div>{" "}
      <div className={styles.container}>
        <h5> PlatesNumber: </h5>
        <div>{props.platesNumber}</div>
      </div>{" "}
      <div className={styles.container}>
        <h5> Range: </h5>{" "}
        <div>
          {" "}
          {props.rangeKm}
          km{" "}
        </div>{" "}
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={props.closeModal}> Close</button>{" "}
      </div>{" "}
    </div>
  );
};

const PopUp = (props: PopUpProps) => {
  return (
    <div>
      <Backdrop closeModal={props.closeModal}> </Backdrop>{" "}
      <Modal {...props}> </Modal>{" "}
    </div>
  );
};
export default PopUp;
