
import React from 'react';
import Header from '@/components/Header';
import NaukriFooter from '@/components/NaukriFooter';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Naukri</h1>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-700 mb-4">
              Naukri.com is India's No.1 Job Portal and one of the most trusted employment websites in the country. 
              Launched in 1997, we pioneered the concept of online recruitment in India.
            </p>
            <p className="text-gray-700 mb-4">
              We connect jobseekers and recruiters by accurately matching candidate profiles to the relevant job openings through an advanced matching algorithm.
            </p>
            <p className="text-gray-700 mb-4">
              Today, with a database of over 7.5 crore resumes, we are the largest single destination for jobseekers in India.
            </p>
            <p className="text-gray-700">
              As a commitment to our goal of better career opportunities for all, we continue to develop new features and services to make the recruitment process easier.
            </p>
          </div>
        </div>
      </main>
      <NaukriFooter />
    </div>
  );
};

export default About;
