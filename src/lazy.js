import React from "react";

import "./lazy.css";
import styles from "./lazy.module.css";

export default () => {
  return (
    <div className={`lazy ${styles.lazy}`}>
      Lazy content
    </div>
  );
}
