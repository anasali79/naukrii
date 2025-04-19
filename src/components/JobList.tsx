import React from 'react';
import { jobDataByCategory, type Job } from '../data/jobs';
import JobCard from './JobCard';

interface JobListProps {
  category?: string;
  searchQuery?: string;
  experience?: string;
  location?: string;
  isLoggedIn: boolean;
}

const JobList: React.FC<JobListProps> = ({ 
  category, 
  searchQuery = '', 
  experience = '', 
  location = '',
  isLoggedIn 
}) => {
  // Get all jobs if no category specified, otherwise get jobs from that category
  const jobs = category 
    ? jobDataByCategory[category] || []
    : Object.values(jobDataByCategory).flat();

  // Filter jobs based on search criteria
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = searchQuery
      ? job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;

    const matchesExperience = experience
      ? job.experience.toLowerCase().includes(experience.toLowerCase())
      : true;

    const matchesLocation = location
      ? job.location.toLowerCase().includes(location.toLowerCase())
      : true;

    return matchesSearch && matchesExperience && matchesLocation;
  });

  if (filteredJobs.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
        <p className="text-gray-600">
          Try adjusting your search criteria or check back later for new opportunities.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredJobs.map(job => (
        <JobCard
          key={job.id}
          job={job}
          isLoggedIn={isLoggedIn}
        />
      ))}
    </div>
  );
};

export default JobList; 