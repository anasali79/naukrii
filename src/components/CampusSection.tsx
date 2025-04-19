import React from 'react';
import { Link } from 'react-router-dom';

const CampusSection = () => {
  return (
    <div className="my-8 bg-white rounded-xl p-6 shadow-sm">
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <img 
              src="/naukri-logo.png" 
              alt="Naukri Logo" 
              className="h-8" 
            />
            <h2 className="text-xl font-bold text-orange-500">campus</h2>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2">
          Introducing a career platform for college students & fresh grads
        </h3>
        
        <p className="text-gray-600 mb-4">
          Explore contests, webinars, take aptitude test, prepare for your dream career & find jobs & internships
        </p>
        
        <div>
          <Link to="/campus">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition">
              Explore now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampusSection;
