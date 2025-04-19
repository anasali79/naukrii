
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const KnowMoreSection: React.FC = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Know More About Free Resume Maker
      </h2>
      
      <p className="text-gray-700 mb-6">
        Tired of formatting and refining your resume? Make your job hunt easy with Naukri's Resume Builder. Whether you're an experienced professional or new to the job market, our resume maker offers easy and efficient ways to create your resume. Making resume is now easy! With a wide range of free templates designed for various industries and career levels, you can quickly craft a polished and professional CV. So, simplify the process and ditch worrying about how to build your resume.
      </p>
      
      <p className="text-gray-700 mb-4">
        With our AI-Powered CV maker, you can highlight your skills and experiences, and get suggestions to showcase your <Link to="#" className="text-blue-600">read more</Link>
      </p>
      
      <div className="flex items-center gap-3 text-gray-600 mt-8">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
        <Link to="/services" className="hover:text-blue-600">Naukri 360</Link>
        <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
        <span className="font-medium">Resume Maker</span>
      </div>
    </div>
  );
};

export default KnowMoreSection;
