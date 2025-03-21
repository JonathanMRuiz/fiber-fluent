import React from "react";
import styles from "./styles"; // Importamos los estilos desde styles.js

const FeatureCard = ({ image, title, description }) => (
  <div className={styles.card}>
    <img src={image} alt={title} className={styles.image} />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
  </div>
);

export default FeatureCard;
