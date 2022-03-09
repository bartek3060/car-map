import React, { useContext } from "react";
import CarContext from "../../../context/car-context";
import { Backdrop } from "../../popUp/PopUp";
import styles from "./optionsList.module.css";

function OptionsList(props) {
  const ctx = useContext(CarContext);
  return (
    <>
      {" "}
      {!props.active && (
        <div
          className="burger"
          onClick={() => props.setActive((prev) => !prev)}
        >
          {" "}
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
      )}{" "}
      {props.active && (
        <ul
          onClick={() => props.setActive((prev) => !prev)}
          className={`${styles["option-list"]} `}
        >
          <li>
            <button onClick={ctx.showAll}> All </button>{" "}
            <button onClick={ctx.showActive}> Available </button>{" "}
            <button onClick={ctx.showNoAcive}> Unavailable </button>{" "}
          </li>{" "}
          <li>
            <button onClick={ctx.showHighBatery}> High Battery </button>{" "}
            <button onClick={ctx.showMediumBatery}> Middle battery </button>{" "}
            <button onClick={ctx.showLowBatery}> Low battery </button>{" "}
          </li>{" "}
          <li className={styles.closeLi}>
            <button> Hide Options </button>{" "}
          </li>{" "}
        </ul>
      )}{" "}
      <h2
        onClick={() => props.setActive((prev) => !prev)}
        className={styles.header}
      >
        Filter Options{" "}
      </h2>{" "}
    </>
  );
}

export default OptionsList;
