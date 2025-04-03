'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onBookAppointment?: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  const handleBookAppointment = () => {
    if (onBookAppointment) {
      onBookAppointment();
    } else {
      console.log('Book appointment clicked');
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-light to-primary-dark min-h-[80vh] flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 text-right direction-rtl">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 lg:w-3/5 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-dark mb-4 font-heebo">
                בית קפה מוביל בישראל
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 font-rubik">
                חווית לקוח מושלמת בכל ביקור
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary-dark hover:bg-secondary-darker text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 font-heebo"
                onClick={handleBookAppointment}
              >
                קבע תור עכשיו
              </motion.button>
            </motion.div>
          </div>
          <div className="md:w-1/2 lg:w-2/5 order-1 md:order-2 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-80 md:h-96 lg:h-[450px] bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="/images/tech-cafe.jpg"
                  alt="fgfga - בית קפה טכנולוגי"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 px-4 py-2 rounded-lg">
                  <h3 className="font-bold text-secondary-dark font-heebo">fgfga</h3>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-dark rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">fgfga</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}