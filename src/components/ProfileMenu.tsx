import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Settings, HelpCircle, LogOut, Briefcase } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { supabase } from '@/integrations/supabase/client';

interface ProfileMenuProps {
  userName: string;
  profileCompletion: number;
}

const ProfileMenu = ({ userName, profileCompletion }: ProfileMenuProps) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
            {userName.charAt(0).toUpperCase()}
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="p-4 border-b">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
              {userName.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="font-medium">{userName}</h3>
              <p className="text-sm text-gray-500">Not Mentioned</p>
              <Link to="/profile/edit" className="text-sm text-blue-600 hover:text-blue-700">
                View & Update Profile
              </Link>
            </div>
            <div className="ml-auto">
              <div className="relative h-12 w-12">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#eee"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#ff4d4f"
                    strokeWidth="2"
                    strokeDasharray={`${profileCompletion}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xs text-red-500">
                  {profileCompletion}%
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Your profile performance</h4>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 bg-gray-50 rounded">
                <div className="text-xl font-semibold">0</div>
                <div className="text-sm text-gray-600">Search Appearances</div>
                <Link to="/profile/stats" className="text-xs text-blue-600 hover:text-blue-700">
                  View all
                </Link>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <div className="text-xl font-semibold">0</div>
                <div className="text-sm text-gray-600">Recruiter Actions</div>
                <Link to="/profile/stats" className="text-xs text-blue-600 hover:text-blue-700">
                  View all
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="py-2">
          <Link to="/applications" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
            <Briefcase className="w-5 h-5" />
            <span>My Applications</span>
          </Link>
          <Link to="/blog" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
            <img src="/icons/blog.svg" alt="" className="w-5 h-5" />
            <span>Naukri Blog</span>
          </Link>
          <Link to="/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
          <Link to="/faqs" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
            <HelpCircle className="w-5 h-5" />
            <span>FAQs</span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-left"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;