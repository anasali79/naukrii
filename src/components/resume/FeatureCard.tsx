
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, bgColor }) => {
  return (
    <div className={`${bgColor} rounded-xl p-8`}>
      <div className="flex mb-4">
        <div className="bg-white rounded-full p-2 border">
          <div className="bg-[#ff5630] rounded-full w-12 h-12 flex items-center justify-center">
            <img src={icon} alt={title} className="h-8 w-8" />
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard;
