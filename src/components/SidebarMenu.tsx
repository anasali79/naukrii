import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, LogIn, UserCircle2, Search, Briefcase, Building2, BarChart2, CircleDot, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';

export interface CategoryItem {
  id: string;
  name: string;
  link: string;
  isNew?: boolean;
}

export interface Category {
  id: string;
  icon?: React.ReactNode;
  title: string;
  link?: string;
  items?: CategoryItem[];
  isExpanded?: boolean;
}

const SidebarMenu = ({ onClose }: { onClose?: () => void }) => {
  const navigate = useNavigate();
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };
  
  const handleNavigation = (link: string) => {
    if (onClose) onClose();
    navigate(link);
  };

  const categories: Category[] = [
    {
      id: 'download',
      icon: <Download className="h-5 w-5 text-gray-500 mr-3" />,
      title: 'Download the app',
      link: '/download-app'
    },
    {
      id: 'login',
      icon: <LogIn className="h-5 w-5 text-gray-500 mr-3" />,
      title: 'Login',
      link: '/login'
    },
    {
      id: 'register',
      icon: <UserCircle2 className="h-5 w-5 text-gray-500 mr-3" />,
      title: 'Register',
      link: '/register'
    },
    {
      id: 'search',
      icon: <Search className="h-5 w-5 text-gray-500 mr-3" />,
      title: 'Search jobs',
      link: '/job-search'
    },
    {
      id: 'jobs',
      icon: <Briefcase className="h-5 w-5 text-gray-500 mr-3" />,
      title: 'Jobs',
      items: [
        {
          id: 'popular-categories',
          name: 'Popular categories',
          link: '/jobs/popular-categories',
          items: [
            { id: 'it-jobs', name: 'IT jobs', link: '/jobs/category/it' },
            { id: 'sales-jobs', name: 'Sales jobs', link: '/jobs/category/sales' },
            { id: 'marketing-jobs', name: 'Marketing jobs', link: '/jobs/category/marketing' },
            { id: 'data-science-jobs', name: 'Data Science jobs', link: '/jobs/category/data-science' },
            { id: 'hr-jobs', name: 'HR jobs', link: '/jobs/category/hr' },
            { id: 'engineering-jobs', name: 'Engineering jobs', link: '/jobs/category/engineering' },
          ]
        },
        {
          id: 'jobs-in-demand',
          name: 'Jobs in demand',
          link: '/jobs/in-demand',
          items: [
            { id: 'fresher-jobs', name: 'Fresher jobs', link: '/jobs/demand/fresher' },
            { id: 'mnc-jobs', name: 'MNC jobs', link: '/jobs/demand/mnc' },
            { id: 'work-from-home', name: 'Work from home jobs', link: '/jobs/demand/work-from-home' },
            { id: 'walk-in-jobs', name: 'Walk-in jobs', link: '/jobs/demand/walk-in' },
            { id: 'part-time-jobs', name: 'Part-time jobs', link: '/jobs/demand/part-time' },
          ]
        },
        {
          id: 'jobs-by-location',
          name: 'Jobs by location',
          link: '/jobs/by-location',
          items: [
            { id: 'delhi-jobs', name: 'Jobs in Delhi', link: '/jobs/location/delhi' },
            { id: 'mumbai-jobs', name: 'Jobs in Mumbai', link: '/jobs/location/mumbai' },
            { id: 'bangalore-jobs', name: 'Jobs in Bangalore', link: '/jobs/location/bangalore' },
            { id: 'hyderabad-jobs', name: 'Jobs in Hyderabad', link: '/jobs/location/hyderabad' },
            { id: 'chennai-jobs', name: 'Jobs in Chennai', link: '/jobs/location/chennai' },
            { id: 'pune-jobs', name: 'Jobs in Pune', link: '/jobs/location/pune' },
          ]
        }
      ]
    },
    {
      id: 'companies',
      icon: <Building2 className="h-5 w-5 text-gray-500 mr-3" />,
      title: 'Companies',
      items: [
        {
          id: 'explore-categories',
          name: 'Explore categories',
          link: '/companies/explore-categories',
          items: [
            { id: 'unicorn', name: 'Unicorn', link: '/companies/category/unicorn' },
            { id: 'mnc', name: 'MNC', link: '/companies/category/mnc' },
            { id: 'startup', name: 'Startup', link: '/companies/category/startup' },
            { id: 'product-based', name: 'Product based', link: '/companies/category/product-based' },
            { id: 'internet', name: 'Internet', link: '/companies/category/internet' },
          ]
        },
        {
          id: 'explore-collections',
          name: 'Explore collections',
          link: '/companies/explore-collections',
          items: [
            { id: 'top-companies', name: 'Top companies', link: '/companies/collection/top' },
            { id: 'it-companies', name: 'IT companies', link: '/companies/collection/it' },
            { id: 'fintech-companies', name: 'Fintech companies', link: '/companies/collection/fintech' },
            { id: 'sponsored-companies', name: 'Sponsored companies', link: '/companies/collection/sponsored' },
            { id: 'featured-companies', name: 'Featured companies', link: '/companies/collection/featured' },
          ]
        },
        {
          id: 'research-companies',
          name: 'Research companies',
          link: '/companies/research',
          isNew: true,
          items: [
            { id: 'interview-questions', name: 'Interview questions', link: '/companies/research/interview-questions' },
            { id: 'company-salaries', name: 'Company salaries', link: '/companies/research/salaries' },
            { id: 'company-reviews', name: 'Company reviews', link: '/companies/research/reviews' },
            { id: 'salary-calculator', name: 'Salary Calculator', link: '/companies/research/salary-calculator' },
          ]
        }
      ]
    },
    {
      id: 'paid-services',
      icon: <BarChart2 className="h-5 w-5 text-gray-500 mr-3" />,
      title: 'Paid jobseeker services',
      link: '/paid-services'
    },
    {
      id: 'naukri-360',
      icon: <CircleDot className="h-5 w-5 text-gray-500 mr-3" />,
      title: 'Naukri 360 Services',
      items: [
        { id: 'power-profile', name: 'Power Profile', link: '/services/power-profile' },
        { id: 'resume-maker', name: 'Resume Maker', link: '/services/resume-maker' },
        { id: 'mock-interview', name: 'Mock Interview Questions', link: '/services/mock-interview' },
        { id: 'resume-writing', name: 'Resume Writing Services', link: '/services/resume-writing' },
        { id: 'code360', name: 'Code 360', link: '/services/code360' },
      ]
    },
    {
      id: 'chat-help',
      icon: <MessageCircle className="h-5 w-5 text-gray-500 mr-3" />,
      title: 'Chat for help',
      link: '/chat-help'
    }
  ];

  const renderNestedItems = (items: CategoryItem[], parentId: string) => {
    return (
      <ul className="ml-8 mt-1 space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <Link 
              to={item.link} 
              className="block py-2 text-gray-600 hover:text-gray-900"
              onClick={() => onClose && onClose()}
            >
              {item.name}
              {item.isNew && (
                <span className="ml-2 bg-blue-500 text-white text-xs px-1 rounded">New</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="py-4">
      <div className="mb-4 px-4">
        <Link to="/" className="flex items-center" onClick={() => onClose && onClose()}>
          <img 
            src="/naukri-logo.png" 
            alt="Naukri Logo" 
            className="h-10" 
          />
        </Link>
      </div>
      <div className="space-y-1">
        {categories.map((category) => (
          <div key={category.id} className="px-2">
            {category.items ? (
              <>
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between p-2 text-left rounded-md hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    {category.icon}
                    <span className="text-gray-800">{category.title}</span>
                    {category.isNew && (
                      <span className="ml-2 bg-blue-500 text-white text-xs px-1 rounded">New</span>
                    )}
                  </div>
                  {expandedCategories[category.id] ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedCategories[category.id] && (
                  <div className="mt-1 ml-4 space-y-1">
                    {category.items.map((item) => (
                      <div key={item.id}>
                        <div className="flex items-center justify-between">
                          <Link
                            to={item.link}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                            onClick={() => onClose && onClose()}
                          >
                            {item.name}
                          </Link>
                          {item.items && (
                            <button
                              onClick={() => toggleCategory(item.id)}
                              className="p-1"
                            >
                              {expandedCategories[item.id] ? (
                                <ChevronUp className="h-4 w-4 text-gray-500" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-gray-500" />
                              )}
                            </button>
                          )}
                        </div>
                        {item.items && expandedCategories[item.id] && renderNestedItems(item.items, item.id)}
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={category.link || '#'}
                className="flex items-center p-2 rounded-md hover:bg-gray-100"
                onClick={() => onClose && onClose()}
              >
                {category.icon}
                <span className="text-gray-800">{category.title}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarMenu;
