import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Layout, Home } from 'lucide-react';

const About = () => {
  // Using another uploaded WhatsApp image for context
  const aboutImage = "/images/WhatsApp Image 2026-02-04 at 12.49.54 PM.jpeg";

  return (
    <section id="about" className="py-20 bg-brand-gray text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="relative"
             >
               <div className="aspect-[3/4] bg-neutral-800 rounded-lg overflow-hidden flex items-center justify-center border border-neutral-700 relative group">
                 <img 
                   src={aboutImage}
                   alt="AB Interiors Design"
                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100 transition-transform"
                   onError={(e) => {
                     e.target.parentElement.style.backgroundColor = '#333';
                     e.target.style.display = 'none';
                   }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 
                 {/* Floating Badge */}
                 <div className="absolute bottom-6 left-6 bg-brand-orange/90 backdrop-blur-md p-4 rounded-lg shadow-xl">
                    <p className="text-white font-bold text-lg">Expert Design</p>
                    <p className="text-white/80 text-sm">Since 2020</p>
                 </div>
               </div>
               
               {/* Decorative Elements */}
               <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-orange/20 rounded-lg -z-10" />
             </motion.div>
          </div>
          
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Crafting Spaces That <br/>
                <span className="text-brand-orange">Inspire Living</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
                <p>
                  At <strong className="text-white">AB Interiors</strong>, we don't just design rooms; we curate experiences. 
                  Led by <strong className="text-white">Abhilash Neela</strong>, our studio merges functionality with artistic vision 
                  to create homes that are uniquely yours.
                </p>
                <p>
                  From the precise lines of a modular kitchen to the comforting warmth of a bedroom, 
                  every project is a journey we take together—transforming your dreams into tangible reality.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                <FeatureCard icon={<PenTool size={24} />} title="Custom Design" />
                <FeatureCard icon={<Layout size={24} />} title="Space Planning" />
                <FeatureCard icon={<Home size={24} />} title="Turnkey Execution" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title }) => (
  <div className="flex flex-col items-center text-center p-6 bg-brand-black rounded-xl border border-neutral-800 hover:border-brand-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-orange/10 group">
    <div className="text-brand-orange mb-3 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <span className="font-medium text-white">{title}</span>
  </div>
);

export default About;
