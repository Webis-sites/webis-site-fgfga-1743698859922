import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white rtl" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="fgfga Logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-sm mb-6">
              בית קפה fgfga הוא מקום מפגש ייחודי המשלב טכנולוגיה וקפה איכותי. אנו מציעים חוויה ייחודית לאוהבי טכנולוגיה וקפה טוב.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">
                  דף הבית
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-secondary transition-colors">
                  תפריט
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-secondary transition-colors">
                  אירועים
                </Link>
              </li>
              <li>
                <Link href="/tech" className="hover:text-secondary transition-colors">
                  טכנולוגיה
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-secondary" />
                <span>רחוב הטכנולוגיה 123, תל אביב</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-secondary" />
                <span>03-1234567</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-secondary" />
                <span>info@fgfga.co.il</span>
              </li>
            </ul>
          </div>

          {/* Social Media and Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">עקבו אחרינו</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
            
            <h3 className="text-lg font-bold mb-4 text-secondary">הירשמו לניוזלטר</h3>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="הכנס את האימייל שלך"
                className="px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
              >
                הרשמה
              </button>
            </form>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {currentYear} בית קפה fgfga. כל הזכויות שמורות.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link href="/privacy" className="hover:text-secondary transition-colors ml-4">
              מדיניות פרטיות
            </Link>
            <Link href="/terms" className="hover:text-secondary transition-colors ml-4">
              תנאי שימוש
            </Link>
            <Link href="/accessibility" className="hover:text-secondary transition-colors">
              נגישות
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;