
import React from 'react';
import { Trash2 } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Type definitions
export interface Package {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  duration: string;
  description?: string;
  image?: string;
}

export interface DurationOption {
  id: string;
  duration: string;
  price: number;
  originalPrice: number;
  discountLabel?: string;
}

interface PackageItemProps {
  item: Package;
  onRemove: (id: string) => void;
  selectedDuration?: string;
  durationOptions?: DurationOption[];
  onDurationChange?: (value: string) => void;
}

const PackageItem: React.FC<PackageItemProps> = ({ 
  item, 
  onRemove, 
  selectedDuration, 
  durationOptions, 
  onDurationChange 
}) => {
  return (
    <div className="border-b pb-4">
      <div className="flex justify-between items-start mb-1">
        <h2 className="text-2xl font-bold">{item.name}</h2>
        <div className="flex items-center">
          <span className="text-2xl font-bold mr-3">₹ {item.price}</span>
          <button onClick={() => onRemove(item.id)} className="text-gray-500">
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
      <p className="text-gray-500 mb-2">{item.duration}</p>
      
      {item.id === "powerProfile" && durationOptions && onDurationChange && (
        <div className="mt-4 mb-6">
          <RadioGroup value={selectedDuration} onValueChange={onDurationChange} className="space-y-3">
            {durationOptions.map(option => (
              <div key={option.id} className={`border rounded-full px-4 py-3 flex justify-between items-center ${selectedDuration === option.id ? 'border-blue-500' : 'border-gray-200'}`}>
                <div className="flex items-center">
                  <RadioGroupItem id={option.id} value={option.id} className="mr-3" />
                  <label htmlFor={option.id} className="text-lg font-medium">{option.duration}</label>
                  {option.discountLabel && (
                    <span className="ml-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      {option.discountLabel}
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">₹ {option.price}</div>
                  <div className="flex items-center">
                    <span className="text-gray-400 line-through text-sm mr-2">₹ {option.originalPrice}</span>
                    <span className="text-green-500">20% off</span>
                  </div>
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}
    </div>
  );
};

export default PackageItem;
