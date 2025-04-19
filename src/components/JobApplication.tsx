import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { jobDataByCategory } from '../data/jobs';

const JobApplication = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Find the job from all categories
  const job = Object.values(jobDataByCategory)
    .flat()
    .find(j => j.id === jobId);

  if (!job) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h2>
        <p className="text-gray-600 mb-4">
          The job you're trying to apply for doesn't exist or has been removed.
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Redirect to success page
    navigate('/application-success', {
      state: { jobTitle: job.title, company: job.company }
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Apply for Position</h2>
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
        <p className="text-gray-600">{job.company} • {job.location}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
            Upload Resume *
          </label>
          <input
            type="file"
            id="resume"
            accept=".pdf,.doc,.docx"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="mt-1 text-sm text-gray-500">
            Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
          </p>
        </div>

        <div>
          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            rows={6}
            placeholder="Why do you think you'd be a good fit for this position?"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
            Relevant Experience *
          </label>
          <textarea
            id="experience"
            rows={4}
            required
            placeholder="Briefly describe your relevant experience for this role"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="noticePeriod" className="block text-sm font-medium text-gray-700 mb-2">
            Notice Period *
          </label>
          <select
            id="noticePeriod"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select notice period</option>
            <option value="immediate">Immediate</option>
            <option value="15days">15 Days</option>
            <option value="30days">30 Days</option>
            <option value="60days">60 Days</option>
            <option value="90days">90 Days</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplication; 