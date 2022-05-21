import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.topHeader}>
      <h1>Weather App</h1>
      <p>
        Click a spot on the map to get the 5-day weather forecast for that area!
      </p>
    </header>
  );
};

export default Header;
