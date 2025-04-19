
import React from 'react';
import { Button } from "@/components/ui/button";
import { Crown } from 'lucide-react';

interface BottomBannerProps {
  onGetResumePro: () => void;
}

const BottomBanner: React.FC<BottomBannerProps> = ({ onGetResumePro }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0a0e2c] p-4 flex items-center justify-between">
      <div className="flex items-center text-white">
        <div className="mr-4">
          <Crown className="h-6 w-6 text-yellow-400" />
        </div>
        <div>
          <p className="font-bold">250+ professionals upgraded to Resume Pro in last 24 hrs.</p>
        </div>
      </div>
      
      <Button 
        className="bg-orange-500 hover:bg-orange-600 rounded-full"
        onClick={onGetResumePro}
      >
        Buy now
      </Button>
    </div>
  );
};

export default BottomBanner;
