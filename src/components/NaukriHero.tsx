import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { jobDataByCategory, type Job } from '../data/jobs';

const NaukriHero = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const allJobs = Object.values(jobDataByCategory).flat() as Job[];
    const filteredJobs = allJobs.filter(job => {
      const matchesQuery = searchQuery ? 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
        : true;
      const matchesExperience = experience ?
        job.experience.toLowerCase().includes(experience.toLowerCase())
        : true;
      const matchesLocation = location ?
        job.location.toLowerCase().includes(location.toLowerCase())
        : true;
      return matchesQuery && matchesExperience && matchesLocation;
    });
    sessionStorage.setItem('searchResults', JSON.stringify(filteredJobs));
    navigate(`/job-search/results?q=${searchQuery}&exp=${experience}&loc=${location}`);
  };

  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden relative min-h-screen flex flex-col items-center justify-center bg-[#06102b] text-white overflow-hidden px-4">
        {/* Logo */}
        <img
          src="/naukri-logo.png"
          alt="Naukri Logo"
          className="h-10 mb-6"
        />

        {/* Headings */}
        <h1 className="text-[26px] font-bold text-white mb-2 text-center leading-tight">
          Find your dream job now
        </h1>
        <p className="text-[14px] text-white/70 mb-6 text-center">
          5 lakh+ jobs for you to explore
        </p>

        {/* Illustration */}
        <div className="relative w-[250px] h-[320px] mx-auto mb-8">
          <img
            src="/home bg.svg"
            alt="bg arch"
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
          <img
            src="/home image.png"
            alt="Job seeker illustration"
            className="relative w-full h-full object-contain"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 w-full max-w-[300px] mb-4">
          <Link to="/login" className="flex-1">
            <button className="w-full py-3 bg-white text-[#1d74f5] text-[14px] font-medium rounded-full hover:bg-blue-50 transition">
              Login
            </button>
          </Link>
          <Link to="/register" className="flex-1">
            <button className="w-full py-3 bg-[#1d74f5] text-white text-[14px] font-medium rounded-full hover:bg-blue-700 transition">
              Register
            </button>
          </Link>
        </div>

        <button className="w-full max-w-[300px] py-3 bg-[#ff7555] text-white text-[14px] font-medium rounded-full hover:bg-[#f06a4b] transition">
          Download app
        </button>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex min-h-[400px] flex-col items-center justify-center bg-gradient-to-r from-[#f8f8f8] to-[#ffffff] py-16">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h1 className="text-[40px] font-bold text-[#1b2437] text-center mb-3">
            Find your dream job now
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            5 lakh+ jobs for you to explore
          </p>

          {/* Search Section */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-8">
            <div className="flex gap-3 p-3 bg-white rounded-xl shadow-lg">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter skills / designations / companies"
                  className="w-full pl-10 pr-4 py-3 bg-transparent focus:outline-none text-gray-900"
                />
              </div>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="px-4 py-3 bg-transparent border-l border-gray-200 focus:outline-none text-gray-700 min-w-[180px]"
              >
                <option value="">Select experience</option>
                <option value="fresher">Fresher</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-7">5-7 years</option>
                <option value="7-10">7-10 years</option>
                <option value="10+">10+ years</option>
              </select>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
                className="px-4 py-3 bg-transparent border-l border-gray-200 focus:outline-none text-gray-700 min-w-[180px]"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#4A90E2] text-white font-medium rounded-lg hover:bg-blue-600 transition"
              >
                Search
              </button>
            </div>
          </form>

          {/* Popular Searches */}
          <div className="flex justify-center items-center gap-4 text-sm text-gray-600">
            <span>Popular Searches:</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-600">Software Engineer</a>
              <span>•</span>
              <a href="#" className="hover:text-blue-600">Data Scientist</a>
              <span>•</span>
              <a href="#" className="hover:text-blue-600">Product Manager</a>
              <span>•</span>
              <a href="#" className="hover:text-blue-600">Marketing Specialist</a>
              <span>•</span>
              <a href="#" className="hover:text-blue-600">UI/UX Designer</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NaukriHero;
