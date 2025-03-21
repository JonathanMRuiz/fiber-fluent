import Section from './Section';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import Grid from '../../components/Grid/Grid';
import Feature1 from '../../assets/feature_1.png';
import Feature2 from '../../assets/feature_2.png';
import Feature3 from '../../assets/illumination_icon.png';
import Feature4 from '../../assets/feature_4.png';
import { motion } from 'framer-motion';

const featureItems = [
  { image: Feature1, title: "Missile bore & directional drilling", description: "This is the first feature." },
  { image: Feature2, title: "Excavation", description: "Precision underground work" },
  { image: Feature3, title: "Solar & conventional lighting", description: "Sustainable street lighting." },
  { image: Feature4, title: "Night Work", description: "Safe and efficient operations" },
];

const FeatureSection = () => (
  <Section id="services">
    <Grid columns={4}>
      {featureItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }} // Inicialmente la tarjeta está oculta y desplazada un poco hacia abajo
          animate={{ opacity: 1, y: 0 }} // La tarjeta se desplaza hacia su posición original y se hace visible
          transition={{ delay: index * 0.2, duration: 0.6 }} // Las tarjetas aparecen con un retraso secuencial
        >
          <FeatureCard 
            image={item.image} 
            title={item.title} 
            description={item.description} 
          />
        </motion.div>
      ))}
    </Grid>
  </Section>
);

export default FeatureSection;
