
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Software Engineer',
    company: 'Tech Innovations Inc',
    quote: 'Thanks to JobHunt, I found my dream job within 2 weeks! The job search tools made it easy to find companies that matched my skills.',
    avatar: '👩🏻',
  },
  {
    id: 2,
    name: 'Rahul Kapoor',
    role: 'Product Manager',
    company: 'Global Solutions',
    quote: 'After updating my resume with JobHunt\'s recommendations, I started getting calls from top companies. The platform really works!',
    avatar: '👨🏽',
  },
  {
    id: 3,
    name: 'Anjali Desai',
    role: 'UI/UX Designer',
    company: 'Creative Solutions',
    quote: 'The personalized job alerts helped me find opportunities that perfectly matched my experience and interest. Highly recommend!',
    avatar: '👩🏽',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from professionals who found their ideal career opportunities through our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="job-card border border-gray-200">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-naukri-blue opacity-20 mb-4" />
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-naukri-lightBlue rounded-full text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
