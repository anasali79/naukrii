import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Filter, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import JobCard from '@/components/JobCard';
import MainNavigation from '@/components/MainNavigation';
import { jobDataByCategory, type Job } from '@/data/jobs';

const JobsByCategoryPage = () => {
  const { category } = useParams();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (category && jobDataByCategory[category]) {
      setJobs(jobDataByCategory[category]);
    } else {
      // Default to showing the first category if none specified
      const firstCategory = Object.keys(jobDataByCategory)[0];
      setJobs(jobDataByCategory[firstCategory]);
    }
  }, [category]);

  // Format the category for display (convert-dash-case to Title Case)
  const formatCategoryTitle = () => {
    if (!category) return 'Jobs';
    
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Filter jobs based on search criteria
    const filteredJobs = jobDataByCategory[category || Object.keys(jobDataByCategory)[0]].filter(job => {
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

    setJobs(filteredJobs);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MainNavigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link to="/jobs" className="flex items-center text-gray-600 hover:text-blue-600">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Back to Categories</span>
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {formatCategoryTitle()} Jobs
        </h1>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <Input
              type="text"
              placeholder="Search by title, company, or skills"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Select value={experience} onValueChange={setExperience}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fresher">Fresher</SelectItem>
                <SelectItem value="1-3">1-3 years</SelectItem>
                <SelectItem value="3-5">3-5 years</SelectItem>
                <SelectItem value="5-7">5-7 years</SelectItem>
                <SelectItem value="7-10">7-10 years</SelectItem>
                <SelectItem value="10+">10+ years</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full md:w-[200px]"
            />
            <Button type="submit" className="w-full md:w-auto">
              Search Jobs
            </Button>
          </form>
        </div>
        
        <div className="mb-6 flex justify-between items-center">
          <div className="text-gray-600">
            {jobs.length} jobs found
          </div>
          <Button variant="outline" className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <div className="col-span-full text-center p-12 bg-white rounded-lg shadow">
              <h3 className="text-xl font-medium mb-2">No jobs found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or browse all available jobs.
              </p>
              <Button asChild>
                <Link to="/job-search">Browse All Jobs</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsByCategoryPage;
