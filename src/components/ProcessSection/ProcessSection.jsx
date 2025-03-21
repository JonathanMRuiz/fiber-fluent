import React from 'react';

const ProcessSection = () => {
  const steps = [
    { number: '01.', title: 'Communications Infrastructure Installation', description: 'We provide complete underground communications conduit systems for new construction and existing developments. Our team installs conduit, pedestals, handholes, and pull wire—creating clean, efficient, and accessible pathways for future telecommunications services.' },
    { number: '02.', title: 'Underground Electrical Infrastructure', description: 'Our electrical services include the installation of primary, secondary, and street lighting infrastructure. We work closely with developers, general contractors, and utility providers to deliver safe, code-compliant systems ready for energization.' },
    { number: '03.', title: 'Fiberglass Light Pole Installation', description: 'We provide professional installation of fiberglass light poles up to 20 feet tall, ideal for residential streets, commercial projects, and community developments.' },
  ];

  return (
    <section className="container mx-auto flex-grow ">
      <div className="container mx-auto text-center">
        
        <h2 className="text-4xl font-bold mb-8 text-[#17254E]">Services</h2>
        <p className="text-[#17254E] max-w-xl mx-auto mb-12">
          We specialize in a wide range of construction services, including residential, commercial, and industrial projects. From initial design to final inspection, we work closely with our clients to understand their unique needs and vision.
        </p>
      </div>

      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-2xl shadow-lg transform transition duration-500 hover:scale-105"
          >
            <h2 className="text-4xl font-bold text-[#17254E] mb-4">{step.number}</h2>
            <h3 className="text-2xl font-semibold mb-2 text-[#17254E]">{step.title}</h3>
            <p className="text-[#17254E]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
