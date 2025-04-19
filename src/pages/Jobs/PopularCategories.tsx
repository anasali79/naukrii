
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PopularCategories = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Popular Job Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobCategories.map((category) => (
            <div 
              key={category.id} 
              className="border rounded-lg p-6 hover:shadow-md transition duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h2>
              <p className="text-gray-600 mb-3">{category.count} jobs available</p>
              <p className="text-sm text-gray-500">{category.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const jobCategories = [
  {
    id: 1,
    title: 'Information Technology',
    count: '150K+',
    description: 'Software development, IT services, and tech roles across industries'
  },
  {
    id: 2,
    title: 'Banking & Finance',
    count: '45K+',
    description: 'Banking, insurance, investment, and financial services'
  },
  {
    id: 3,
    title: 'Sales & Marketing',
    count: '65K+',
    description: 'Sales, marketing, brand management, and business development'
  },
  {
    id: 4,
    title: 'HR & Admin',
    count: '28K+',
    description: 'Human resources, administration, and talent management'
  },
  {
    id: 5,
    title: 'Engineering',
    count: '120K+',
    description: 'Mechanical, civil, electrical, and specialized engineering roles'
  },
  {
    id: 6,
    title: 'Healthcare & Pharma',
    count: '35K+',
    description: 'Medical professionals, pharmaceutical, and healthcare services'
  },
  {
    id: 7,
    title: 'Education & Teaching',
    count: '18K+',
    description: 'Teaching, education management, and training professionals'
  },
  {
    id: 8,
    title: 'Hospitality & Travel',
    count: '25K+',
    description: 'Hotels, tourism, restaurants, and travel services'
  },
  {
    id: 9,
    title: 'Media & Entertainment',
    count: '15K+',
    description: 'Content creation, media production, and entertainment industry'
  }
];

export default PopularCategories;
