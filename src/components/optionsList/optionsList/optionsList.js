import React, { useContext } from "react";
import CarContext from "../../../context/car-context";
import styles from "./optionsList.module.css";

function OptionsList() {
  const ctx = useContext(CarContext);
  return (
    <>
      <h2 className={styles.header}>Filter Options</h2>
      <ul className={styles["option-list"]}>
        <li>
          <button onClick={ctx.showAll}>All</button>{" "}
          <button onClick={ctx.showActive}>Available </button>{" "}
          <button onClick={ctx.showNoAcive}>Unavailable</button>{" "}
        </li>
        <li>
          <button onClick={ctx.showHighBatery}>High Battery</button>
          <button onClick={ctx.showMediumBatery}>Middle battery</button>
          <button onClick={ctx.showLowBatery}>Low battery</button>
        </li>
      </ul>
    </>
  );
}

export default OptionsList;
