import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Using one of the uploaded WhatsApp images
  const heroImage = "/images/WhatsApp Image 2026-02-04 at 12.49.53 PM.jpeg";

  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden bg-brand-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Modern Interior Background" 
          className="w-full h-full object-cover opacity-50 blur-sm scale-105"
          onError={(e) => {
             e.target.style.display = 'none';
             e.target.parentElement.style.background = 'linear-gradient(to bottom, #111, #222)';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-brand-black/60 to-brand-black/90" />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-block border-2 border-brand-white p-4 rounded-full backdrop-blur-sm bg-white/5">
            <span className="text-4xl md:text-6xl font-serif font-bold text-white">AB</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-tight text-white drop-shadow-2xl">
            AB <span className="text-brand-orange">Interiors</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-3xl text-gray-200 font-light tracking-[0.2em] uppercase mb-12 drop-shadow-lg"
          >
            Dream. Create. Live
          </motion.p>
          
          <motion.a 
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="inline-block bg-brand-orange text-white px-8 py-3 rounded-none hover:bg-white hover:text-brand-black transition-all duration-300 font-bold uppercase tracking-wider shadow-lg hover:shadow-brand-orange/50"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
