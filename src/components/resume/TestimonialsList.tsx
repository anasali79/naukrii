
import React from 'react';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  quote: string;
  content: string;
  rating: number;
  name: string;
  industry: string;
  avatar: string;
}

interface TestimonialsListProps {
  testimonials: Testimonial[];
}

const TestimonialsList: React.FC<TestimonialsListProps> = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          quote={testimonial.quote}
          content={testimonial.content}
          rating={testimonial.rating}
          name={testimonial.name}
          industry={testimonial.industry}
          avatar={testimonial.avatar}
        />
      ))}
    </div>
  );
};

export default TestimonialsList;
