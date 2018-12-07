import React from "react";

import "./lazy.css";
import styles from "./lazy.module.css";

import { Component2 } from './some-components';

export default () => {
  return (
    <div className={`lazy ${styles.lazy}`}>
      Lazy content
      <Component2 />
    </div>
  );
}
