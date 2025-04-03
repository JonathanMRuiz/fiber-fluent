import { motion } from "framer-motion";
import styles from "./styles"; // Importamos los estilos
import PeterMerloImage from "../../assets/peter_merlo.jpg";
import LeodanysSopedraImage from "../../assets/leodanys_sopedra.jpg";
import CarlosAbreu from '../../assets/carlos_abreu.jpg'
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
          <img src={CarlosAbreu} alt="Carlos Abreu" className={styles.imageShadow} />
        </motion.div>

        {/* Texto a la izquierda con animación */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.textContainer}
        >
          <h2 className={styles.title}>CARLOS ABREU - VICE PRESIDENT, FIBER FLUENT LLC</h2>
          <p className={styles.paragraphMargin}>
          Carlos began his professional journey after graduating from South Miami High School in 1984, later completing EMT and paramedic training at Broward Medical Arts. He spent over 12 years working in his family’s A/C business, where he gained practical knowledge in mechanical systems and developed a strong foundation in customer service and field operations.
          <br/><br/>
          In 2004, Carlos entered the natural gas and propane industry, sharpening his skills in a family-owned gas business. By 2008, he launched Last Minute Gas Contractor, a company known for stepping up when others fall short—delivering expert, last-minute gas installations and services with a focus on safety, speed, and quality.
          <br/><br/>
          Now, as VP of Fiber Fluent, Carlos brings the same hustle and high standards to the underground communications and electrical infrastructure world. His leadership helps drive the company’s commitment to excellence, whether it’s trenching, directional drilling, or missile bore conduit installation. Known for his hands-on approach and problem-solving mindset, Carlos plays a key role in ensuring Fiber Fluent delivers on its promise to be a dependable, high-performance contractor in a fast-moving industry.
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
          <img src={LeodanysSopedraImage} alt="Leodanys Sopedra Image" className={styles.image} />
        </motion.div>

        {/* Texto a la derecha con animación */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.textContainer}
        >
          <h2 className={styles.title}>LEODANYS SOPEDRA - OPERATIONS MANAGER, FIBER FLUENT LLC</h2>
          <p className={styles.paragraph}>
          Seasoned professional with over 20 years of experience in the underground installation of networks for major providers such as Comcast, AT&T, and FPL. His expertise extends to the installation of street light poles, ensuring safe and efficient integration with existing infrastructure. Throughout his career, Leodanys has worked with industry-leading companies, including Enterprise Electrical, Ferreira Construction, and Infratech Corp, contributing to large-scale utility projects. As the right hand of the president of Fiber Fluent, he plays a crucial role in overseeing operations. Ensuring project efficiency, and maintaining the company’s high standards in underground integration.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
