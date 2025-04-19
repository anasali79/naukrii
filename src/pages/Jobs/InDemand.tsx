
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Briefcase } from 'lucide-react';

const InDemand = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Jobs in Demand</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Hot Jobs Right Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotJobs.map((job) => (
              <div 
                key={job.id} 
                className="border rounded-lg p-5 hover:shadow-md transition duration-200"
              >
                <div className="flex items-start mb-3">
                  <div className="bg-blue-100 p-2 rounded-md mr-3">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{job.title}</h3>
                    <p className="text-gray-600 text-sm">{job.company}</p>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{job.location}</span>
                  <span>{job.salary}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Trending Skills</h2>
          <div className="flex flex-wrap gap-3">
            {trendingSkills.map((skill) => (
              <div 
                key={skill.id} 
                className="bg-gray-100 px-4 py-2 rounded-full text-gray-700 hover:bg-gray-200 transition"
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const hotJobs = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'TechCorp India',
    location: 'Bangalore',
    salary: '15-25 LPA'
  },
  {
    id: 2,
    title: 'Data Scientist',
    company: 'Analytics Solutions',
    location: 'Hyderabad',
    salary: '18-30 LPA'
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    company: 'CloudTech Services',
    location: 'Pune',
    salary: '12-22 LPA'
  },
  {
    id: 4,
    title: 'Product Manager',
    company: 'InnovateSoft',
    location: 'Gurgaon',
    salary: '20-35 LPA'
  },
  {
    id: 5,
    title: 'UX/UI Designer',
    company: 'DesignFirst',
    location: 'Mumbai',
    salary: '10-18 LPA'
  },
  {
    id: 6,
    title: 'Machine Learning Engineer',
    company: 'AI Solutions Ltd',
    location: 'Bangalore',
    salary: '22-40 LPA'
  }
];

const trendingSkills = [
  { id: 1, name: 'React.js' },
  { id: 2, name: 'Python' },
  { id: 3, name: 'Machine Learning' },
  { id: 4, name: 'AWS' },
  { id: 5, name: 'DevOps' },
  { id: 6, name: 'Data Science' },
  { id: 7, name: 'Node.js' },
  { id: 8, name: 'Docker' },
  { id: 9, name: 'Kubernetes' },
  { id: 10, name: 'TypeScript' },
  { id: 11, name: 'UI/UX Design' },
  { id: 12, name: 'Flutter' }
];

export default InDemand;
