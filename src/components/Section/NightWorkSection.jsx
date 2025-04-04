import Section from './Section';
import NightWork from '../../assets/night_work.jpg';

const NightWorkSection = () => (
  <Section id="night_work">
    <div className="flex flex-col lg:flex-row items-start">
      <div className="flex-1 mb-8 lg:mb-0 flex justify-center">
        <img src={NightWork} alt="Night work scene" className="h-[35rem] rounded-lg" />
      </div>
      <div className="flex-1 pl-0 lg:pl-12">
        <h2 className="text-4xl font-extrabold mb-6 text-[#17254E]">Night Work – Precision and Efficiency After Dark</h2>
        <p className="text-lg text-[#17254E] mb-6">Working at night presents unique challenges and opportunities, requiring precision, adaptability, and specialized equipment to ensure safety and efficiency. Under the glow of streetlights and work lamps, Fiber Fluent teams install essential underground infrastructure while minimizing disruptions to the city’s daytime flow.</p>
        <p className="text-lg text-[#17254E] mb-6">In this image, a dedicated team member carefully guides an orange conduit into place as part of the installation. The nighttime setting—vehicles passing in the background and an excavator in motion—highlights the skill and coordination required to execute critical projects after dark. Strategic planning and proper lighting transform the quiet of the night into a productive window for progress.</p>
        <p className="text-lg text-[#17254E] mb-6">This scene is a testament to the dedication and expertise that drive the future—one line at a time.</p>
      </div>
    </div>
  </Section>
);

export default NightWorkSection;