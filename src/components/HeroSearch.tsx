
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ searchQuery, location, experience });
    // Navigate to job search page
    navigate('/job-search');
  };

  const experienceOptions = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="bg-gradient-to-r from-naukri-blue to-blue-500 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Find Your Dream Job Today
        </h1>
        <p className="text-lg text-white/80 mb-8">
          Search from thousands of job opportunities for your perfect career match
        </p>
        
        <div className="bg-white p-4 md:p-6 rounded-lg searchbox-shadow">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Skills, Designations, Companies"
                className="pl-10 h-12 border-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Location"
                className="pl-10 h-12 border-gray-300"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-48">
              <Select value={experience} onValueChange={setExperience}>
                <SelectTrigger className="h-12 border-gray-300">
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fresher">Fresher</SelectItem>
                  {experienceOptions.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year} {year === 1 ? 'Year' : 'Years'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button type="submit" className="h-12 bg-naukri-blue hover:bg-naukri-darkBlue md:w-36">
              Search
            </Button>
          </form>
        </div>
        
        <div className="mt-6 text-white/90 flex flex-wrap justify-center gap-2 md:gap-4">
          <span className="text-sm">Popular Searches:</span>
          <a href="#" className="text-sm hover:underline">Software Engineer</a>
          <a href="#" className="text-sm hover:underline">Data Scientist</a>
          <a href="#" className="text-sm hover:underline">Product Manager</a>
          <a href="#" className="text-sm hover:underline">Marketing Specialist</a>
          <a href="#" className="text-sm hover:underline">UI/UX Designer</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
