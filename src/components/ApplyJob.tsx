import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Building2, MapPin, Briefcase, IndianRupee, Calendar } from 'lucide-react';
import { jobDataByCategory } from '../data/jobs';
import { supabase } from '@/integrations/supabase/client';

const ApplyJob = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Find the job from all categories
  const job = Object.values(jobDataByCategory)
    .flat()
    .find(j => j.id === jobId);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        setIsLoggedIn(!!data.session);
        
        // If not logged in, redirect to login
        if (!data.session) {
          // Store the job ID in session storage to redirect back after login
          sessionStorage.setItem('pendingJobApplication', jobId);
          navigate('/login', { state: { from: `/apply-job/${jobId}` } });
          return;
        }
      } catch (error) {
        console.error('Auth check error:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [jobId, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

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

  const handleApply = async () => {
    try {
      setLoading(true);
      
      // Here you would typically make an API call to submit the application
      // For now, we'll just simulate a successful application
      
      // Navigate to success page with job details
      navigate('/application-success', {
        state: {
          jobTitle: job.title,
          company: job.company
        }
      });
    } catch (error) {
      console.error('Application error:', error);
      // Handle error appropriately
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Apply for Position</h1>
        
        {/* Job Summary */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h2>
          <div className="flex items-center text-gray-600 mb-4">
            <Building2 size={20} className="mr-2" />
            <span>{job.company}</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-gray-500 text-sm mb-1">Location</div>
              <div className="flex items-center text-gray-900">
                <MapPin size={16} className="mr-1" />
                {job.location}
              </div>
            </div>
            <div>
              <div className="text-gray-500 text-sm mb-1">Experience</div>
              <div className="flex items-center text-gray-900">
                <Briefcase size={16} className="mr-1" />
                {job.experience}
              </div>
            </div>
            <div>
              <div className="text-gray-500 text-sm mb-1">Salary</div>
              <div className="flex items-center text-gray-900">
                <IndianRupee size={16} className="mr-1" />
                {job.salary}
              </div>
            </div>
            <div>
              <div className="text-gray-500 text-sm mb-1">Posted</div>
              <div className="flex items-center text-gray-900">
                <Calendar size={16} className="mr-1" />
                {job.postedDate}
              </div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              disabled={loading}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob; 