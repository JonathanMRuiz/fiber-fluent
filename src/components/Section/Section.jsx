import { motion } from "framer-motion";

const Section = ({ children, id, className }) => (
  <motion.section
    id={id}
    className={`bg-white py-8 px-6 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="max-w-screen-xl mx-auto">{children}</div>
  </motion.section>
);

export default Section;
