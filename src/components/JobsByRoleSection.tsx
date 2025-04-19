
import React from 'react';
import { Link } from 'react-router-dom';

const jobRoles = [
  { id: 1, title: 'Full Stack Developer', count: '63.4K+' },
  { id: 2, title: 'Engineering Manager', count: '1.4K+' },
  { id: 3, title: 'Mobile / App Developer', count: '2.5K+' },
  { id: 4, title: 'Technical Lead', count: '9.1K+' },
  { id: 5, title: 'DevOps Engineer', count: '2.4K+' },
  { id: 6, title: 'Automation Test Engineer', count: '2.5K+' },
  { id: 7, title: 'Frontend Developer', count: '15.7K+' },
  { id: 8, title: 'Backend Developer', count: '18.3K+' },
  { id: 9, title: 'Data Scientist', count: '3.2K+' },
  { id: 10, title: 'Cloud Engineer', count: '4.1K+' }
];

const JobsByRoleSection = () => {
  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Jobs by role
        </h2>
        <Link to="/jobs/all-roles" className="text-blue-600 font-medium">
          View all
        </Link>
      </div>
      
      <div className="w-full overflow-auto pb-4 hide-scrollbar">
        <div className="flex space-x-4" style={{ minWidth: 'max-content' }}>
          {jobRoles.map((role) => (
            <Link 
              to={`/jobs/${role.title.toLowerCase().replace(/\s+/g, '-')}`} 
              key={role.id}
              className="min-w-[180px] bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">{role.title}</h3>
                <p className="text-gray-600">{role.count} jobs</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsByRoleSection;
