
import React from 'react';
import { Button } from "@/components/ui/button";
import { TrendingUp } from 'lucide-react';

const ExpertAssistance: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-2xl text-gray-600 mb-2">Need expert assistance?</h3>
        <div className="w-24 h-0.5 bg-gray-300 mx-auto"></div>
      </div>
      
      <div className="bg-white rounded-xl overflow-hidden relative mb-16">
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
          20% discount
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-[#f8f9fe] p-6">
            <img src="/lovable-uploads/00dfc440-2cb8-4a2e-b2df-dbe4a650e953.png" alt="Expert Resume Help" className="w-full" />
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get an expert to build a job-winning resume</h3>
            <div className="text-gray-600 mb-6">
              <div className="flex items-center mb-1">
                <span>Free cover letter</span>
                <span className="mx-2">•</span>
                <span>1:1 assistance</span>
              </div>
              <div className="flex items-center">
                <span>Multiple iterations</span>
              </div>
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
              Know more
            </Button>
            
            <div className="flex items-center mt-6 text-purple-600">
              <TrendingUp className="h-5 w-5 mr-2" />
              <span>Preferred by 4K+ professionals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertAssistance;
