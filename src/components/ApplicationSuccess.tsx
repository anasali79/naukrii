import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ApplicationSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { jobTitle, company } = location.state || {};

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Application Submitted Successfully!
      </h1>
      
      {jobTitle && company && (
        <p className="text-lg text-gray-600 mb-8">
          Your application for <span className="font-semibold">{jobTitle}</span> at{' '}
          <span className="font-semibold">{company}</span> has been submitted.
        </p>
      )}
      
      <div className="space-y-4">
        <p className="text-gray-600">
          We'll review your application and get back to you soon.
          You'll receive an email confirmation shortly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => navigate('/jobs')}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Browse More Jobs
          </button>
          
          <button
            onClick={() => navigate('/applications')}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition"
          >
            View My Applications
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSuccess; 