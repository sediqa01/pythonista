import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

const Asset = ({ spinner, src, message }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {spinner && <Spinner className={styles.Spinner} animation="border" />}
      {src && <img src={src} alt={message}  width={100} height={100}/>}
      {message && <p className={`${styles.text}`}>{message}</p>}
    </div>
  );
};

export default Asset;