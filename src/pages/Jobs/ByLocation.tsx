
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin } from 'lucide-react';

const ByLocation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Jobs by Location</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {majorCities.map((city) => (
            <div 
              key={city.id} 
              className="border rounded-lg p-6 hover:shadow-md transition"
            >
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-red-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">{city.name}</h2>
              </div>
              <p className="text-gray-600 mb-3">{city.jobCount} jobs available</p>
              <div className="text-sm text-gray-500">
                <p>Top sectors: {city.topSectors}</p>
                <p className="mt-1">Average CTC: {city.averageSalary}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const majorCities = [
  {
    id: 1,
    name: 'Bangalore',
    jobCount: '85,000+',
    topSectors: 'IT, Startups, E-commerce',
    averageSalary: '12-18 LPA'
  },
  {
    id: 2,
    name: 'Mumbai',
    jobCount: '70,000+',
    topSectors: 'Finance, Media, Marketing',
    averageSalary: '10-16 LPA'
  },
  {
    id: 3,
    name: 'Delhi NCR',
    jobCount: '95,000+',
    topSectors: 'IT, Finance, Consulting',
    averageSalary: '11-17 LPA'
  },
  {
    id: 4,
    name: 'Hyderabad',
    jobCount: '65,000+',
    topSectors: 'IT, Pharma, Analytics',
    averageSalary: '10-15 LPA'
  },
  {
    id: 5,
    name: 'Pune',
    jobCount: '50,000+',
    topSectors: 'IT, Automobile, Manufacturing',
    averageSalary: '9-14 LPA'
  },
  {
    id: 6,
    name: 'Chennai',
    jobCount: '40,000+',
    topSectors: 'IT, Manufacturing, Healthcare',
    averageSalary: '8-13 LPA'
  },
  {
    id: 7,
    name: 'Kolkata',
    jobCount: '30,000+',
    topSectors: 'Finance, Education, IT',
    averageSalary: '7-12 LPA'
  },
  {
    id: 8,
    name: 'Ahmedabad',
    jobCount: '25,000+',
    topSectors: 'Manufacturing, Pharma, Textiles',
    averageSalary: '6-11 LPA'
  },
  {
    id: 9,
    name: 'Remote',
    jobCount: '45,000+',
    topSectors: 'IT, Content, Customer Support',
    averageSalary: '8-18 LPA'
  }
];

export default ByLocation;
