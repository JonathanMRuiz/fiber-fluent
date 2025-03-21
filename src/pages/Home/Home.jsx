import Section from '../../components/Section/Section';
import Carrousel from '../../components/Carrousel/Carrousel';
import FeatureSection from '../../components/Section/FeatureSection';
import IntroductionSection from '../../components/Section/IntroductionSection';
import InstallationSection from '../../components/Section/InstallationSection';
import NightWorkSection from '../../components/Section/NightWorkSection';
import ProcessSection from '../../components/ProcessSection/ProcessSection';
import IconList from '../../components/IconList/IconList';
import ImageSlider from '../../components/Slider/Slider';

export default function Home() {
  return (
    <div className="mb-10">
      <Carrousel />
      <IntroductionSection />
      <ProcessSection />
      
      <Section>
        <h2 className="text-4xl font-extrabold mb-6 text-[#17254E]">
          Custom Solutions for Every Project
        </h2>
        <p className="text-lg text-[#17254E] mb-6">
        We offer a variety of installation methods to suit your project needs and site conditions. From large subdivisions to private developments, we offer customized services designed to meet your timeline, budget, and quality standards. Our experienced crews coordinate with other trades to minimize disruption and keep your project on schedule.
        </p>
        <IconList />
      </Section>

      <FeatureSection />
      <InstallationSection />
      <ImageSlider />
      <NightWorkSection />
    </div>
  );
} 