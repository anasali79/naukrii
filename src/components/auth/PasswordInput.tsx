
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from 'lucide-react';

interface PasswordInputProps {
  password: string;
  setPassword: (password: string) => void;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
}

export const PasswordInput = ({ 
  password, 
  setPassword, 
  showPassword, 
  setShowPassword 
}: PasswordInputProps) => {
  return (
    <div className="space-y-1">
      <Label htmlFor="password" className="text-base sm:text-lg text-gray-500">
        Password (Minimum 6 characters)<span className="text-red-500">*</span>
      </Label>
      <div className="relative">
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          className="py-4 sm:py-6 border-b border-t-0 border-x-0 rounded-none text-lg sm:text-xl focus-visible:ring-0 px-0"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-0 top-1/2 -translate-y-1/2"
        >
          {showPassword ? 
            <EyeOff className="h-5 w-5 text-gray-400" /> : 
            <Eye className="h-5 w-5 text-gray-400" />
          }
        </button>
      </div>
      <p className="text-gray-500 text-xs sm:text-sm mt-1">This helps your account stay protected</p>
    </div>
  );
};
