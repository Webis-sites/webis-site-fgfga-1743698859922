import React from 'react';
import { FaCoffee, FaWifi, FaLaptop, FaCalendarAlt, FaUsers } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="text-primary text-4xl mb-4">{icon}</div>
        <h3 className="text-secondary text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaCoffee />,
      title: "קפה איכותי",
      description: "מבחר קפה מיוחד מהטובים בעולם, נטחן טרי ומוגש בדיוק כמו שאתם אוהבים."
    },
    {
      icon: <FaLaptop />,
      title: "סביבת עבודה טכנולוגית",
      description: "שולחנות עבודה מרווחים, שקעי חשמל בכל פינה, ואווירה מושלמת לפרודוקטיביות."
    },
    {
      icon: <FaWifi />,
      title: "אינטרנט מהיר",
      description: "חיבור אינטרנט מהיר במיוחד שיאפשר לכם לעבוד, ללמוד או לגלוש ללא הפרעות."
    },
    {
      icon: <FaCalendarAlt />,
      title: "אירועי טכנולוגיה",
      description: "אנו מארחים מפגשים, הרצאות וסדנאות בנושאי טכנולוגיה וחדשנות באופן קבוע."
    },
    {
      icon: <FaUsers />,
      title: "חללי פגישות",
      description: "חדרי ישיבות פרטיים לפגישות צוות, ראיונות או מפגשים עסקיים בסביבה מקצועית."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dir-rtl" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-2">השירותים שלנו</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ב-fgfga אנו מציעים מגוון שירותים המשלבים את אהבתנו לקפה איכותי עם הצרכים של אנשי טכנולוגיה וחדשנות
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;