
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

// Sample job categories data
const categories = [
  {
    id: 1,
    name: 'Information Technology',
    icon: '💻',
    jobCount: 12500,
    trending: true,
  },
  {
    id: 2,
    name: 'Marketing & Sales',
    icon: '📈',
    jobCount: 8750,
    trending: true,
  },
  {
    id: 3,
    name: 'Finance & Banking',
    icon: '💰',
    jobCount: 7250,
    trending: false,
  },
  {
    id: 4,
    name: 'Healthcare & Medicine',
    icon: '🏥',
    jobCount: 6500,
    trending: true,
  },
  {
    id: 5,
    name: 'Education & Teaching',
    icon: '🎓',
    jobCount: 4200,
    trending: false,
  },
  {
    id: 6,
    name: 'Engineering & Construction',
    icon: '🏗️',
    jobCount: 3800,
    trending: false,
  },
  {
    id: 7,
    name: 'Design & Creative',
    icon: '🎨',
    jobCount: 3500,
    trending: true,
  },
  {
    id: 8,
    name: 'Customer Service',
    icon: '🤝',
    jobCount: 3100,
    trending: false,
  },
];

const JobCategories = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Explore Jobs by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse job opportunities across various industries and find the perfect role for your career path
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="job-card border border-gray-200 cursor-pointer hover:border-naukri-blue"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-naukri-lightBlue rounded-md text-2xl">
                    {category.icon}
                  </div>
                  {category.trending && (
                    <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full">
                      Trending
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.jobCount.toLocaleString()} jobs available</p>
                
                <div className="flex items-center text-naukri-blue font-medium">
                  <span>Browse Jobs</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
