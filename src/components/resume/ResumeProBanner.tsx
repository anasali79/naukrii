
import React from 'react';
import { Button } from "@/components/ui/button";
import { Crown } from 'lucide-react';

interface ResumeProBannerProps {
  onGetResumePro: () => void;
}

const ResumeProBanner: React.FC<ResumeProBannerProps> = ({ onGetResumePro }) => {
  return (
    <div className="bg-[#fffaf0] px-4 py-12">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-full inline-flex items-center px-4 py-2 border border-[#ffc107] mb-6">
          <Crown className="h-5 w-5 text-[#ffc107] mr-2" />
          <span className="text-xl font-semibold text-[#ffc107]">Resume Pro</span>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Get hired faster with our AI resume maker</h2>
        
        <p className="text-center text-gray-700 mb-10">
          100 AI credits to enhance content, Pro templates & unlimited downloads
        </p>
        
        <div className="space-y-4">
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 py-6 rounded-full text-lg"
            onClick={onGetResumePro}
          >
            Get Resume Pro
          </Button>
          
          <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-6 rounded-full text-lg">
            Try for free
          </Button>
        </div>
        
        <p className="text-center text-gray-600 mt-12 mb-4">
          Trusted by jobseekers from these companies
        </p>
        
        <div className="flex justify-between items-center">
          <img src="/lovable-uploads/430eb8e5-4013-42cf-be82-6a482bb1b8f6.png" alt="Flipkart" className="h-8" />
          <img src="/lovable-uploads/62be2752-84ea-457e-aa65-972ad5af1452.png" alt="Amazon" className="h-8" />
          <img src="/lovable-uploads/5f7077ef-65f9-45f6-b0dd-b4b2b6e8cf13.png" alt="Genpact" className="h-8" />
          <img src="/lovable-uploads/479467d4-0514-4c71-8399-e466ee4285d6.png" alt="Deloitte" className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default ResumeProBanner;
