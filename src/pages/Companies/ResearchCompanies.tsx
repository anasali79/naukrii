
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Star, MapPin, Users, TrendingUp } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ResearchCompanies = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-2">
          <h1 className="text-3xl font-bold text-gray-900">Research Companies</h1>
          <span className="ml-3 bg-blue-500 text-white text-xs px-2 py-1 rounded">New</span>
        </div>
        <p className="text-gray-600 mb-8">Get detailed insights and reviews about companies to make informed career decisions</p>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Find a Company</h2>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Enter company name" 
                  className="pl-10 bg-white border-gray-300 focus:border-blue-500"
                />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Search</Button>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Companies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredCompanies.map((company) => (
            <div 
              key={company.id} 
              className="border rounded-lg overflow-hidden hover:shadow-md transition"
            >
              <div className="p-4 border-b bg-gray-50 flex items-center">
                <div 
                  className="w-12 h-12 rounded bg-white flex items-center justify-center mr-3 border"
                >
                  <span className="text-xl font-bold text-blue-600">{company.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{company.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>{company.rating}/5 ({company.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start mb-3">
                  <MapPin className="h-4 w-4 text-gray-400 mt-0.5 mr-2" />
                  <span className="text-sm text-gray-600">{company.locations}</span>
                </div>
                <div className="flex items-start mb-3">
                  <Users className="h-4 w-4 text-gray-400 mt-0.5 mr-2" />
                  <span className="text-sm text-gray-600">{company.employees} employees</span>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="h-4 w-4 text-gray-400 mt-0.5 mr-2" />
                  <span className="text-sm text-gray-600">{company.industry}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Popular Research Topics</h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {researchTopics.map((topic, index) => (
            <div 
              key={index} 
              className="bg-white border px-4 py-2 rounded-full text-gray-700 hover:bg-gray-50 hover:border-blue-300 transition cursor-pointer"
            >
              {topic}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const featuredCompanies = [
  {
    id: 1,
    name: 'TechFusion Inc',
    rating: 4.2,
    reviews: 2500,
    locations: 'Bangalore, Mumbai, Hyderabad',
    employees: '5,000-10,000',
    industry: 'Information Technology'
  },
  {
    id: 2,
    name: 'GlobalBanking Corp',
    rating: 4.0,
    reviews: 1800,
    locations: 'Mumbai, Delhi, Chennai',
    employees: '10,000+',
    industry: 'Banking & Financial Services'
  },
  {
    id: 3,
    name: 'InnovateSoft',
    rating: 4.5,
    reviews: 950,
    locations: 'Bangalore, Pune',
    employees: '1,000-5,000',
    industry: 'Software Products'
  },
  {
    id: 4,
    name: 'EcomGiant',
    rating: 3.8,
    reviews: 3200,
    locations: 'Bangalore, Delhi, Mumbai, Hyderabad',
    employees: '15,000+',
    industry: 'E-commerce & Internet'
  },
  {
    id: 5,
    name: 'HealthTech Solutions',
    rating: 4.3,
    reviews: 720,
    locations: 'Hyderabad, Chennai, Pune',
    employees: '1,000-5,000',
    industry: 'Healthcare & Technology'
  },
  {
    id: 6,
    name: 'ConsultPro Services',
    rating: 4.1,
    reviews: 1650,
    locations: 'Gurgaon, Mumbai, Bangalore',
    employees: '5,000-10,000',
    industry: 'Consulting & Professional Services'
  }
];

const researchTopics = [
  'Work Culture', 'Salary & Benefits', 'Interview Experiences', 'Career Growth', 
  'Work-Life Balance', 'Leadership', 'Job Security', 'Learning Opportunities',
  'Office Locations', 'Company Reviews'
];

export default ResearchCompanies;
