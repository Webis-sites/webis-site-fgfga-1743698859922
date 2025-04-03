import React from 'react';

interface AboutSectionProps {
  className?: string;
}

export default function AboutSection({ className = '' }: AboutSectionProps) {
  return (
    <section 
      dir="rtl" 
      className={`about-section bg-secondary/10 py-16 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8 text-center">
            אודות fgfga
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="aspect-square rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full bg-primary/40 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                      fgfga
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-lg mb-6 leading-relaxed">
                  אנחנו בית קפה מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-secondary/5 p-5 rounded-lg border-r-4 border-primary">
                    <h3 className="text-xl font-semibold mb-2 text-secondary">ניסיון מקצועי</h3>
                    <p>שנים רבות של מומחיות בתחום הטכנולוגיה והקפה</p>
                  </div>
                  
                  <div className="bg-secondary/5 p-5 rounded-lg border-r-4 border-primary">
                    <h3 className="text-xl font-semibold mb-2 text-secondary">שירות מקצועי</h3>
                    <p>מחויבים למצוינות ולחוויית לקוח יוצאת דופן</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">+10</div>
                  <div className="text-secondary">שנות ניסיון</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">+1000</div>
                  <div className="text-secondary">לקוחות מרוצים</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">+50</div>
                  <div className="text-secondary">מוצרים ייחודיים</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-full transition-colors duration-300 shadow-md">
              צור קשר
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}