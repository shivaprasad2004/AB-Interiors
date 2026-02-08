import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);

  // Manual list of projects to allow specific naming
  // Since we cannot automatically detect image content, we default to generic "Interior" labels.
  // You can update the 'title' and 'category' fields below to match the actual image content (e.g., "Master Bedroom", "Modern Kitchen").
  const projects = [
    {
      id: 1,
      image: "/images/WhatsApp Image 2026-02-04 at 12.49.53 PM.jpeg",
      title: "Interior Design",
      category: "Residential",
      description: "Bespoke interior design tailored to client requirements."
    },
    {
      id: 2,
      image: "/images/WhatsApp Image 2026-02-04 at 12.49.54 PM (1).jpeg",
      title: "Interior Design",
      category: "Residential",
      description: "Bespoke interior design tailored to client requirements."
    },
    {
      id: 3,
      image: "/images/WhatsApp Image 2026-02-04 at 12.49.54 PM.jpeg",
      title: "Interior Design",
      category: "Residential",
      description: "Bespoke interior design tailored to client requirements."
    },
    {
      id: 4,
      image: "/images/WhatsApp Image 2026-02-04 at 12.49.55 PM (1).jpeg",
      title: "Interior Design",
      category: "Residential",
      description: "Bespoke interior design tailored to client requirements."
    },
    {
      id: 5,
      image: "/images/WhatsApp Image 2026-02-04 at 12.49.55 PM (2).jpeg",
      title: "Interior Design",
      category: "Residential",
      description: "Bespoke interior design tailored to client requirements."
    },
    {
      id: 6,
      image: "/images/WhatsApp Image 2026-02-04 at 12.49.55 PM.jpeg",
      title: "Interior Design",
      category: "Residential",
      description: "Bespoke interior design tailored to client requirements."
    },
    {
      id: 7,
      image: "/images/WhatsApp Image 2026-02-04 at 12.49.56 PM (1).jpeg",
      title: "Interior Design",
      category: "Residential",
      description: "Bespoke interior design tailored to client requirements."
    },
    {
      id: 8,
      image: "/images/WhatsApp Image 2026-02-04 at 12.49.56 PM (2).jpeg",
      title: "Interior Design",
      category: "Residential",
      description: "Bespoke interior design tailored to client requirements."
    },
    {
      id: 9,
      image: "/images/WhatsApp Image 2026-02-04 at 12.49.56 PM.jpeg",
      title: "Interior Design",
      category: "Residential",
      description: "Bespoke interior design tailored to client requirements."
    },
    {
      id: 10,
      image: "/images/WhatsApp Image 2026-02-04 at 12.49.57 PM.jpeg",
      title: "Interior Design",
      category: "Residential",
      description: "Bespoke interior design tailored to client requirements."
    },
    {
      id: 11,
      image: "/images/WhatsApp Image 2026-02-04 at 12.49.58 PM (1).jpeg",
      title: "Interior Design",
      category: "Residential",
      description: "Bespoke interior design tailored to client requirements."
    },
    {
      id: 12,
      image: "/images/WhatsApp Image 2026-02-04 at 12.49.58 PM.jpeg",
      title: "Interior Design",
      category: "Residential",
      description: "Bespoke interior design tailored to client requirements."
    },
    {
      id: 13,
      image: "/images/WhatsApp Image 2026-02-04 at 12.49.59 PM (1).jpeg",
      title: "Interior Design",
      category: "Residential",
      description: "Bespoke interior design tailored to client requirements."
    },
    {
      id: 14,
      image: "/images/WhatsApp Image 2026-02-04 at 12.49.59 PM.jpeg",
      title: "Interior Design",
      category: "Residential",
      description: "Bespoke interior design tailored to client requirements."
    },
    {
      id: 15,
      image: "/images/WhatsApp Image 2026-02-04 at 12.50.00 PM (1).jpeg",
      title: "Interior Design",
      category: "Residential",
      description: "Bespoke interior design tailored to client requirements."
    },
    {
      id: 16,
      image: "/images/WhatsApp Image 2026-02-04 at 12.50.00 PM (2).jpeg",
      title: "Interior Design",
      category: "Residential",
      description: "Bespoke interior design tailored to client requirements."
    },
    {
      id: 17,
      image: "/images/WhatsApp Image 2026-02-04 at 12.50.00 PM.jpeg",
      title: "Interior Design",
      category: "Residential",
      description: "Bespoke interior design tailored to client requirements."
    },
    {
      id: 18,
      image: "/images/WhatsApp Image 2026-02-04 at 12.50.01 PM.jpeg",
      title: "Interior Design",
      category: "Residential",
      description: "Bespoke interior design tailored to client requirements."
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-brand-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-brand-white">
              Selected <span className="text-brand-orange">Works</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light tracking-wide">
              Excellence in every detail. Explore our curated collection of bespoke interior transformations.
            </p>
          </motion.div>
        </div>

        {/* Uniform Grid for Smaller Image Appearance */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              className="group relative rounded-lg overflow-hidden cursor-pointer bg-neutral-900 border border-neutral-800"
              onClick={() => setSelectedId(project.id)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-neutral-800 text-gray-500 text-xs p-2 text-center">Image not found</div>`;
                  }}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <ZoomIn className="text-white w-8 h-8 opacity-90" />
                </div>
              </div>

              {/* Minimal Content Card */}
              <div className="p-3">
                <span className="text-brand-orange text-[10px] font-bold tracking-widest uppercase block mb-1">
                  {project.category}
                </span>
                <h3 className="text-sm font-bold text-white truncate">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden bg-neutral-900 rounded-lg flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-10 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              {(() => {
                const project = projects.find(p => p.id === selectedId);
                return (
                  <>
                    <div className="w-full md:w-2/3 bg-black flex items-center justify-center p-2">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="max-h-[80vh] w-auto object-contain"
                      />
                    </div>
                    <div className="w-full md:w-1/3 p-8 flex flex-col justify-center">
                      <span className="text-brand-orange font-bold tracking-widest uppercase mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-sm mb-8">
                        {project.description}
                      </p>
                      <div className="mt-auto pt-6 border-t border-neutral-800">
                        <p className="text-xs text-gray-500">
                          Design by AB Interiors
                        </p>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
