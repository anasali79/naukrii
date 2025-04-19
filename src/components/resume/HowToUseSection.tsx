
import React from 'react';
import { Link } from 'react-router-dom';

const HowToUseSection: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        How to use resume maker?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 1</h3>
          <p className="text-gray-700">
            Register & complete your resume by filling in details like your professional summary, career objective, skills, & more.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 2</h3>
          <p className="text-gray-700">
            Select your template from diverse options to make your resume stand out.
          </p>
        </div>
      </div>
      
      <p className="text-gray-700 mt-10">
        You can also get additional resume templates and improve content easily with AI by signing up for Naukri's <Link to="#" className="text-blue-600 font-bold">Resume Pro</Link>
      </p>
    </div>
  );
};

export default HowToUseSection;
