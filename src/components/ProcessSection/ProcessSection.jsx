import React from 'react';

const ProcessSection = () => {
  const steps = [
    { number: '01.', title: 'Leave A Request', description: 'Simple actions make a difference. It starts and ends with each employee striving to work safer every single day so they can return.' },
    { number: '02.', title: 'Cost Calculation', description: 'Simple actions make a difference. It starts and ends with each employee striving to work safer every single day so they can return.' },
    { number: '03.', title: 'Signing Of A Contract', description: 'Simple actions make a difference. It starts and ends with each employee striving to work safer every single day so they can return.' },
  ];

  return (
    <section className="container mx-auto flex-grow ">
      <div className="container mx-auto text-center">
        <h3 className="text-xl text-[#17254E] mb-4">Better process</h3>
        <h2 className="text-4xl font-bold mb-8 text-[#17254E]">The process of working with us</h2>
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
