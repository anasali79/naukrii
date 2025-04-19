
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CheckoutHeader: React.FC = () => {
  return (
    <div className="sticky top-0 z-10 bg-white px-4 py-4 border-b">
      <Link to="/services/resume-maker" className="flex items-center">
        <ArrowLeft className="h-6 w-6 text-gray-800" />
        <h1 className="text-2xl font-bold ml-4">Checkout</h1>
      </Link>
    </div>
  );
};

export default CheckoutHeader;
