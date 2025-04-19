
import React, { useState } from 'react';
import NaukriHomeHeader from '@/components/NaukriHomeHeader';
import NaukriFooter from '@/components/NaukriFooter';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, Star, ChevronRight } from 'lucide-react';

// Sample company data
const companies = [
  {
    id: 1,
    name: 'Lam Research',
    logo: '⚫',
    type: 'Foreign MNC',
    employees: '10001-50000 emp.',
    founded: '1980',
    industry: 'B2B',
    rating: 3.7,
    reviews: 280
  },
  {
    id: 2,
    name: 'Sterlite Technologies (STL)',
    logo: '📡',
    type: 'Foreign MNC',
    employees: '5001-10000 emp.',
    founded: '1988',
    industry: 'Hardware & Networking',
    rating: 3.8,
    reviews: 2200
  },
  {
    id: 3,
    name: 'TCS',
    logo: 'T',
    type: 'Indian MNC',
    employees: '100000+ emp.',
    founded: '1968',
    industry: 'IT Services',
    rating: 3.9,
    reviews: 64500
  },
  {
    id: 4,
    name: 'Infosys',
    logo: 'I',
    type: 'Indian MNC',
    employees: '50001-100000 emp.',
    founded: '1981',
    industry: 'IT Services',
    rating: 3.8,
    reviews: 42300
  },
  {
    id: 5,
    name: 'Adobe',
    logo: 'A',
    type: 'Foreign MNC',
    employees: '10001-50000 emp.',
    founded: '1982',
    industry: 'Software Product',
    rating: 4.2,
    reviews: 12800
  },
  {
    id: 6,
    name: 'Swiggy',
    logo: 'S',
    type: 'Unicorn',
    employees: '5001-10000 emp.',
    founded: '2014',
    industry: 'Internet',
    rating: 3.7,
    reviews: 8750
  },
];

const filters = [
  { name: 'Company type', options: ['MNC', 'Startup', 'Unicorn'] },
  { name: 'Location', options: ['Bangalore', 'Delhi', 'Mumbai'] },
  { name: 'Industry', options: ['IT', 'Banking', 'Healthcare'] },
  { name: 'Department', options: ['Engineering', 'HR', 'Finance'] },
];

const AllCompanies = () => {
  const [totalCompanies] = useState(8422);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="naukri-dark-blue">
        <NaukriHomeHeader />
      </div>

      <div className="flex-1 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <button className="mr-4">
              <ChevronRight className="h-6 w-6 transform rotate-180 text-gray-800" />
            </button>
            <h1 className="text-3xl font-bold text-gray-900">
              Top companies hiring now
            </h1>
          </div>

          <div className="flex gap-4 mb-8 overflow-x-auto py-2 hide-scrollbar">
            <Button variant="outline" className="flex items-center gap-2 rounded-full border border-gray-300">
              <Filter className="h-4 w-4" />
              <span>All Filters</span>
            </Button>
            
            {filters.map((filter, index) => (
              <Button key={index} variant="outline" className="rounded-full border border-gray-300 whitespace-nowrap">
                {filter.name}
              </Button>
            ))}
          </div>
          
          <div className="text-gray-500 mb-6">
            Showing {totalCompanies} companies
          </div>
          
          <div className="space-y-4">
            {companies.map((company) => (
              <Card key={company.id} className="overflow-hidden border border-gray-200">
                <div className="p-4 sm:p-6 flex items-center">
                  <div className="w-16 h-16 flex-shrink-0 bg-gray-200 rounded-md flex items-center justify-center text-2xl mr-4">
                    {company.logo}
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2">{company.name}</h2>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-yellow-500 mr-2">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1">{company.rating}</span>
                      </div>
                      <span className="text-gray-500">{company.reviews.toLocaleString()} reviews</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="rounded-full bg-white">
                        {company.type}
                      </Badge>
                      {company.industry && (
                        <Badge variant="outline" className="rounded-full bg-white">
                          {company.industry}
                        </Badge>
                      )}
                      <Badge variant="outline" className="rounded-full bg-white">
                        {company.employees}
                      </Badge>
                      <Badge variant="outline" className="rounded-full bg-white">
                        Founded: {company.founded}
                      </Badge>
                    </div>
                  </div>
                  
                  <ChevronRight className="h-6 w-6 text-gray-400 hidden sm:block" />
                </div>
              </Card>
            ))}
          </div>
          
          <div className="bg-pink-50 rounded-lg p-6 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-lg font-semibold">
                  Make the most out of Naukri by creating your <span className="font-bold">job profile for free!</span>
                </p>
              </div>
              
              <Button className="bg-orange-500 hover:bg-orange-600">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <NaukriFooter />
    </div>
  );
};

export default AllCompanies;
