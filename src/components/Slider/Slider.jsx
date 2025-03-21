import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles";
import Lantern1 from "../../assets/lantern_1.png";
import Lantern2 from "../../assets/lantern_2.png";
import Lantern3 from "../../assets/lantern_3.png";
import Lantern4 from "../../assets/lantern_4.png";
import Lantern5 from "../../assets/lantern_5.png";
import Lantern6 from "../../assets/lantern_6.png";

// Lista de imágenes
const images = [Lantern1, Lantern2, Lantern3, Lantern4, Lantern5, Lantern6];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className={styles.section}
      id="installation"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Texto */}
          <div className={styles.textContainer}>
            <h2 className={styles.title}>
              Fiberglass Street Light Poles – Up to 20 Feet Tall
            </h2>
            <p className={styles.paragraph}>
            From modern solar-powered fixtures to classic decorative designs, we provide top-tier installation services for LED and conventional lighting. Our solutions enhance visibility and security in streets, parking lots, and other public spaces while ensuring durability, efficiency, and compliance with the highest safety standards.
            <br/><br/>
            At Fiber Fluent, we are expanding our capabilities by investing in advanced equipment to install taller light poles, positioning ourselves for larger projects in the near future. No matter the style or lighting technology, we deliver reliable, high-quality infrastructure solutions tailored to the needs of growing communities and businesses.
            </p>
          </div>

          {/* Imagen con animación */}
          <div className={styles.imageContainer}>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt="Lantern Image"
                className={styles.image}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Slider;
