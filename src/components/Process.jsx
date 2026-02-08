import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Hammer, Home } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <MessageSquare size={32} />,
      title: "Consultation",
      description: "We meet to understand your vision, needs, and budget to create a tailored plan."
    },
    {
      icon: <PenTool size={32} />,
      title: "Design Concept",
      description: "Our team crafts 2D/3D layouts and mood boards to visualize your dream space."
    },
    {
      icon: <Hammer size={32} />,
      title: "Execution",
      description: "Skilled craftsmen bring designs to life with precision and high-quality materials."
    },
    {
      icon: <Home size={32} />,
      title: "Handover",
      description: "The final reveal. We ensure every detail is perfect before handing over your key."
    }
  ];

  return (
    <section className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
          >
            Our Design <span className="text-brand-orange">Process</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A seamless journey from concept to reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-neutral-800 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-brand-black border-2 border-brand-orange rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 shadow-lg shadow-black/50">
                <div className="text-brand-orange group-hover:text-white transition-colors">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
