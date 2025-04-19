
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NaukriHomeHeader from '@/components/NaukriHomeHeader';
import NaukriFooter from '@/components/NaukriFooter';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  MapPin, 
  Briefcase, 
  Wallet, 
  Clock, 
  BookmarkPlus 
} from 'lucide-react';

// Job listings data organized by category
const jobListingsByCategory = {
  'remote': [
    {
      id: 1,
      title: 'Senior Frontend Developer (Remote)',
      company: 'Tech Innovations Inc',
      location: 'Remote',
      experience: '3-5 years',
      salary: '₹18-25 LPA',
      skills: ['React', 'TypeScript', 'Redux'],
      postedTime: '2 days ago',
      isRemote: true,
      isHot: true,
    },
    {
      id: 2,
      title: 'DevOps Engineer (Remote)',
      company: 'CloudNine Tech',
      location: 'Remote',
      experience: '2-5 years',
      salary: '₹15-22 LPA',
      skills: ['AWS', 'Docker', 'Kubernetes'],
      postedTime: '3 days ago',
      isRemote: true,
      isHot: false,
    },
    {
      id: 3,
      title: 'Remote UI/UX Designer',
      company: 'Creative Solutions',
      location: 'Remote',
      experience: '2-4 years',
      salary: '₹12-18 LPA',
      skills: ['Figma', 'Adobe XD', 'User Research'],
      postedTime: '1 week ago',
      isRemote: true,
      isHot: true,
    },
  ],
  'mnc': [
    {
      id: 1,
      title: 'Java Developer',
      company: 'Global Tech Solutions',
      location: 'Bangalore',
      experience: '4-6 years',
      salary: '₹20-28 LPA',
      skills: ['Java', 'Spring Boot', 'Microservices'],
      postedTime: '1 day ago',
      isRemote: false,
      isHot: true,
    },
    {
      id: 2,
      title: 'Cloud Architect',
      company: 'International Systems Ltd',
      location: 'Hyderabad',
      experience: '8-12 years',
      salary: '₹35-45 LPA',
      skills: ['AWS', 'Azure', 'GCP'],
      postedTime: '3 days ago',
      isRemote: false,
      isHot: true,
    },
    {
      id: 3,
      title: 'Technical Project Manager',
      company: 'Worldwide Solutions Inc',
      location: 'Mumbai',
      experience: '7-10 years',
      salary: '₹25-32 LPA',
      skills: ['Agile', 'JIRA', 'Scrum'],
      postedTime: '5 days ago',
      isRemote: false,
      isHot: false,
    },
  ],
  'engineering': [
    {
      id: 1,
      title: 'Mechanical Engineer',
      company: 'Engineering Solutions',
      location: 'Chennai',
      experience: '2-5 years',
      salary: '₹8-15 LPA',
      skills: ['AutoCAD', 'SolidWorks', 'Manufacturing'],
      postedTime: '3 days ago',
      isRemote: false,
      isHot: false,
    },
    {
      id: 2,
      title: 'Civil Engineer',
      company: 'Infrastructure Developers',
      location: 'Delhi',
      experience: '3-7 years',
      salary: '₹10-18 LPA',
      skills: ['Project Management', 'AutoCAD', 'Construction'],
      postedTime: '1 week ago',
      isRemote: false,
      isHot: true,
    },
    {
      id: 3,
      title: 'Electrical Engineer',
      company: 'Power Systems Ltd',
      location: 'Pune',
      experience: '5-8 years',
      salary: '₹15-22 LPA',
      skills: ['Power Systems', 'Electrical Design', 'PLC'],
      postedTime: '4 days ago',
      isRemote: false,
      isHot: false,
    },
  ],
  'supply-chain': [
    {
      id: 1,
      title: 'Supply Chain Manager',
      company: 'Logistics Solutions',
      location: 'Mumbai',
      experience: '6-10 years',
      salary: '₹18-25 LPA',
      skills: ['Logistics', 'Inventory Management', 'Procurement'],
      postedTime: '2 days ago',
      isRemote: false,
      isHot: true,
    },
    {
      id: 2,
      title: 'Procurement Specialist',
      company: 'Global Supply Co',
      location: 'Delhi',
      experience: '3-6 years',
      salary: '₹12-18 LPA',
      skills: ['Negotiation', 'Vendor Management', 'ERP'],
      postedTime: '5 days ago',
      isRemote: false,
      isHot: false,
    },
    {
      id: 3,
      title: 'Logistics Coordinator',
      company: 'FastTrack Logistics',
      location: 'Chennai',
      experience: '2-4 years',
      salary: '₹8-12 LPA',
      skills: ['Transportation', 'Warehouse Management', 'Documentation'],
      postedTime: '1 week ago',
      isRemote: false,
      isHot: true,
    },
  ],
  'internship': [
    {
      id: 1,
      title: 'Software Development Intern',
      company: 'TechStartup',
      location: 'Bangalore',
      experience: 'Fresher',
      salary: '₹25-40K/month',
      skills: ['Java', 'Python', 'Web Development'],
      postedTime: '1 day ago',
      isRemote: false,
      isHot: true,
    },
    {
      id: 2,
      title: 'Marketing Intern',
      company: 'Digital Solutions',
      location: 'Mumbai',
      experience: 'Fresher',
      salary: '₹15-25K/month',
      skills: ['Digital Marketing', 'Content Creation', 'Social Media'],
      postedTime: '3 days ago',
      isRemote: true,
      isHot: false,
    },
    {
      id: 3,
      title: 'Data Science Intern',
      company: 'Analytics Hub',
      location: 'Hyderabad',
      experience: 'Fresher',
      salary: '₹30-45K/month',
      skills: ['Python', 'Machine Learning', 'SQL'],
      postedTime: '2 days ago',
      isRemote: false,
      isHot: true,
    },
  ],
  'banking-and-finance': [
    {
      id: 1,
      title: 'Investment Banker',
      company: 'Global Finance',
      location: 'Mumbai',
      experience: '5-8 years',
      salary: '₹25-35 LPA',
      skills: ['Financial Modeling', 'Valuation', 'M&A'],
      postedTime: '2 days ago',
      isRemote: false,
      isHot: true,
    },
    {
      id: 2,
      title: 'Risk Analyst',
      company: 'National Bank',
      location: 'Delhi',
      experience: '3-6 years',
      salary: '₹12-20 LPA',
      skills: ['Risk Assessment', 'Credit Analysis', 'Basel Norms'],
      postedTime: '1 week ago',
      isRemote: false,
      isHot: false,
    },
    {
      id: 3,
      title: 'Financial Consultant',
      company: 'Wealth Advisors',
      location: 'Bangalore',
      experience: '4-7 years',
      salary: '₹18-28 LPA',
      skills: ['Wealth Management', 'Financial Planning', 'Client Relations'],
      postedTime: '3 days ago',
      isRemote: false,
      isHot: true,
    },
  ],
  'startup': [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'InnovateX',
      location: 'Bangalore',
      experience: '2-5 years',
      salary: '₹15-25 LPA',
      skills: ['JavaScript', 'React', 'Node.js'],
      postedTime: '2 days ago',
      isRemote: true,
      isHot: true,
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'TechDisrupt',
      location: 'Pune',
      experience: '3-6 years',
      salary: '₹18-28 LPA',
      skills: ['Agile', 'Product Development', 'User Research'],
      postedTime: '5 days ago',
      isRemote: false,
      isHot: false,
    },
    {
      id: 3,
      title: 'Growth Hacker',
      company: 'RapidScale',
      location: 'Delhi',
      experience: '2-4 years',
      salary: '₹12-18 LPA',
      skills: ['Digital Marketing', 'Analytics', 'User Acquisition'],
      postedTime: '1 week ago',
      isRemote: true,
      isHot: true,
    },
  ],
  'software-and-it': [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Solutions',
      location: 'Bangalore',
      experience: '5-8 years',
      salary: '₹20-35 LPA',
      skills: ['Java', 'Microservices', 'Spring Boot'],
      postedTime: '1 day ago',
      isRemote: false,
      isHot: true,
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'WebTech',
      location: 'Hyderabad',
      experience: '3-5 years',
      salary: '₹15-22 LPA',
      skills: ['React', 'JavaScript', 'CSS'],
      postedTime: '3 days ago',
      isRemote: true,
      isHot: false,
    },
    {
      id: 3,
      title: 'Data Engineer',
      company: 'DataWorks',
      location: 'Chennai',
      experience: '4-7 years',
      salary: '₹18-28 LPA',
      skills: ['Python', 'Spark', 'Hadoop'],
      postedTime: '4 days ago',
      isRemote: false,
      isHot: true,
    },
  ],
  'fresher': [
    {
      id: 1,
      title: 'Software Engineer Trainee',
      company: 'IT Solutions',
      location: 'Bangalore',
      experience: '0-1 years',
      salary: '₹4-7 LPA',
      skills: ['Java', 'Python', 'SQL'],
      postedTime: '2 days ago',
      isRemote: false,
      isHot: true,
    },
    {
      id: 2,
      title: 'Graduate Engineer Trainee',
      company: 'Engineering Corp',
      location: 'Chennai',
      experience: '0-1 years',
      salary: '₹3.5-5 LPA',
      skills: ['Mechanical', 'AutoCAD', 'Manufacturing'],
      postedTime: '1 week ago',
      isRemote: false,
      isHot: false,
    },
    {
      id: 3,
      title: 'Business Analyst Trainee',
      company: 'Consulting Solutions',
      location: 'Mumbai',
      experience: '0-1 years',
      salary: '₹5-8 LPA',
      skills: ['Excel', 'Data Analysis', 'Communication'],
      postedTime: '3 days ago',
      isRemote: false,
      isHot: true,
    },
  ],
  'project-mgmt': [
    {
      id: 1,
      title: 'Senior Project Manager',
      company: 'Global Tech',
      location: 'Bangalore',
      experience: '8-12 years',
      salary: '₹25-40 LPA',
      skills: ['Agile', 'PMP', 'JIRA'],
      postedTime: '2 days ago',
      isRemote: false,
      isHot: true,
    },
    {
      id: 2,
      title: 'Technical Project Lead',
      company: 'Software Solutions',
      location: 'Pune',
      experience: '5-8 years',
      salary: '₹18-28 LPA',
      skills: ['Scrum', 'Team Management', 'Client Communication'],
      postedTime: '4 days ago',
      isRemote: true,
      isHot: false,
    },
    {
      id: 3,
      title: 'Project Coordinator',
      company: 'IT Services',
      location: 'Hyderabad',
      experience: '2-5 years',
      salary: '₹8-15 LPA',
      skills: ['Documentation', 'Scheduling', 'Reporting'],
      postedTime: '1 week ago',
      isRemote: false,
      isHot: true,
    },
  ],
  'fortune-500': [
    {
      id: 1,
      title: 'Business Development Manager',
      company: 'Global Corp',
      location: 'Mumbai',
      experience: '7-10 years',
      salary: '₹25-35 LPA',
      skills: ['Sales', 'Client Relationship', 'Strategy'],
      postedTime: '3 days ago',
      isRemote: false,
      isHot: true,
    },
    {
      id: 2,
      title: 'HR Director',
      company: 'Multinational Inc',
      location: 'Delhi',
      experience: '10-15 years',
      salary: '₹35-50 LPA',
      skills: ['Talent Management', 'Leadership', 'Organizational Development'],
      postedTime: '1 week ago',
      isRemote: false,
      isHot: false,
    },
    {
      id: 3,
      title: 'Finance Manager',
      company: 'International Group',
      location: 'Bangalore',
      experience: '8-12 years',
      salary: '₹30-45 LPA',
      skills: ['Financial Planning', 'Analysis', 'Reporting'],
      postedTime: '5 days ago',
      isRemote: false,
      isHot: true,
    },
  ],
};

