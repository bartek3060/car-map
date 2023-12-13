import React, { FC } from "react";
import { Backdrop } from "../PopUp/PopUp";
import styles from "./Filters.module.css";
import { useCarContext } from "../../hooks/useCarContext";

interface Props {
  active: boolean;
  setActive: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

export const Filters: FC<Props> = (props) => {
  const {
    displayAllCars,
    displayAvailableCars,
    displayUnavailableCars,
    displayCarsWithHighBatteryLevel,
    displayCarsWithMediumBatteryLevel,
    displayCarsWithLowBatteryLevel,
  } = useCarContext();
  return (
    <>
      {!props.active && (
        <div
          className="burger"
          onClick={() => props.setActive((prev) => !prev)}
        >
          <i className={` fa-solid fa-bars ${styles.burger}`}> </i>
        </div>
      )}
      {props.active && (
        <div
          className="closeBurger"
          onClick={() => props.setActive((prev) => !prev)}
        >
          <i className={` fa-solid fa-x ${styles.closeBurger}`}></i>
        </div>
      )}
      {props.active && (
        <Backdrop
          closeModal={() => props.setActive((prev) => !prev)}
        ></Backdrop>
      )}
      {props.active && (
        <ul
          onClick={() => props.setActive((prev) => !prev)}
          className={`${styles["option-list"]} `}
        >
          <li>
            <button onClick={displayAllCars}> All</button>
            <button onClick={displayAvailableCars}> Available</button>{" "}
            <button onClick={displayUnavailableCars}> Unavailable</button>{" "}
          </li>
          <li>
            <button onClick={displayCarsWithHighBatteryLevel}> High Battery</button>{" "}
            <button onClick={displayCarsWithMediumBatteryLevel}> Middle battery</button>{" "}
            <button onClick={displayCarsWithLowBatteryLevel}> Low battery</button>{" "}
          </li>
          <li className={styles.closeLi}>
            <button> Hide Options</button>
          </li>
        </ul>
      )}
      <h2
        onClick={() => props.setActive((prev) => !prev)}
        className={styles.header}
      >
        Filter Options
      </h2>
    </>
  );
};

export default Filters;
