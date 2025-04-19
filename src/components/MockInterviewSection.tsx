import React from 'react';
import { Link } from 'react-router-dom';

const MockInterviewSection = () => {
  return (
    <div className="mt-6 mb-8 rounded-xl overflow-hidden shadow-sm">
      <div className="naukri-mock-interview text-white p-6 relative">
        <div className="absolute top-4 left-4 bg-white text-green-600 text-sm px-4 py-1 rounded-full">
          Result stays private
        </div>
        
        <div className="flex flex-col md:flex-row items-center pt-8">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <img 
                  src="/naukri-logo.png" 
                  alt="Naukri Logo" 
                  className="h-8" 
                />
                <span className="text-xl font-semibold">360</span>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-3">
              Practice customised mock interview with AI!
            </h2>
            <p className="text-lg mb-6">
              Get AI answers, tips and insights
            </p>
            
            <Link to="/mock-interview">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition">
                Start for free
              </button>
            </Link>
          </div>
          
          <div className="md:w-1/3">
            <img 
              src="public/lovable-uploads/naukri 360.png" 
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
