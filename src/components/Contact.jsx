import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Get In <span className="text-brand-orange">Touch</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to start your dream project? Contact us today for a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <ContactCard 
            icon={<Phone size={28} />}
            title="Call Us"
            value="9059 103 403"
            href="tel:9059103403"
          />
          <ContactCard 
            icon={<Mail size={28} />}
            title="Email Us"
            value="abinteriors9@gmail.com"
            href="mailto:abinteriors9@gmail.com"
          />
          <ContactCard 
            icon={<Instagram size={28} />}
            title="Instagram"
            value="@abinteriors9"
            href="https://instagram.com/abinteriors9"
          />
          <ContactCard 
            icon={<MapPin size={28} />}
            title="Location"
            value="Hyderabad"
            href="#"
          />
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, title, value, href }) => (
  <a 
    href={href}
    className="flex flex-col items-center p-8 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors border border-neutral-800 group"
  >
    <div className="mb-4 text-brand-white group-hover:text-brand-orange transition-colors">
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-400 group-hover:text-white transition-colors">{value}</p>
  </a>
);

export default Contact;
