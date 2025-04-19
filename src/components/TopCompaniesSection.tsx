import React from 'react';
import { Link } from 'react-router-dom';

const topCompanies = [
  {
    id: 1,
    category: 'Startups',
    count: '351 are actively hiring',
    logos: [
      { name: 'Mobilution', url: 'https://via.placeholder.com/50?text=M' },
      { name: 'Workspotting', url: 'https://via.placeholder.com/50?text=W' },
      { name: 'Cashkaro', url: 'https://via.placeholder.com/50?text=C' },
      { name: 'Rapidino', url: 'https://via.placeholder.com/50?text=R' }
    ]
  },
  {
    id: 2,
    category: 'MNCs',
    count: '1.8K+ are actively hiring',
    logos: [
      { name: 'Vectone', url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/IBM_logo.svg' },
      { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
      { name: 'Circle', url: 'https://via.placeholder.com/50?text=C' },
      { name: 'Crowe', url: 'https://via.placeholder.com/50?text=C' }
    ]
  },
  {
    id: 3,
    category: 'Internet',
    count: '420 are actively hiring',
    logos: [
      { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
      { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
      { name: 'Meta', url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Logo.svg' },
      { name: 'Flipkart', url: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Flipkart_logo.svg' }
    ]
  },
  {
    id: 4,
    category: 'Unicorn',
    count: '93 are actively hiring',
    logos: [
      { name: 'Zepto', url: 'https://via.placeholder.com/50?text=Z' },
      { name: 'Swiggy', url: 'https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg' },
      { name: 'CRED', url: 'https://via.placeholder.com/50?text=C' },
      { name: 'Razorpay', url: 'https://via.placeholder.com/50?text=R' }
    ]
  },
  {
    id: 5,
    category: 'Edtech',
    count: '185 are actively hiring',
    logos: [
      { name: 'BYJU\'S', url: 'https://via.placeholder.com/50?text=B' },
      { name: 'Unacademy', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Unacademy_logo.svg' },
      { name: 'upGrad', url: 'https://via.placeholder.com/50?text=U' },
      { name: 'Vedantu', url: 'https://via.placeholder.com/50?text=V' }
    ]
  },
  {
    id: 6,
    category: 'Banking and Finance',
    count: '743 are actively hiring',
    logos: [
      { name: 'HDFC', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png' },
      { name: 'ICICI', url: 'https://upload.wikimedia.org/wikipedia/en/f/f1/ICICI_Bank_Logo.svg' },
      { name: 'Axis', url: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Axis_Bank_logo.svg' },
      { name: 'SBI', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/State_Bank_of_India_logo.svg' }
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

      <div className="w-full overflow-auto pb-4 hide-scrollbar">
        <div className="flex space-x-6" style={{ minWidth: 'max-content' }}>
          {topCompanies.map((category) => (
            <Link 
              key={category.id}
              to={`/companies/${category.category.toLowerCase().replace(/\s+/g, '-')}`}
              className="min-w-[280px] bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-2">{category.category}</h3>
              <p className="text-gray-600 mb-4">{category.count}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                {category.logos.map((logo, index) => (
                  <div key={index} className="w-12 h-12 rounded overflow-hidden flex items-center justify-center bg-gray-100">
                    <img src={logo.url} alt={logo.name} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>

              <button className="text-blue-600 font-medium hover:underline">Explore</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCompaniesSection;
