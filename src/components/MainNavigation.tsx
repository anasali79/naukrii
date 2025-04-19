import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import MobileSidebar from './MobileSidebar';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { supabase } from '@/integrations/supabase/client';
import { useState, useEffect } from 'react';

const MainNavigation = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setIsLoggedIn(!!data.session);
    };
    
    checkSession();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsLoggedIn(!!session);
      }
    );
    
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };
  
  return (
    <header className="bg-white border-b sticky top-0 z-40">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <MobileSidebar />
          <Link to="/" className="flex items-center">
            <img 
              src="/naukri-logo.png" 
              alt="Naukri Logo" 
              className="h-10 ml-2 md:ml-0" 
            />
          </Link>
          
          <div className="hidden md:flex ml-10">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Jobs</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md"
                            to="/job-search"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-blue-900">
                              Find Your Dream Job
                            </div>
                            <p className="text-sm leading-tight text-blue-800">
                              Search through thousands of job listings tailored to your skills and experience.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link to="/jobs/popular-categories" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Popular Categories</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Browse jobs by industry and specialization
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/jobs/in-demand" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Jobs in Demand</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Explore the most in-demand positions right now
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/jobs/by-location" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Jobs by Location</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Find jobs in your city or region
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Companies</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                      <li>
                        <Link to="/companies/explore-categories" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Explore Categories</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Browse companies by type and industry
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/companies/explore-collections" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Explore Collections</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Curated lists of top companies across sectors
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/companies/research" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="flex items-center">
                            <span className="text-sm font-medium leading-none">Research Companies</span>
                            <span className="ml-2 bg-blue-500 text-white text-xs px-1 rounded">New</span>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Get insights into company culture, benefits, and interview process
                          </p>
                        </Link>
                      </li>
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md"
                            to="/companies"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-blue-900">
                              Discover Great Employers
                            </div>
                            <p className="text-sm leading-tight text-blue-800">
                              Research and connect with top companies that match your career goals.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <Link to="/paid-services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Paid Jobseeker Services</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Premium services to boost your job search
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/power-profile" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Power Profile</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Enhance your visibility to recruiters
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/resume-maker" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Resume Maker</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Create professional resumes with our easy-to-use tools
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/mock-interview" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Mock Interview Questions</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Practice with industry-specific interview questions
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/chat-help" className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  )}>
                    Chat for Help
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/job-search" className="hidden sm:flex">
            <Button variant="outline" size="sm" className="gap-2">
              <Search className="h-4 w-4" />
              <span>Search</span>
            </Button>
          </Link>
          
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <Link to="/notifications">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    3
                  </span>
                </Button>
              </Link>
              <div className="relative">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-50">
                  <div className="py-1">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                    <Link to="/applied-jobs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Applied Jobs
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="outline" size="sm">Login</Button>
              </Link>
              <Link to="/register" className="hidden sm:block">
                <Button size="sm">Register</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
