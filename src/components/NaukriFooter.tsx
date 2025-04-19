
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, ChevronDown, ChevronRight } from 'lucide-react';

const footerSections = [
  {
    id: 'company',
    title: 'Company',
    links: [
      { title: 'About us', url: '/about' },
      { title: 'Careers', url: '/careers' },
      { title: 'Employer home', url: '/employer' }
    ]
  },
  {
    id: 'help',
    title: 'Help',
    links: [
      { title: 'Help center', url: '/help' },
      { title: 'Summons/Notices', url: '/notices' },
      { title: 'Grievances', url: '/grievances' },
      { title: 'Report issue', url: '/report' }
    ]
  },
  {
    id: 'legal',
    title: 'Legal',
    links: [
      { title: 'Privacy policy', url: '/privacy' },
      { title: 'Terms & conditions', url: '/terms' },
      { title: 'Fraud alert', url: '/fraud-alert' }
    ]
  }
];

const footerSites = [
  'Naukrigulf', '99acres', 'Jeevansathi', 'Job Hai', 'BigShyft',
  'Shiksha', 'Doselect', 'iimjobs', 'hirist', 'Naukri FastForward'
];

const NaukriFooter = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };
  
  return (
    <footer className="bg-gray-100 pt-8 pb-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Connect with us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="divide-y divide-gray-300">
          {footerSections.map((section) => (
            <div key={section.id} className="py-4">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(section.id)}
              >
                <h3 className="text-xl font-semibold">{section.title}</h3>
                <ChevronDown className={`w-6 h-6 transition-transform ${
                  expandedSection === section.id ? 'transform rotate-180' : ''
                }`} />
              </div>
              
              <div className={`mt-2 space-y-2 ${
                expandedSection === section.id ? 'block' : 'hidden md:block'
              }`}>
                {section.links.map((link, index) => (
                  <div key={index} className="block py-1">
                    <Link 
                      to={link.url}
                      className="text-gray-600 hover:text-blue-600"
                    >
                      {link.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="py-8 text-center">
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-gray-500 mb-4">
            {footerSites.map((site, index) => (
              <React.Fragment key={index}>
                <a href="#" className="hover:text-blue-600">{site}</a>
                {index < footerSites.length - 1 && (
                  <span className="text-gray-400">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
          
          <p className="text-gray-500 text-sm">
            All trademarks are the property of their respective owners
          </p>
          <p className="text-gray-500 text-sm">
            All rights reserved © 2025 Info Edge (India) Ltd.
          </p>
        </div>
        
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
          <a 
            href="#" 
            className="flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition"
          >
            Explore in app <ChevronRight className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default NaukriFooter;
