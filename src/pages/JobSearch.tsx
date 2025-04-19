import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TopCompaniesSection from '@/components/TopCompaniesSection';
import TrendingSection from '@/components/TrendingSection';
import { Link, useSearchParams } from 'react-router-dom';
import JobCard from '@/components/JobCard';
import type { Job } from '@/data/jobs';

const JobSearch = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [experience, setExperience] = useState(searchParams.get('exp') || '');
  const [location, setLocation] = useState(searchParams.get('loc') || '');
  const [searchResults, setSearchResults] = useState<Job[]>([]);
  
  useEffect(() => {
    // Get search results from sessionStorage
    const results = sessionStorage.getItem('searchResults');
    if (results) {
      setSearchResults(JSON.parse(results));
    }
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (experience) params.set('exp', experience);
    if (location) params.set('loc', location);
    window.history.pushState({}, '', `?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Form */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <Input
              type="text"
              placeholder="Search jobs, skills, companies"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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
      </div>

      {/* Search Results */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {searchResults.length > 0 ? (
          <>
            <div className="mb-6 flex justify-between items-center">
              <div className="text-gray-600">
                {searchResults.length} jobs found
              </div>
              <Button variant="outline" className="flex items-center gap-1">
                <Menu className="h-4 w-4" />
                <span>Filter</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {searchResults.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">No jobs found</h2>
            <p className="text-gray-600 mb-8">Try adjusting your search criteria or explore trending sections below</p>
            
            {/* Show trending sections when no results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TopCompaniesSection />
              <TrendingSection />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobSearch;