const JobsByCategory = () => {
  const { category } = useParams();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (category && jobListingsByCategory[category]) {
      setJobs(jobListingsByCategory[category]);
    } else {
      // Default to showing the first category if none specified
      const firstCategory = Object.keys(jobListingsByCategory)[0];
      setJobs(jobListingsByCategory[firstCategory]);
    }
  }, [category]);

  // Format the category for display (convert-dash-case to Title Case)
  const formatCategoryTitle = () => {
    if (!category) return 'Jobs';
    
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="naukri-dark-blue">
        <NaukriHomeHeader />
      </div>

      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            {formatCategoryTitle()} Jobs
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="job-card border border-gray-200 overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {job.title}
                      </h3>
                      <button className="text-gray-400 hover:text-naukri-blue">
                        <BookmarkPlus className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-3">
                      <Building2 className="h-4 w-4 mr-1" />
                      <span className="text-sm">{job.company}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-y-2 mb-4">
                      <div className="flex items-center text-gray-600 mr-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mr-4">
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span className="text-sm">{job.experience}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Wallet className="h-4 w-4 mr-1" />
                        <span className="text-sm">{job.salary}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center px-6 py-3 bg-gray-50 border-t border-gray-200">
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{job.postedTime}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {job.isRemote && (
                        <Badge className="bg-naukri-lightBlue text-naukri-blue">Remote</Badge>
                      )}
                      {job.isHot && (
                        <Badge className="bg-red-100 text-red-600">Hot</Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <NaukriFooter />
    </div>
  );
};

export default JobsByCategory;
