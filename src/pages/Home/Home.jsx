import { motion } from 'framer-motion';
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import Grid from "../../components/Grid/Grid";
import Carrousel from "../../components/Carrousel/Carrousel";
import ImageSlider from "../../components/Slider/Slider";
import { styles } from "./styles";
import Feature1 from '../../assets/feature_1.png';
import Feature2 from '../../assets/feature_2.png';
import Feature3 from '../../assets/illumination_icon.png';
import Feature4 from '../../assets/feature_4.png';
import NightWork from '../../assets/night_work.jpeg';
import EasyStreetImage from '../../assets/easystreet.jpeg';

const featureItems = [
  { image: Feature1, title: "Feature 1", description: "This is the first feature." },
  { image: Feature2, title: "Excavation", description: "Precision underground work" },
  { image: Feature3, title: "Solar Lighting", description: "Sustainable street lighting." },
  { image: Feature4, title: "Night Work", description: "Safe and efficient operations" },
];

export default function Home() {
  return (
    <div className='mb-10'>
      <Carrousel />
      <div className={styles.container}>
        <div className={styles.section}>
          {/* Section 1 - Services */}
          <motion.section
            id="services"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>Services</h2>
            <Grid columns={4}>
              {featureItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.featureCardWrapper}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <FeatureCard image={item.image} title={item.title} description={item.description} />
                </motion.div>
              ))}
            </Grid>
          </motion.section>

          {/* Section 2 - Installation */}
          <motion.section
            className="bg-white py-16 px-6"
            id="installation"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start">
              <div className="flex-1 mb-8 lg:mb-0">
                <img
                  src={EasyStreetImage}
                  alt="Installation of small cell pole"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1 pl-0 lg:pl-12">
                <h2 className="text-4xl font-extrabold mb-6 text-[#17254E]">
                  Installation of Small Cell Poles
                </h2>
                <p className="text-lg text-[#17254E] mb-6">
                  Enhancing wireless connectivity and network coverage for growing communities, these poles play a crucial role in supporting high-speed communication and future technologies.
                </p>
                <div className="mt-12">
                  <a href="/contact" className={styles.ctaButton}>Get in Touch</a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 3 - Slider */}
          <ImageSlider />

          <motion.section
            className="bg-white py-16 px-6"
            id="night_work"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start">
              <div className="flex-1 mb-8 lg:mb-0 flex justify-center">
                <img
                  src={NightWork}
                  alt="Installation of small cell pole"
                  className="h-[35rem] rounded-lg "
                />
              </div>
              <div className="flex-1 pl-0 lg:pl-12 ">
                <h2 className="text-4xl font-extrabold mb-6 text-[#17254E]">
                Night Work – Precision and Efficiency After Dark
                </h2>
                <p className="text-lg text-[#17254E] mb-6">
                Working at night presents unique challenges and opportunities, requiring precision, adaptability, and specialized equipment to ensure safety and efficiency. Under the glow of streetlights and work lamps, Fiber Fluent teams install essential underground infrastructure while minimizing disruptions to the city’s daytime flow.
                <br/><br/>
                In this image, a dedicated team member carefully guides an orange conduit into place as part of the installation. The nighttime setting—vehicles passing in the background and an excavator in motion—highlights the skill and coordination required to execute critical projects after dark. Strategic planning and proper lighting transform the quiet of the night into a productive window for progress.
                <br/><br/>
                This scene is a testament to the dedication and expertise that drive the future—one line at a time.
                </p>
                <div className="mt-12">
                  <a href="/contact" className={styles.ctaButton}>Get in Touch</a>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
