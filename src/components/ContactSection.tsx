'use client';

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This is a placeholder for the actual API call
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(null);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Café location coordinates (example: Tel Aviv)
  const position: [number, number] = [32.0853, 34.7818];
  
  // Business hours
  const businessHours = [
    { day: 'ראשון - חמישי', hours: '08:00 - 22:00' },
    { day: 'שישי', hours: '08:00 - 16:00' },
    { day: 'שבת', hours: 'סגור' },
  ];

  return (
    <section dir="rtl" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">צור קשר</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6 text-secondary">שלח לנו הודעה</h3>
            
            {submitSuccess === true && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.
              </div>
            )}
            
            {submitSuccess === false && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                אירעה שגיאה בשליחת ההודעה. אנא נסה שוב מאוחר יותר.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">שם</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  dir="ltr"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">אימייל</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  dir="ltr"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">הודעה</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition duration-300 disabled:opacity-70"
              >
                {isSubmitting ? 'שולח...' : 'שלח הודעה'}
              </button>
            </form>
          </div>
          
          {/* Map and Contact Info */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-secondary">פרטי התקשרות</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhone className="text-primary ml-3" />
                  <span dir="ltr">+972-50-1234567</span>
                </div>
                
                <div className="flex items-center">
                  <FaEnvelope className="text-primary ml-3" />
                  <span>info@fgfga-cafe.com</span>
                </div>
                
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-primary ml-3" />
                  <span>רחוב הרצל 123, תל אביב</span>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold mt-8 mb-4 text-secondary flex items-center">
                <FaClock className="text-primary ml-3" />
                שעות פעילות
              </h4>
              
              <div className="space-y-2">
                {businessHours.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium">{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Map */}
            <div className="h-80 rounded-lg overflow-hidden shadow-md">
              <MapContainer 
                center={position} 
                zoom={15} 
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    בית קפה fgfga <br /> רחוב הרצל 123, תל אביב
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;