import Section from './Section';
import Intro from '../../assets/USA.png';

const IntroductionSection = () => (
  <Section 
    id="introduction" 
    className="text-white py-16 bg-cover bg-center" 
  >
    <div 
      className="bg-[#012547] sm:bg-cover sm:bg-center p-8 rounded-lg ml-8" 
      style={{ backgroundImage: `url(${Intro})` }}
    >
      <div className="text-left pt-24 sm:w-[45rem] w-full">
        <p className="text-lg mb-6">
          At <strong className="font-bold">Fiber Fluent LLC</strong>, we are proud to be a veteran-owned underground infrastructure company specializing in communications and electrical installations. Founded by <strong className="font-bold">Peter Merlo</strong>, a former member of the 173rd Airborne Combat Team and a seasoned industry professional with over a decade of experience in construction and land development, our company was built on a foundation of integrity, precision, and hard-earned expertise.
        </p>
        <p className="text-lg mb-6">
          With deep roots in underground utilities and community development, Fiber Fluent delivers tailored solutions for <strong className="font-bold">primary, secondary, and street lighting infrastructure</strong>, as well as <strong className="font-bold">communications conduit systems</strong>. We support residential, commercial, and municipal projects with services designed to meet modern demands for power and connectivity.
        </p>
        <p className="text-lg mb-6">
          Our experienced crews are equipped to handle <strong className="font-bold">OpenTrench, MissileBore, DirectionalDrill, and MicroTrench</strong> installations, ensuring the right approach for every project. From <strong className="font-bold">fiberglass light pole installations up to 20 feet tall to pedestal and handhole placements</strong>, we provide clean, efficient pathways that prepare communities for the future.
        </p>
        <p className="text-lg mb-6">
          At Fiber Fluent, we believe in doing the job right the first time—on schedule and within budget. Our hands-on leadership, technical knowledge, and mission-first mindset set us apart in the industry.
        </p>
        <p className="text-lg">
          <strong>Growing to Serve You Better</strong>
          <br />
          As Fiber Fluent continues to grow, we’re committed to expanding our services to meet the evolving needs of our clients and industry. Stay connected with us for updates on future service offerings.
        </p>
      </div>
    </div>
  </Section>
);

export default IntroductionSection;
