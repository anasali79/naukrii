
import React from 'react';
import PackageCard from './PackageCard';
import { Package } from './PackageItem';

interface AvailablePackagesProps {
  availablePackages: Record<string, Package>;
  isInCart: (id: string) => boolean;
  onAddPackage: (id: string) => void;
}

const AvailablePackages: React.FC<AvailablePackagesProps> = ({ 
  availablePackages, 
  isInCart,
  onAddPackage
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-2">Frequently bought together</h2>
      <p className="text-gray-500 mb-6">
        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-sm font-medium">20% off</span> on your total order by adding any service
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(availablePackages).map(([id, pkg]) => {
          if (!isInCart(id)) {
            return (
              <PackageCard 
                key={id}
                packageData={pkg}
                onAdd={onAddPackage}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default AvailablePackages;
