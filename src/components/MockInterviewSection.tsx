import React from 'react';
import { Link } from 'react-router-dom';

const MockInterviewSection = () => {
  return (
    <div className="my-8">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-6 text-white">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <div className="flex items-center mb-4">
              <img 
                src="/naukri-logo.png" 
                alt="Naukri Logo" 
                className="h-8" 
              />
              <span className="text-xl font-bold">360</span>
            </div>
            
            <h2 className="text-2xl font-bold mb-2">Give customised mock interview with AI</h2>
            <p className="mb-4 opacity-90">Get AI answers, tips and insights</p>
            
            <Link to="/mock-interview">
              <button className="bg-white text-cyan-600 font-medium py-2 px-6 rounded-full hover:bg-gray-100 transition">
                Start practicing
              </button>
            </Link>
          </div>
          
          <div className="md:w-1/3">
            <img 
              src="/lovable-uploads/naukri 360.png" 
              alt="AI Interview" 
              className="w-full max-w-[200px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockInterviewSection;