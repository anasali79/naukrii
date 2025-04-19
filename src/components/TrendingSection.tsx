
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Building2, 
  Wrench, 
  Package, 
  GraduationCap,
  CreditCard,
  Rocket,
  Code,
  User,
  LayoutDashboard,
  Star,
  Users
} from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

const trendingItems = [
  {
    id: 1,
    name: 'Remote',
    icon: <Home className="h-6 w-6" />,
    jobCount: '12.6K+ jobs'
  },
  {
    id: 2,
    name: 'MNC',
    icon: <Building2 className="h-6 w-6" />,
    jobCount: '70.4K+ jobs'
  },
  {
    id: 3,
    name: 'HR',
    icon: <Users className="h-6 w-6" />,
    jobCount: '3.6K+ jobs'
  },
  {
    id: 4,
    name: 'Engineering',
    icon: <Wrench className="h-6 w-6" />,
    jobCount: '35.2K+ jobs'
  },
  {
    id: 5,
    name: 'Supply Chain',
    icon: <Package className="h-6 w-6" />,
    jobCount: '8.7K+ jobs'
  },
  {
    id: 6,
    name: 'Internship',
    icon: <GraduationCap className="h-6 w-6" />,
    jobCount: '15.3K+ jobs'
  },
  {
    id: 7,
    name: 'Banking & Finance',
    icon: <CreditCard className="h-6 w-6" />,
    jobCount: '22.8K+ jobs'
  },
  {
    id: 8,
    name: 'Startup',
    icon: <Rocket className="h-6 w-6" />,
    jobCount: '18.1K+ jobs'
  },
  {
    id: 9,
    name: 'Software & IT',
    icon: <Code className="h-6 w-6" />,
    jobCount: '42.5K+ jobs'
  },
  {
    id: 10,
    name: 'Fresher',
    icon: <User className="h-6 w-6" />,
    jobCount: '25.9K+ jobs'
  },
  {
    id: 11,
    name: 'Project Mgmt',
    icon: <LayoutDashboard className="h-6 w-6" />,
    jobCount: '11.3K+ jobs'
  },
  {
    id: 12,
    name: 'Fortune 500',
    icon: <Star className="h-6 w-6" />,
    jobCount: '32.7K+ jobs'
  }
];

const TrendingSection = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Trending on Naukri today
      </h2>
      
      <div className="w-full overflow-auto pb-4 hide-scrollbar">
        <div className="flex space-x-4" style={{ minWidth: 'max-content' }}>
          {trendingItems.map((item) => (
            <Link 
              key={item.id} 
              to={`/jobs/${item.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
              className="min-w-[240px] bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                <p className="text-gray-600">{item.jobCount}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
