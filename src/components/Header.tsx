
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Bell, User, Search, Download, LogIn, UserCircle2, ExternalLink, BarChart2, Briefcase, Building2, CircleDot, MessageCircle, FileText, Star, InfoIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from '@/lib/utils';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-naukri-blue">JobHunt</h1>
            </Link>
            <nav className="hidden md:ml-10 md:flex space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-gray-600 hover:text-naukri-blue flex items-center">
                    Jobs <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white">
                  <DropdownMenuItem>
                    <Link to="/jobs/popular-categories" className="w-full">Popular categories</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/jobs/in-demand" className="w-full">Jobs in demand</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/jobs/by-location" className="w-full">Jobs by location</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-gray-600 hover:text-naukri-blue flex items-center">
                    Companies <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white">
                  <DropdownMenuItem>
                    <Link to="/companies/explore-categories" className="w-full">Explore categories</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/companies/explore-collections" className="w-full">Explore collections</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex w-full items-center">
                      <Link to="/companies/research" className="flex-1">Research companies</Link>
                      <span className="bg-blue-500 text-white text-xs px-1 rounded">New</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/paid-services" className="text-gray-600 hover:text-naukri-blue">
                Paid jobseeker services
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-gray-600 hover:text-naukri-blue flex items-center">
                    Naukri 360 Services <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white">
                  <DropdownMenuItem>
                    <Link to="/services/power-profile" className="w-full">Power Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services/resume-maker" className="w-full">Resume Maker</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services/mock-interview" className="w-full">Mock Interview Questions</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services/resume-writing" className="w-full">Resume Writing Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services/code360" className="w-full">Code 360</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/download-app" className="text-gray-600 hover:text-naukri-blue flex items-center">
              <Download className="h-5 w-5 mr-1" />
              <span>App</span>
            </Link>
            <Link to="/login" className="text-naukri-blue hover:underline">
              Login
            </Link>
            <Link to="/register">
              <Button className="bg-naukri-blue hover:bg-naukri-darkBlue">
                Register
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5 text-gray-600" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                <DropdownMenuItem>
                  <Link to="/chat-help" className="w-full flex items-center">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat for help
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/blog" className="w-full flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Naukri blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/feedback" className="w-full flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    Feedback and rate
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/for-employers" className="w-full flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    For employers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/about" className="w-full flex items-center">
                    <InfoIcon className="h-4 w-4 mr-2" />
                    About us
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-gray-600">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0 bg-white">
                <div className="p-4 border-b">
                  <Link to="/" className="flex items-center">
                    <h1 className="text-2xl font-bold text-naukri-blue">JobHunt</h1>
                  </Link>
                </div>
                
                <div className="overflow-y-auto h-[calc(100vh-80px)]">
                  <div className="flex flex-col">
                    <Link to="/download-app" className="flex items-center p-4 hover:bg-gray-100">
                      <Download className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-800">Download the app</span>
                    </Link>
                    
                    <Link to="/login" className="flex items-center p-4 hover:bg-gray-100">
                      <LogIn className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-800">Login</span>
                    </Link>
                    
                    <Link to="/register" className="flex items-center p-4 hover:bg-gray-100">
                      <UserCircle2 className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-800">Register</span>
                    </Link>
                    
                    <Link to="/job-search" className="flex items-center p-4 hover:bg-gray-100">
                      <Search className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-800">Search jobs</span>
                    </Link>
                    
                    <div className="flex items-center p-4 hover:bg-gray-100 justify-between">
                      <div className="flex items-center">
                        <Briefcase className="h-5 w-5 text-gray-500 mr-3" />
                        <span className="text-gray-800">Jobs</span>
                      </div>
                      <Link to="/jobs">
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </Link>
                    </div>
                    
                    <div className="flex items-center p-4 hover:bg-gray-100 justify-between">
                      <div className="flex items-center">
                        <Building2 className="h-5 w-5 text-gray-500 mr-3" />
                        <span className="text-gray-800">Companies</span>
                      </div>
                      <Link to="/companies">
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </Link>
                    </div>
                    
                    <Link to="/paid-services" className="flex items-center p-4 hover:bg-gray-100">
                      <BarChart2 className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-800">Paid jobseeker services</span>
                    </Link>
                    
                    <div className="flex items-center p-4 hover:bg-gray-100 justify-between">
                      <div className="flex items-center">
                        <CircleDot className="h-5 w-5 text-gray-500 mr-3" />
                        <span className="text-gray-800">Naukri 360 Services</span>
                      </div>
                      <Link to="/services">
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </Link>
                    </div>
                    
                    <Link to="/chat-help" className="flex items-center p-4 hover:bg-gray-100">
                      <MessageCircle className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-800">Chat for help</span>
                    </Link>
                    
                    <Link to="/blog" className="flex items-center p-4 hover:bg-gray-100">
                      <FileText className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-800">Naukri blog</span>
                    </Link>
                    
                    <Link to="/feedback" className="flex items-center p-4 hover:bg-gray-100">
                      <Star className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-800">Feedback and rate</span>
                    </Link>
                    
                    <Link to="/for-employers" className="flex items-center p-4 hover:bg-gray-100">
                      <ExternalLink className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-800">For employers</span>
                    </Link>
                    
                    <Link to="/about" className="flex items-center p-4 hover:bg-gray-100">
                      <InfoIcon className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-800">About us</span>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
