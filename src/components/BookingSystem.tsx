'use client';

import React, { useState } from 'react';
import { he } from 'date-fns/locale';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { TimePicker } from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  date: Date | undefined;
  time: string;
  tableSize: string;
  services: string[];
}

const BookingSystem: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    date: undefined,
    time: '12:00',
    tableSize: '2',
    services: [],
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const tableOptions = [
    { value: '1', label: 'יחיד' },
    { value: '2', label: 'זוגי' },
    { value: '4', label: 'משפחתי (4)' },
    { value: '6', label: 'קבוצה קטנה (6)' },
    { value: '8+', label: 'קבוצה גדולה (8+)' },
  ];
  
  const serviceOptions = [
    { value: 'wifi', label: 'Wi-Fi מהיר' },
    { value: 'charging', label: 'עמדת טעינה' },
    { value: 'private', label: 'פינה שקטה' },
    { value: 'presentation', label: 'מסך להצגת מצגות' },
    { value: 'food', label: 'תפריט מיוחד' },
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleDateChange = (date: Date | undefined) => {
    setFormData({ ...formData, date });
  };
  
  const handleTimeChange = (time: string) => {
    setFormData({ ...formData, time });
  };
  
  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, services: [...formData.services, value] });
    } else {
      setFormData({ 
        ...formData, 
        services: formData.services.filter(service => service !== value) 
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    try {
      // In a real application, you would send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Booking submitted:', formData);
      setSubmitted(true);
      setLoading(false);
    } catch (error) {
      console.error('Error submitting booking:', error);
      setLoading(false);
    }
  };
  
  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
      date: undefined,
      time: '12:00',
      tableSize: '2',
      services: [],
    });
    setSubmitted(false);
  };
  
  const footer = formData.date ? (
    <p className="text-primary-dark mt-2 text-center">
      {format(formData.date, 'EEEE, dd MMMM yyyy', { locale: he })}
    </p>
  ) : (
    <p className="text-primary-dark mt-2 text-center">נא לבחור תאריך</p>
  );

  return (
    <div className="booking-system bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto my-8 rtl" dir="rtl">
      <h2 className="text-3xl font-bold text-center mb-8 text-secondary">מערכת הזמנת מקום ב-fgfga</h2>
      
      {submitted ? (
        <div className="success-message text-center py-8">
          <div className="text-primary text-5xl mb-4">✓</div>
          <h3 className="text-2xl font-bold text-secondary mb-4">ההזמנה התקבלה בהצלחה!</h3>
          <p className="mb-6 text-gray-700">נשלח אליך אישור במייל בקרוב.</p>
          <button 
            onClick={resetForm}
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            הזמנה חדשה
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-secondary border-b border-primary pb-2 mb-4">פרטים אישיים</h3>
              
              <div className="form-group">
                <label htmlFor="name" className="block text-gray-700 mb-2">שם *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="block text-gray-700 mb-2">טלפון *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  dir="ltr"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="block text-gray-700 mb-2">אימייל *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  dir="ltr"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="tableSize" className="block text-gray-700 mb-2">גודל שולחן *</label>
                <select
                  id="tableSize"
                  name="tableSize"
                  value={formData.tableSize}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {tableOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label className="block text-gray-700 mb-2">שירותים נוספים</label>
                <div className="grid grid-cols-2 gap-2">
                  {serviceOptions.map(option => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="checkbox"
                        id={option.value}
                        name="services"
                        value={option.value}
                        checked={formData.services.includes(option.value)}
                        onChange={handleServiceChange}
                        className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor={option.value} className="mr-2 text-sm text-gray-700">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="block text-gray-700 mb-2">הודעה</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-secondary border-b border-primary pb-2 mb-4">תאריך ושעה</h3>
              
              <div className="calendar-container p-4 border border-gray-200 rounded-lg bg-gray-50">
                <DayPicker
                  mode="single"
                  selected={formData.date}
                  onSelect={handleDateChange}
                  locale={he}
                  footer={footer}
                  fromDate={new Date()}
                  className="mx-auto"
                  modifiersClassNames={{
                    selected: 'bg-primary text-white',
                    today: 'text-secondary font-bold',
                  }}
                />
              </div>
              
              <div className="time-picker-container mt-4">
                <label className="block text-gray-700 mb-2">שעה *</label>
                <TimePicker
                  onChange={handleTimeChange}
                  value={formData.time}
                  clearIcon={null}
                  clockIcon={null}
                  locale="he-IL"
                  disableClock={true}
                  className="w-full time-picker-custom"
                />
              </div>
              
              <div className="booking-info mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-secondary mb-2">פרטי ההזמנה שלך:</h4>
                <ul className="space-y-2 text-gray-700">
                  {formData.date && (
                    <li className="flex">
                      <span className="font-medium ml-2">תאריך:</span>
                      <span>{format(formData.date, 'dd/MM/yyyy', { locale: he })}</span>
                    </li>
                  )}
                  <li className="flex">
                    <span className="font-medium ml-2">שעה:</span>
                    <span>{formData.time}</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium ml-2">שולחן:</span>
                    <span>{tableOptions.find(o => o.value === formData.tableSize)?.label}</span>
                  </li>
                  {formData.services.length > 0 && (
                    <li>
                      <span className="font-medium">שירותים:</span>
                      <ul className="mr-4 mt-1">
                        {formData.services.map(service => (
                          <li key={service} className="text-sm">
                            • {serviceOptions.find(o => o.value === service)?.label}
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button
              type="submit"
              disabled={loading || !formData.date}
              className={`
                bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full
                transition duration-300 text-lg
                ${(loading || !formData.date) ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  מעבד...
                </span>
              ) : 'קבע תור עכשיו'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BookingSystem;