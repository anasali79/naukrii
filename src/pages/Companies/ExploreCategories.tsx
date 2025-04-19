
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building } from 'lucide-react';

const ExploreCategories = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Explore Company Categories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyCategories.map((category) => (
            <div 
              key={category.id} 
              className="border rounded-lg p-6 hover:shadow-md transition duration-200"
            >
              <div className="flex items-center mb-4">
                <Building className="h-6 w-6 text-blue-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">{category.name}</h2>
              </div>
              <p className="text-gray-600 mb-3">{category.companyCount} companies</p>
              <p className="text-sm text-gray-500">{category.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const companyCategories = [
  {
    id: 1,
    name: 'MNCs',
    companyCount: '5,000+',
    description: 'Large multinational corporations with offices across the globe'
  },
  {
    id: 2,
    name: 'Internet',
    companyCount: '3,200+',
    description: 'Companies focused on internet services, e-commerce, and online platforms'
  },
  {
    id: 3,
    name: 'Startups',
    companyCount: '8,000+',
    description: 'Innovative early-stage companies with high growth potential'
  },
  {
    id: 4,
    name: 'Unicorns',
    companyCount: '100+',
    description: 'Startups valued at over $1 billion with rapid growth'
  },
  {
    id: 5,
    name: 'Edtech',
    companyCount: '800+',
    description: 'Educational technology companies transforming learning experiences'
  },
  {
    id: 6,
    name: 'Banking and Finance',
    companyCount: '2,500+',
    description: 'Banking institutions, financial services, and investment firms'
  },
  {
    id: 7,
    name: 'Product',
    companyCount: '4,200+',
    description: 'Companies focused on building and selling physical or digital products'
  },
  {
    id: 8,
    name: 'Fortune 500',
    companyCount: '500+',
    description: 'Global corporations ranked among the top 500 by Fortune magazine'
  },
  {
    id: 9,
    name: 'Fintech',
    companyCount: '1,200+',
    description: 'Financial technology companies innovating payment and banking solutions'
  },
  {
    id: 10,
    name: 'Healthcare',
    companyCount: '2,800+',
    description: 'Healthcare providers, medical services, and health technology firms'
  }
];

export default ExploreCategories;
