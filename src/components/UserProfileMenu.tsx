import React from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Settings, BarChart2, Bell } from 'lucide-react';

interface UserProfileMenuProps {
  user: {
    name: string;
    email: string;
    profileCompletion: number;
  };
}

const UserProfileMenu = ({ user }: UserProfileMenuProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Implement logout logic here
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="flex items-center gap-4">
      <button className="text-gray-600 hover:text-blue-600">
        <Bell className="w-6 h-6" />
      </button>
      
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
            {user.name.charAt(0).toUpperCase()}
          </div>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent className="w-64" align="end">
          <DropdownMenuLabel>
            <div className="flex flex-col">
              <span className="font-medium">{user.name}</span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          <Link to="/profile">
            <DropdownMenuItem className="cursor-pointer">
              <User className="w-4 h-4 mr-2" />
              <span>View Profile</span>
            </DropdownMenuItem>
          </Link>
          
          <Link to="/profile/performance">
            <DropdownMenuItem className="cursor-pointer">
              <BarChart2 className="w-4 h-4 mr-2" />
              <span>Profile Performance</span>
            </DropdownMenuItem>
          </Link>
          
          <Link to="/settings">
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="w-4 h-4 mr-2" />
              <span>Settings</span>
            </DropdownMenuItem>
          </Link>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuItem className="cursor-pointer text-red-600" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserProfileMenu; 