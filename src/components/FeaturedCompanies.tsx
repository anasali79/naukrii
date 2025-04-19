
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Star } from 'lucide-react';

// Sample company data
const companies = [
  {
    id: 1,
    name: 'Tech Innovations Inc',
    logo: '💻',
    location: 'Bangalore, Mumbai, Pune',
    employees: '1000-5000',
    rating: 4.2,
    openings: 42,
  },
  {
    id: 2,
    name: 'Global Solutions',
    logo: '🌐',
    location: 'Delhi, Hyderabad, Chennai',
    employees: '5000-10000',
    rating: 4.5,
    openings: 78,
  },
  {
    id: 3,
    name: 'CloudNine Tech',
    logo: '☁️',
    location: 'Bangalore, Pune',
    employees: '500-1000',
    rating: 4.0,
    openings: 25,
  },
  {
    id: 4,
    name: 'Analytics Hub',
    logo: '📊',
    location: 'Mumbai, Gurgaon',
    employees: '1000-5000',
    rating: 4.3,
    openings: 35,
  },
];

const FeaturedCompanies = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Companies Hiring Now</h2>
          <Button variant="outline" className="text-naukri-blue border-naukri-blue hover:bg-naukri-lightBlue">
            View All Companies
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company) => (
            <Card key={company.id} className="job-card border border-gray-200 h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-naukri-lightBlue rounded-md text-2xl mr-3">
                    {company.logo}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                </div>
                
                <div className="mb-3 flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm">{company.rating}/5</span>
                  <span className="text-sm text-gray-500 ml-1">reviews</span>
                </div>
                
                <div className="flex items-start mb-3">
                  <MapPin className="h-4 w-4 text-gray-500 mt-0.5 mr-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{company.location}</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <Users className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">{company.employees} employees</span>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-2 border-naukri-blue text-naukri-blue hover:bg-naukri-lightBlue"
                >
                  {company.openings} Jobs
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button className="bg-naukri-blue hover:bg-naukri-darkBlue">
            Explore All Companies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
