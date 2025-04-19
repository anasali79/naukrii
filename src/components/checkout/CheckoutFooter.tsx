
import React from 'react';
import { Button } from "@/components/ui/button";

interface CheckoutFooterProps {
  hasItems: boolean;
  onProcessOrder: () => void;
}

const CheckoutFooter: React.FC<CheckoutFooterProps> = ({ hasItems, onProcessOrder }) => {
  return (
    <div className="sticky bottom-0 left-0 right-0 bg-white border-t p-4">
      <div className="max-w-2xl mx-auto">
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 rounded-full py-6 text-lg"
          disabled={!hasItems}
          onClick={onProcessOrder}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CheckoutFooter;
