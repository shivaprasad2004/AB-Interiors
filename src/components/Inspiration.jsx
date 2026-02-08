import React from 'react';
import { motion } from 'framer-motion';

const Inspiration = () => {
  const trends = [
    {
      id: 1,
      title: "Modern Minimalist Living",
      category: "Living Room",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000",
      description: "Clean lines and monochromatic palettes defining modern luxury."
    },
    {
      id: 2,
      title: "Biophilic Bedroom Oasis",
      category: "Bedroom",
      // Updated with a reliable high-quality image of a bedroom with plants
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1000",
      description: "Bringing the outdoors in with natural textures and calming greens."
    },
    {
      id: 3,
      title: "Contemporary Kitchens",
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
      description: "Sleek cabinetry meets functional design for the heart of the home."
    },
    {
      id: 4,
      title: "Luxury Spa Bathrooms",
      category: "Bathroom",
      // Updated with a reliable high-quality image of a spa-like bathroom
      image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
      description: "Transforming daily routines into spa-like experiences."
    },
    {
      id: 5,
      title: "Open Concept Dining",
      category: "Dining",
      image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80&w=1000",
      description: "Spacious layouts perfect for entertaining and family gatherings."
    },
    {
      id: 6,
      title: "Home Office Sanctuaries",
      category: "Office",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000",
      description: "Productivity meets style in these curated workspaces."
    }
  ];

  return (
    <section id="trends" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange font-bold tracking-wider uppercase text-sm">Inspiration</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 text-brand-black">Global Design Trends</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore a curated collection of international design styles and trends that inspire our work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trends.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">{item.category}</span>
                <h3 className="text-white text-xl font-serif font-bold mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
