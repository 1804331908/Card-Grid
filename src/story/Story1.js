import React from "react";
import { products } from "../data/data";
import styles from "./Story1.module.css";

function Story1(props) {
  const pStyle = {
    opacity: 0.5,
    fontFamily: "Raleway",
    fontSize: "17px",
    fontWeight: 400,
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.43,
    letterSpacing: ".35px",
    textAlign: "left",
    color: "#000",
    margin: "0.3em 0",
    whiteSpace: "preWrap",
  };
  const card = {
    boxShadow: "0 5px 20px 0 rgb(0 0 0 / 10%)",
    borderRadius: "5px",
    border: "1px solid rgba(0,168,255,.3)",
    width: "20rem",
    marginBottom: "16px",
    cursor: "pointer",
  };

  return (
    <div className={styles.container}>
      {products.map((product) => {
        return (
          <div className="card" style={card}>
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className={styles.name}>
                {product.name}
                <span className={styles.date}> | {product.date}</span>
              </p>
              <p className="card-text" style={pStyle}>
                {product.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Story1;