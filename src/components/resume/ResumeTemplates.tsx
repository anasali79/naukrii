
import React from 'react';
import { Button } from "@/components/ui/button";

const ResumeTemplates: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        Explore 12 impactful resume templates
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg overflow-hidden border">
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
            Free
          </div>
          <img src="/lovable-uploads/04e647ba-7191-45d4-8599-d8d7bec9b55e.png" alt="Resume Template 1" className="w-full" />
          <div className="p-6 flex justify-center">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8">
              Try this free template
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg overflow-hidden border">
          <img src="/lovable-uploads/81d5a75c-0665-47ea-8058-3cc7bc6c7cac.png" alt="Resume Template 2" className="w-full" />
          <div className="p-6 flex justify-center">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8">
              Try this free template
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplates;
