
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  content: string;
  rating: number;
  name: string;
  industry: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  content, 
  rating, 
  name, 
  industry, 
  avatar 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="flex justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{quote}</h3>
        </div>
        <div className="text-4xl text-orange-500">"</div>
      </div>
      
      <p className="text-gray-700 mb-4">{content}</p>
      
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i}>{i < rating ? "★" : "☆"}</span>
        ))}
      </div>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-3">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-gray-600">{industry}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
