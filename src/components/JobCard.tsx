import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, MapPin, Briefcase, IndianRupee } from 'lucide-react';
import { Job } from '../data/jobs';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/jobs/${job.id}`);
  };

  const handleApplyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/apply-job/${job.id}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer group"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {job.title}
          </h3>
          <div className="flex items-center mt-2 text-gray-600">
            <Building2 className="w-4 h-4 mr-1" />
            <span>{job.company}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{job.location}</span>
        </div>
        {job.salary && (
          <div className="flex items-center text-gray-600">
            <IndianRupee className="w-4 h-4 mr-1" />
            <span>{job.salary}</span>
          </div>
        )}
        <div className="flex items-center text-gray-600">
          <Briefcase className="w-4 h-4 mr-1" />
          <span>{job.experience}</span>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleApplyClick}
          className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}