import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ChevronRight, Download, User, UserPlus, Building2, MessageCircle, FileText, HelpCircle, BookOpen, MessageSquare, ExternalLink, Info, UserCircle2 } from 'lucide-react';
import { jobDataByCategory, type Job } from '@/data/jobs';

const NaukriHomeHeader = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Combine all jobs from different categories
    const allJobs = Object.values(jobDataByCategory).flat() as Job[];
    
    // Filter jobs based on search criteria
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
    
    // Store filtered jobs in sessionStorage
    sessionStorage.setItem('searchResults', JSON.stringify(filteredJobs));
    
    // Navigate to search results page with query parameters
    navigate(`/job-search/results?q=${searchQuery}&exp=${experience}&loc=${location}`);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setExpandedSections([]);
  };

  return (
    <header className="bg-white md:shadow-sm">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#06102b]">
        <button 
          className="text-white hover:bg-[#1c2c4f] p-2 rounded-full"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
        <div className="flex-1 mx-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs here..."
              className="w-full pl-10 pr-4 py-2 bg-[#1c2c4f] text-white rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed inset-y-0 left-0 w-80 bg-white transform transition-transform duration-300 ease-in-out overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <Link to="/" onClick={closeMenu}>
                <img src="/naukri-logo.png" alt="Naukri" className="h-8" />
              </Link>
              <button 
                className="text-gray-600 hover:bg-gray-100 p-2 rounded-full"
                onClick={closeMenu}
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="space-y-4">
              <Link to="/app-download" className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-full" onClick={closeMenu}>
                <Download size={20} />
                <span>Download the app</span>
              </Link>

              <Link to="/login" className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-full" onClick={closeMenu}>
                <User size={20} />
                <span>Login</span>
              </Link>

              <Link to="/register" className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-full" onClick={closeMenu}>
                <UserPlus size={20} />
                <span>Register</span>
              </Link>

              <Link to="/search" className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-full" onClick={closeMenu}>
                <Search size={20} />
                <span>Search jobs</span>
              </Link>

              {/* Jobs Section */}
              <div>
                <button 
                  className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-full"
                  onClick={() => toggleSection('jobs')}
                >
                  <div className="flex items-center gap-3">
                    <Building2 size={20} />
                    <span>Jobs</span>
                  </div>
                  <ChevronRight className={`transform transition-transform ${expandedSections.includes('jobs') ? 'rotate-90' : ''}`} size={20} />
                </button>
                {expandedSections.includes('jobs') && (
                  <div className="ml-8 space-y-3 mt-2">
                    <Link to="/jobs/popular-categories" className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-full" onClick={closeMenu}>Popular categories</Link>
                    <Link to="/jobs/in-demand" className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-full" onClick={closeMenu}>Jobs in demand</Link>
                    <Link to="/jobs/by-location" className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-full" onClick={closeMenu}>Jobs by location</Link>
                  </div>
                )}
              </div>

              {/* Companies Section */}
              <div>
                <button 
                  className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-full"
                  onClick={() => toggleSection('companies')}
                >
                  <div className="flex items-center gap-3">
                    <Building2 size={20} />
                    <span>Companies</span>
                  </div>
                  <ChevronRight className={`transform transition-transform ${expandedSections.includes('companies') ? 'rotate-90' : ''}`} size={20} />
                </button>
                {expandedSections.includes('companies') && (
                  <div className="ml-8 space-y-3 mt-2">
                    <Link to="/companies/explore-categories" className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-full" onClick={closeMenu}>Explore categories</Link>
                    <Link to="/companies/explore-collections" className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-full" onClick={closeMenu}>Explore collections</Link>
                    <Link to="/companies/research" className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-full" onClick={closeMenu}>
                      Research companies
                      <span className="ml-2 inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-blue-500 rounded-full">4</span>
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/paid-services" className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-full" onClick={closeMenu}>
                <FileText size={20} />
                <span>Paid jobseeker services</span>
              </Link>

              {/* Naukri 360 Services */}
              <div>
                <button 
                  className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-full"
                  onClick={() => toggleSection('services')}
                >
                  <div className="flex items-center gap-3">
                    <FileText size={20} />
                    <span>Naukri 360 Services</span>
                  </div>
                  <ChevronRight className={`transform transition-transform ${expandedSections.includes('services') ? 'rotate-90' : ''}`} size={20} />
                </button>
                {expandedSections.includes('services') && (
                  <div className="ml-8 space-y-3 mt-2">
                    <Link to="/services/power-profile" className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-full" onClick={closeMenu}>Power Profile</Link>
                    <Link to="/services/resume-maker" className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-full" onClick={closeMenu}>Resume Maker</Link>
                    <Link to="/services/mock-interview" className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-full" onClick={closeMenu}>Mock Interview Questions</Link>
                    <Link to="/services/resume-writing" className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-full" onClick={closeMenu}>Resume Writing Services</Link>
                    <Link to="/services/code360" className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-full" onClick={closeMenu}>Code 360</Link>
                  </div>
                )}
              </div>

              <Link to="/chat-help" className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-full" onClick={closeMenu}>
                <MessageCircle size={20} />
                <span>Chat for help</span>
              </Link>

              <Link to="/blog" className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-full" onClick={closeMenu}>
                <BookOpen size={20} />
                <span>Naukri blog</span>
              </Link>

              <Link to="/feedback" className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-full" onClick={closeMenu}>
                <MessageSquare size={20} />
                <span>Feedback and rate</span>
              </Link>

              <Link to="/for-employers" className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-full" onClick={closeMenu}>
                <ExternalLink size={20} />
                <span>For employers</span>
              </Link>

              <Link to="/about" className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-full" onClick={closeMenu}>
                <Info size={20} />
                <span>About us</span>
              </Link>

              <div className="flex items-center gap-4">
                <Link to="/profile" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <UserCircle2 className="w-5 h-5" />
                  <span>Profile</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src="/naukri-logo.png" alt="Naukri" className="h-8" />
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 ml-8">
              <Link to="/jobs" className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full">Jobs</Link>
              <Link to="/companies" className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full">Companies</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full">Services</Link>
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-blue-600 px-6 py-2 rounded-full hover:bg-gray-50">
                Login
              </Link>
              <Link to="/register" className="bg-[#ff7555] text-white px-6 py-2 rounded-full hover:bg-[#f06a4b] transition">
                Register
              </Link>
              <button className="text-gray-700 hover:text-blue-600 px-6 py-2 rounded-full hover:bg-gray-50">
                For employers
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NaukriHomeHeader;
