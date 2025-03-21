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

      {/* Introduction Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 text-[#17254E]">Introduction</h2>
          <p className="text-lg text-[#17254E] mb-6">
            At Fiber Fluent LLC, we are proud to be a veteran-owned underground infrastructure company specializing in communications and electrical installations. Founded by Peter Merlo, a former member of the 173rd Airborne Combat Team and a seasoned industry professional with over a decade of experience in construction and land development, our company was built on a foundation of integrity, precision, and hard-earned expertise.
          </p>
          <p className="text-lg text-[#17254E] mb-6">
            With deep roots in underground utilities and community development, Fiber Fluent delivers tailored solutions for primary, secondary, and street lighting infrastructure, as well as communications conduit systems. We support residential, commercial, and municipal projects with services designed to meet modern demands for power and connectivity.
          </p>
          <p className="text-lg text-[#17254E] mb-6">
            Our experienced crews are equipped to handle OpenTrench, MissileBore, DirectionalDrill, and MicroTrench installations, ensuring the right approach for every project. From fiberglass light pole installations up to 20 feet tall to pedestal and handhole placements, we provide clean, efficient pathways that prepare communities for the future.
          </p>
          <p className="text-lg text-[#17254E] mb-6">
            At Fiber Fluent, we believe in doing the job right the first time—on schedule and within budget. Our hands-on leadership, technical knowledge, and mission-first mindset set us apart in the industry.
          </p>
          <h3 className="text-2xl font-bold mt-10 text-[#17254E]">Growing to Serve You Better</h3>
          <p className="text-lg text-[#17254E]">
            As Fiber Fluent continues to grow, we’re committed to expanding our services to meet the evolving needs of our clients and industry. Stay connected with us for updates on future service offerings.
          </p>
        </div>
      </section>

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

          <ImageSlider />
        </div>
      </div>
    </div>
  );
}