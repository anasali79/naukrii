
import React from 'react';
import FeatureCard from './FeatureCard';

const FeatureSection: React.FC = () => {
  const features = [
    {
      title: "Save time & effort",
      description: "Our easy-to-use interface saves you valuable time and energy. Don't worry about layout & formatting anymore, just add your information and our tool will handle the rest.",
      icon: "/placeholder.svg",
      bgColor: "bg-[#fffaf0]"
    },
    {
      title: "Keep your information organized",
      description: "Whether you're a seasoned professional or just starting out, you can now effortlessly organize your education, work experience, and achievements to impress recruiters and land your dream job with Naukri resume maker.",
      icon: "/placeholder.svg",
      bgColor: "bg-[#f8f9fe]"
    },
    {
      title: "More applications, less time",
      description: "Want to send out multiple job applications? It has never been simpler. Create professional resumes faster with our AI tool and apply to multiple job openings with ease.",
      icon: "/placeholder.svg",
      bgColor: "bg-[#efffef]"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        Why use our resume maker in your job search?
      </h2>
      
      <div className="space-y-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            bgColor={feature.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
