
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const ProfileBanner = () => {
  return (
    <div className="my-8 profile-banner rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="pr-4">
          <h2 className="text-xl font-bold mb-1">
            Make the most out of Naukri by creating your
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            job profile for free!
          </h3>
          
          <Link to="/register">
            <button className="bg-[#ff7555] hover:bg-[#f06a4b] text-white font-medium py-3 px-6 rounded-full transition">
              Register now
            </button>
          </Link>
        </div>
        
        <div className="hidden md:block">
          <ShoppingBag className="w-20 h-20 text-[#ff7555]" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
