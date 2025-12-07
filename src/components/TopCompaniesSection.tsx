import React from 'react';
import { Link } from 'react-router-dom';

const topCompanies = [
  {
    id: 1,
    category: 'Startups',
    count: '351 are actively hiring',
    logos: [
      { name: 'Mobilution', url: '/placeholder.svg' },
      { name: 'Workspotting', url: '/placeholder.svg' },
      { name: 'Cashkaro', url: '/placeholder.svg' },
      { name: 'Rapidino', url: '/placeholder.svg' }
    ]
  },
  {
    id: 2,
    category: 'MNCs',
    count: '1.8K+ are actively hiring',
    logos: [
      { name: 'Vectone', url: '/placeholder.svg' },
      { name: 'IBM', url: '/placeholder.svg' },
      { name: 'Circle', url: '/placeholder.svg' },
      { name: 'Crowe', url: '/placeholder.svg' }
    ]
  },
  {
    id: 3,
    category: 'Internet',
    count: '420 are actively hiring',
    logos: [
      { name: 'Google', url: '/placeholder.svg' },
      { name: 'Amazon', url: '/placeholder.svg' },
      { name: 'Meta', url: '/placeholder.svg' },
      { name: 'Flipkart', url: '/placeholder.svg' }
    ]
  },
  {
    id: 4,
    category: 'Unicorn',
    count: '93 are actively hiring',
    logos: [
      { name: 'Zepto', url: '/placeholder.svg' },
      { name: 'Swiggy', url: '/placeholder.svg' },
      { name: 'CRED', url: '/placeholder.svg' },
      { name: 'Razorpay', url: '/placeholder.svg' }
    ]
  },
  {
    id: 5,
    category: 'Edtech',
    count: '185 are actively hiring',
    logos: [
      { name: 'BYJU\'S', url: '/placeholder.svg' },
      { name: 'Unacademy', url: '/placeholder.svg' },
      { name: 'upGrad', url: '/placeholder.svg' },
      { name: 'Vedantu', url: '/placeholder.svg' }
    ]
  },
  {
    id: 6,
    category: 'Banking and Finance',
    count: '743 are actively hiring',
    logos: [
      { name: 'HDFC', url: '/placeholder.svg' },
      { name: 'ICICI', url: '/placeholder.svg' },
      { name: 'Axis', url: '/placeholder.svg' },
      { name: 'SBI', url: '/placeholder.svg' }
    ]
  },
];

const TopCompaniesSection = () => {
  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Top companies hiring now</h2>
        <Link to="/companies" className="text-blue-600 font-medium">View all</Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topCompanies.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg">{category.category}</h3>
                <p className="text-gray-600 text-sm">{category.count}</p>
              </div>
              <Link to={`/companies/${category.category.toLowerCase()}`} className="text-blue-600 text-sm">View all</Link>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {category.logos.map((company, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <img 
                      src={company.url} 
                      alt={company.name} 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="text-xs text-center text-gray-600 truncate w-full">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCompaniesSection;