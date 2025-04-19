import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import JobCard from './JobCard';
import { jobDataByCategory } from '@/data/jobs';

const FeaturedJobs = () => {
  // Get featured jobs from all categories
  const featuredJobs = Object.values(jobDataByCategory)
    .flat()
    .slice(0, 6); // Show first 6 jobs

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Jobs</h2>
          <Link to="/jobs">
            <Button variant="outline" className="text-naukri-blue border-naukri-blue hover:bg-naukri-lightBlue">
              View All Jobs
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/jobs">
            <Button className="bg-naukri-blue hover:bg-naukri-darkBlue">
              Explore All Jobs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
