import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Building2, MapPin, Briefcase, IndianRupee, Calendar, ArrowLeft } from 'lucide-react';
import { jobDataByCategory } from '../data/jobs';
import { supabase } from '@/integrations/supabase/client';

const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Find the job from all categories
  const job = Object.values(jobDataByCategory)
    .flat()
    .find(j => j.id === jobId);

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      setIsLoggedIn(!!data.session);
    };

    checkAuth();
  }, []);

  const handleApply = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!isLoggedIn) {
      // Store the job ID in session storage to redirect back after login
      sessionStorage.setItem('pendingJobApplication', jobId);
      navigate('/login', { state: { from: `/apply-job/${jobId}` } });
      return;
    }

    // If logged in, proceed with application
    navigate(`/apply-job/${jobId}`);
  };

  if (!job) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h2>
        <p className="text-gray-600 mb-4">
          This job posting doesn't exist or has been removed.
        </p>
        <button
          onClick={() => navigate('/jobs')}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          View All Jobs
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-blue-600 mb-6 group"
      >
        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Jobs
      </button>

      {/* Job Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              {job.title}
            </h1>
            <div className="flex items-center text-lg text-gray-600 mb-4">
              <Building2 size={20} className="mr-2" />
              <span>{job.company}</span>
            </div>
          </div>
          <button
            onClick={handleApply}
            className="bg-[#4A90E2] text-white px-8 py-3 rounded-full hover:bg-blue-600 transition text-lg font-medium"
          >
            Apply Now
          </button>
        </div>

        {/* Job Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>
            <div className="text-gray-500 mb-1">Location</div>
            <div className="flex items-center text-gray-900">
              <MapPin size={18} className="mr-2 text-gray-600" />
              {job.location}
            </div>
          </div>
          <div>
            <div className="text-gray-500 mb-1">Experience</div>
            <div className="flex items-center text-gray-900">
              <Briefcase size={18} className="mr-2 text-gray-600" />
              {job.experience}
            </div>
          </div>
          {job.salary && (
            <div>
              <div className="text-gray-500 mb-1">Salary</div>
              <div className="flex items-center text-gray-900">
                <IndianRupee size={18} className="mr-2 text-gray-600" />
                {job.salary}
              </div>
            </div>
          )}
          <div>
            <div className="text-gray-500 mb-1">Posted Date</div>
            <div className="flex items-center text-gray-900">
              <Calendar size={18} className="mr-2 text-gray-600" />
              {job.postedDate}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Skills</h3>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Job Description */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Job Description</h3>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 whitespace-pre-line">
              {job.description}
            </p>
          </div>
        </div>
      </div>

      {/* Similar Jobs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Similar Jobs</h2>
        <div className="grid gap-4">
          {Object.values(jobDataByCategory)
            .flat()
            .filter(j => 
              j.id !== job.id && 
              (j.skills.some(skill => job.skills.includes(skill)) ||
               j.title.toLowerCase().includes(job.title.toLowerCase()))
            )
            .slice(0, 3)
            .map(similarJob => (
              <div
                key={similarJob.id}
                onClick={() => navigate(`/jobs/${similarJob.id}`)}
                className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:shadow-md transition cursor-pointer"
              >
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">{similarJob.title}</h3>
                  <div className="text-sm text-gray-600">{similarJob.company} • {similarJob.location}</div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleApply(e);
                  }}
                  className="bg-white text-blue-600 px-4 py-1 rounded-full border border-blue-600 hover:bg-blue-50 transition"
                >
                  Apply
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetails; 