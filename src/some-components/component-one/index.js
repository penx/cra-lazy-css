import React from "react";

import "./index.css";
import styles from "./index.module.css";

export default () => {
  return (
    <div className={`component1 ${styles.component1}`}>
      Component 1
    </div>
  );
}
