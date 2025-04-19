import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import JobCard from '@/components/JobCard';
import type { Job } from '@/data/jobs';
import TopCompaniesSection from '@/components/TopCompaniesSection';
import TrendingSection from '@/components/TrendingSection';

const JobSearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get search results from sessionStorage
    const results = sessionStorage.getItem('searchResults');
    if (results) {
      setSearchResults(JSON.parse(results));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {searchResults.length > 0 ? (
          <>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Search Results
              </h1>
              <p className="text-gray-600">
                Found {searchResults.length} jobs matching your criteria
              </p>
            </div>

            <div className="mb-6 flex justify-between items-center">
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Experience: {searchParams.get('exp') || 'Any'}
                </Button>
                <Button variant="outline" size="sm">
                  Location: {searchParams.get('loc') || 'Any'}
                </Button>
              </div>
              <Button variant="outline" className="flex items-center gap-1">
                <Menu className="h-4 w-4" />
                <span>Filter</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {searchResults.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">No jobs found</h2>
            <p className="text-gray-600 mb-8">
              Try adjusting your search criteria or explore trending sections below
            </p>
            
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

export default JobSearchResults; 