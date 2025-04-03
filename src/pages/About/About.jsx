import { motion } from "framer-motion";
import styles from "./styles"; // Importamos los estilos
import PeterMerloImage from "../../assets/peter_merlo.png";
import LeodanysSopedraImage from "../../assets/leodanys_sopedra.png";

export default function AboutUs() {
  return (
    <div className={`${styles.container} mb-20 mt-10`}>
      {/* Sección de Peter Merlo */}
      <div className={styles.section}>
        {/* Imagen a la izquierda con animación */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.imageContainer}
        >
          <img src={PeterMerloImage} alt="Peter Merlo" className={styles.image} />
        </motion.div>

        {/* Texto a la derecha con animación */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.textContainer}
        >
          <h2 className={styles.title}>PETER MERLO – PRESIDENT, FIBER FLUENT LLC</h2>
          <p className={styles.paragraph}>
            Founded in 2022, Fiber Fluent LLC is the vision of Peter Merlo, a seasoned construction professional and U.S. Army veteran. Peter proudly served with the 173rd Airborne Combat Team in the early 2000s, where he developed the discipline, leadership, and problem-solving skills that now drive Fiber Fluent’s success.
            <br /><br />
            With over a decade of experience in the construction industry, Peter has worked across both residential and commercial sectors. Before launching Fiber Fluent, he supervised underground utility installations and served as a land development project manager for D.R. Horton, America’s largest publicly traded homebuilder. His deep understanding of underground infrastructure, combined with his commitment to excellence, ensures that Fiber Fluent delivers top-tier solutions for electrical and communications underground networks, other utility installations, and large-scale developments.
            <br /><br />
            Under Peter’s leadership, Fiber Fluent LLC is built on integrity, efficiency, and precision—providing clients with seamless underground integration solutions they can trust.
          </p>
        </motion.div>
      </div>

      {/* Sección de Leodanys Sopedra */}
      <div className={styles.sectionReverse}>
        {/* Imagen a la derecha con animación */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.imageContainer}
        >
          <img src={LeodanysSopedraImage} alt="Leodanys Sopedra" className={styles.imageShadow} />
        </motion.div>

        {/* Texto a la izquierda con animación */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.textContainer}
        >
          <h2 className={styles.title}>ABOUT OUR OPERATIONS MANAGER</h2>
          <p className={styles.paragraphMargin}>
            Leodanys Sopedra is a seasoned professional with over 20 years of experience in the underground installation of networks for major providers such as Comcast, AT&T, and FPL. His expertise extends to the installation of street light poles, ensuring safe and efficient integration with existing infrastructure. Throughout his career, Leodanys has worked with industry-leading companies, including Enterprise Electrical, Ferreira Construction, and Infratech Corp, contributing to large-scale utility projects. As the right hand of the president of Fiber Fluent, he plays a crucial role in overseeing operations. Ensuring project efficiency, and maintaining the company’s high standards in underground integration.
          </p>
        </motion.div>
      </div>

      <div className={styles.section}>
        {/* Imagen a la izquierda con animación */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.imageContainer}
        >
          <img src={PeterMerloImage} alt="Peter Merlo" className={styles.image} />
        </motion.div>

        {/* Texto a la derecha con animación */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.textContainer}
        >
          <h2 className={styles.title}>PETER MERLO – PRESIDENT, FIBER FLUENT LLC</h2>
          <p className={styles.paragraph}>
            Founded in 2022, Fiber Fluent LLC is the vision of Peter Merlo, a seasoned construction professional and U.S. Army veteran. Peter proudly served with the 173rd Airborne Combat Team in the early 2000s, where he developed the discipline, leadership, and problem-solving skills that now drive Fiber Fluent’s success.
            <br /><br />
            With over a decade of experience in the construction industry, Peter has worked across both residential and commercial sectors. Before launching Fiber Fluent, he supervised underground utility installations and served as a land development project manager for D.R. Horton, America’s largest publicly traded homebuilder. His deep understanding of underground infrastructure, combined with his commitment to excellence, ensures that Fiber Fluent delivers top-tier solutions for electrical and communications underground networks, other utility installations, and large-scale developments.
            <br /><br />
            Under Peter’s leadership, Fiber Fluent LLC is built on integrity, efficiency, and precision—providing clients with seamless underground integration solutions they can trust.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
