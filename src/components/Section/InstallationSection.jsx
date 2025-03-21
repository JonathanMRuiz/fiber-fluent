import Section from './Section';
import EasyStreetImage from '../../assets/easystreet.jpeg';

const InstallationSection = () => (
  <Section id="installation">
    <div className="flex flex-col lg:flex-row items-start">
      <div className="flex-1 mb-8 lg:mb-0">
        <img src={EasyStreetImage} alt="Installation of small cell pole" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <div className="flex-1 pl-0 lg:pl-12">
        <h2 className="text-4xl font-extrabold mb-6 text-[#17254E]">Installation of Small Cell Poles</h2>
        <p className="text-lg text-[#17254E] mb-6">Enhancing wireless connectivity and network coverage for growing communities, these poles play a crucial role in supporting high-speed communication and future technologies.</p>
      </div>
    </div>
  </Section>
);

export default InstallationSection;