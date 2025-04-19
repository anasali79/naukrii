
import React from 'react';
import { Button } from "@/components/ui/button";
import { Package } from './PackageItem';

interface PackageCardProps {
  packageData: Package;
  onAdd: (id: string) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ packageData, onAdd }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border">
      <div className="bg-gray-100 p-4 h-48 flex items-center justify-center">
        {packageData.image && <img src={packageData.image} alt={packageData.name} className="h-32 object-contain" />}
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{packageData.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{packageData.description}</p>
        
        <div className="flex items-center mb-3">
          <span className="text-green-500 font-medium mr-2">20% off</span>
          <span className="text-xl font-bold">₹ {packageData.price}</span>
          <span className="text-gray-400 line-through ml-2">₹ {packageData.originalPrice}</span>
        </div>
        
        <Button 
          className="rounded-full border-blue-500 text-blue-600 hover:bg-blue-50"
          variant="outline"
          onClick={() => onAdd(packageData.id)}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;
