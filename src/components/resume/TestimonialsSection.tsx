
import React from 'react';
import TestimonialsList from './TestimonialsList';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        What jobseekers are saying
      </h2>
      <TestimonialsList testimonials={testimonials} />
    </div>
  );
};

export default TestimonialsSection;
