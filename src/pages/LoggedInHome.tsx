import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import ProfileMenu from '@/components/ProfileMenu';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight, Bell, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const LoggedInHome = () => {
  const { user } = useAuth();
  const userName = user?.user_metadata?.full_name || 'User';
  const profileCompletion = 5;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left section */}
            <div className="flex items-center gap-8">
              <Link to="/">
                <img src="/naukri-logo.png" alt="Naukri" className="h-8" />
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/jobs" className="text-gray-700 hover:text-blue-600">
                  Jobs
                  <span className="ml-1 text-xs bg-red-500 text-white rounded-full px-1.5">1</span>
                </Link>
                <Link to="/companies" className="text-gray-700 hover:text-blue-600">
                  Companies
                </Link>
                <Link to="/services" className="text-gray-700 hover:text-blue-600">
                  Services
                  <span className="ml-1 text-xs bg-red-500 text-white rounded-full px-1.5">1</span>
                </Link>
              </nav>
            </div>

            {/* Search bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  type="text"
                  placeholder="Search jobs here"
                  className="w-full pl-10 pr-4 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-4">
              <Button variant="outline" className="hidden md:flex items-center gap-2 text-blue-600 border-blue-600 hover:bg-blue-50">
                <span>naukri</span>
                <span className="font-bold">360</span>
              </Button>
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <ProfileMenu userName={userName} profileCompletion={profileCompletion} />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-medium">{userName}</h3>
                  <div className="text-sm text-gray-500">What are you missing?</div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <img src="/placeholder.svg" alt="" className="w-4 h-4" />
                  <span>Job application updates</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <img src="/placeholder.svg" alt="" className="w-4 h-4" />
                  <span>Direct jobs from recruiters</span>
                </div>
                <Button onClick={() => navigate('/profile/edit')} className="w-full bg-blue-600 hover:bg-blue-700 text-white">Complete profile</Button>
              </div>
              <div className="mt-6 space-y-4">
                <Link to="/my-home" className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded text-gray-700">
                  <img src="/placeholder.svg" alt="" className="w-5 h-5" />
                  <span>My home</span>
                </Link>
                <Link to="/jobs" className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded text-gray-700">
                  <img src="/placeholder.svg" alt="" className="w-5 h-5" />
                  <span>Jobs</span>
                </Link>
                <Link to="/companies" className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded text-gray-700">
                  <img src="/placeholder.svg" alt="" className="w-5 h-5" />
                  <span>Companies</span>
                </Link>
                <Link to="/blogs" className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded text-gray-700">
                  <img src="/placeholder.svg" alt="" className="w-5 h-5" />
                  <span>Blogs</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-6">
            {/* Mock Interview Section */}
            <Card className="mb-6">
              <div className="p-6 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="text-white">
                    <h2 className="text-lg font-semibold mb-2">Give customised mock interview with AI</h2>
                    <p className="mb-4">Get AI answers, tips and insights</p>
                    <Button className="bg-white text-cyan-600 hover:bg-gray-100">Start practicing</Button>
                  </div>
                  <img src="/placeholder.svg" alt="Mock Interview" className="w-24" />
                </div>
              </div>
            </Card>

            {/* Recommended Jobs */}
            <Card className="mb-6">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Recommended jobs (1)</h2>
                  <Link to="/jobs" className="text-blue-600 hover:text-blue-700 text-sm">View all</Link>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <img src="/placeholder.svg" alt="Wipro" className="w-12 h-12 rounded" />
                        <div>
                          <h3 className="font-medium">Developer - L4</h3>
                          <p className="text-gray-600 text-sm">Wipro • 3-7 years</p>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm">Chennai</p>
                    </div>
                    <Link to="/jobs/developer-l4" className="text-blue-600 hover:text-blue-700 text-sm">
                      View all jobs
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Get the best job recommendations by filling up your career needs.{' '}
                  <Link to="/profile/edit" className="text-blue-600 hover:text-blue-700">Add now</Link>
                </p>
              </div>
            </Card>

            {/* Create Resume */}
            <Card className="mb-6">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold mb-4">Create your resume in 3 easy steps</h2>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-4">
                      <li>Add the missing details in your profile</li>
                      <li>Choose a template for your resume</li>
                      <li>Improve the content with AI</li>
                    </ol>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">Create resume</Button>
                  </div>
                  <img src="/placeholder.svg" alt="Resume" className="w-32" />
                </div>
              </div>
            </Card>

            {/* Top Companies */}
            <Card className="mb-6">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Top companies</h2>
                  <Link to="/companies" className="text-blue-600 hover:text-blue-700 text-sm">View all</Link>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: 'Thomson Reuters', logo: '/placeholder.svg', rating: '4.1', reviews: '1.6K+' },
                    { name: 'Infosys', logo: '/placeholder.svg', rating: '3.8', reviews: '21.5K+' },
                    { name: 'V-Mart', logo: '/placeholder.svg', rating: '4.2', reviews: '2.5K+' }
                  ].map((company) => (
                    <div key={company.name} className="border rounded-lg p-4">
                      <img src={company.logo} alt={company.name} className="h-12 mb-3" />
                      <h3 className="font-medium mb-1">{company.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <span>★ {company.rating}</span>
                        <span>•</span>
                        <span>{company.reviews} reviews</span>
                      </div>
                      <Link to={`/companies/${company.name.toLowerCase().replace(' ', '-')}`} className="text-blue-600 hover:text-blue-700 text-sm block mt-2">
                        View jobs
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Blogs Section */}
            <Card className="mb-6">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Blogs</h2>
                  <Link to="/blogs" className="text-blue-600 hover:text-blue-700 text-sm">See all</Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Understanding Hiring Trends With Naukri JobSpeak Report - March 2024',
                      date: '7 Mar 2024',
                      image: '/placeholder.svg'
                    },
                    {
                      title: 'WOMEN @ WORK: The Unfinished Truth',
                      date: '4 Mar 2024',
                      image: '/placeholder.svg'
                    }
                  ].map((blog) => (
                    <Link key={blog.title} to={`/blogs/${blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="group">
                      <div className="relative h-40 mb-2 rounded-lg overflow-hidden">
                        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="font-medium group-hover:text-blue-600 line-clamp-2">{blog.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{blog.date}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            {/* Profile Completion */}
            <Card className="mb-6">
              <div className="p-6">
                <h2 className="font-semibold mb-4">Profile completion</h2>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">5%</span>
                  <span className="text-sm text-blue-600">Add now</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '5%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mb-4">Improve your chances of getting a call by 3x</p>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  Complete profile
                </Button>
              </div>
            </Card>

            {/* WhatsApp Updates */}
            <Card className="mb-6">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <img src="/whatsapp.svg" alt="" className="w-12" />
                  <div>
                    <h2 className="font-medium mb-1">Get updates directly on WhatsApp!</h2>
                    <p className="text-sm text-gray-600 mb-3">Know instantly when status of your job application changes</p>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">Opt-in now</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-12 gap-8">
            {/* Logo and Social Links */}
            <div className="col-span-12 md:col-span-3">
              <img src="/naukri-logo.png" alt="Naukri" className="h-8 mb-6" />
              <div className="text-sm text-gray-600 mb-4">Connect with us</div>
              <div className="flex gap-4">
                <a href="https://facebook.com/naukri" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                  <img src="/social/facebook.svg" alt="Facebook" className="h-5 w-5" />
                </a>
                <a href="https://instagram.com/naukri" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                  <img src="/social/instagram.svg" alt="Instagram" className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/naukri" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                  <img src="/social/twitter.svg" alt="Twitter" className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/company/naukri" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                  <img src="/social/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Links Column 1 */}
            <div className="col-span-6 md:col-span-2">
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About us</Link></li>
                <li><Link to="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
                <li><Link to="/employer-home" className="text-gray-600 hover:text-gray-900">Employer home</Link></li>
                <li><Link to="/sitemap" className="text-gray-600 hover:text-gray-900">Sitemap</Link></li>
                <li><Link to="/credits" className="text-gray-600 hover:text-gray-900">Credits</Link></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div className="col-span-6 md:col-span-2">
              <ul className="space-y-3 text-sm">
                <li><Link to="/help-center" className="text-gray-600 hover:text-gray-900">Help center</Link></li>
                <li><Link to="/summons-notices" className="text-gray-600 hover:text-gray-900">Summons/Notices</Link></li>
                <li><Link to="/grievances" className="text-gray-600 hover:text-gray-900">Grievances</Link></li>
                <li><Link to="/report-issue" className="text-gray-600 hover:text-gray-900">Report issue</Link></li>
              </ul>
            </div>

            {/* Links Column 3 */}
            <div className="col-span-6 md:col-span-2">
              <ul className="space-y-3 text-sm">
                <li><Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy policy</Link></li>
                <li><Link to="/terms-conditions" className="text-gray-600 hover:text-gray-900">Terms & conditions</Link></li>
                <li><Link to="/fraud-alert" className="text-gray-600 hover:text-gray-900">Fraud alert</Link></li>
                <li><Link to="/trust-safety" className="text-gray-600 hover:text-gray-900">Trust & safety</Link></li>
              </ul>
            </div>

            {/* App Download Section */}
            <div className="col-span-12 md:col-span-3">
              <div className="text-sm">
                <div className="font-medium mb-2">Apply on the go</div>
                <div className="text-gray-600 mb-4">Get real-time job updates on our App</div>
                <div className="flex gap-2">
                  <a href="https://play.google.com/store/apps/details?id=naukri" target="_blank" rel="noopener noreferrer">
                    <img src="/google-play.png" alt="Get it on Google Play" className="h-10" />
                  </a>
                  <a href="https://apps.apple.com/app/naukri" target="_blank" rel="noopener noreferrer">
                    <img src="/app-store.png" alt="Download on the App Store" className="h-10" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-12 md:col-span-3">
                <img src="/info-edge-logo.png" alt="Info Edge India Ltd." className="h-6" />
              </div>
              <div className="col-span-12 md:col-span-6">
                <p className="text-xs text-gray-500">All trademarks are the property of their respective owners<br />All rights reserved © 2024 Info Edge India Ltd.</p>
              </div>
              <div className="col-span-12 md:col-span-3">
                <div className="text-sm text-gray-600">Our businesses</div>
                <div className="flex gap-4 mt-2">
                  <img src="/businesses/99acres.png" alt="99acres" className="h-6" />
                  <img src="/businesses/jeevansathi.png" alt="Jeevansathi" className="h-6" />
                  <img src="/businesses/shiksha.png" alt="Shiksha" className="h-6" />
                  <img src="/businesses/iimjobs.png" alt="IIMJobs" className="h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoggedInHome;