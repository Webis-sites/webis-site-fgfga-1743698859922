'use client';

import React, { useState, useEffect } from 'react';
import { FaQuoteRight, FaStar, FaStarHalf, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
  image?: string;
}

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'דניאל כהן',
      quote: 'בית הקפה המושלם לפגישות עסקיות. האווירה מקצועית, הקפה מעולה והאינטרנט מהיר. המקום האידיאלי לעבודה מרחוק.',
      rating: 5,
      image: '/testimonials/person1.jpg'
    },
    {
      id: 2,
      name: 'מיכל לוי',
      quote: 'התאהבתי באווירה הטכנולוגית של המקום. השקעים בכל שולחן והמרחב העבודה המשותף הופכים את fgfga למקום המושלם לסטארטאפיסטים.',
      rating: 4.5,
      image: '/testimonials/person2.jpg'
    },
    {
      id: 3,
      name: 'יוסי אברהם',
      quote: 'השירות מעולה והקפה איכותי. המקום תמיד נקי ומסודר, והצוות מקצועי ואדיב. ממליץ בחום!',
      rating: 5,
      image: '/testimonials/person3.jpg'
    },
    {
      id: 4,
      name: 'רונית שרון',
      quote: 'האוכל טעים והאווירה נעימה. המקום מושלם לפגישות עם לקוחות או לעבודה שקטה עם המחשב הנייד.',
      rating: 4,
      image: '/testimonials/person4.jpg'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-primary inline-block" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalf key="half-star" className="text-primary inline-block" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaStar key={`empty-star-${i}`} className="text-gray-300 inline-block" />);
    }

    return stars;
  };

  return (
    <section className="bg-white py-16 px-4 rtl" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">מה הלקוחות שלנו אומרים</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            הצטרפו למאות הלקוחות המרוצים שלנו שנהנים מהאווירה הטכנולוגית והקפה האיכותי של fgfga
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className={`flex transition-transform duration-500 ease-in-out ${isAnimating ? 'opacity-80' : 'opacity-100'}`}
              style={{ transform: `translateX(${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-lg shadow-lg p-8 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        {testimonial.image && (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/testimonials/default-avatar.jpg';
                            }}
                          />
                        )}
                      </div>
                      <div className="mr-4">
                        <h3 className="font-bold text-lg text-secondary">{testimonial.name}</h3>
                        <div className="flex mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <FaQuoteRight className="text-primary opacity-20 text-4xl mb-2" />
                      <p className="text-gray-700 leading-relaxed">{testimonial.quote}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="הקודם"
          >
            <FaChevronRight className="text-secondary text-xl" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="הבא"
          >
            <FaChevronLeft className="text-secondary text-xl" />
          </button>
        </div>

        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${
                index === activeIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`עבור לביקורת ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;