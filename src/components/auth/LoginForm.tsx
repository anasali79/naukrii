import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Link } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { PasswordInput } from './PasswordInput';

interface LoginFormProps {
  redirectTo?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ redirectTo = '/' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    try {
      setLoading(true);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      toast.success("Login successful");
      navigate(redirectTo);
    } catch (error: any) {
      toast.error(error.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-6 sm:gap-8 w-full">
      <div className="space-y-1">
        <Label htmlFor="email" className="text-base sm:text-lg text-gray-500">
          Email ID
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-4 sm:py-6 border-b border-t-0 border-x-0 rounded-none text-lg sm:text-xl placeholder:text-gray-400 focus-visible:ring-0 px-0"
          required
          placeholder="Enter your email"
        />
      </div>
      
      <PasswordInput 
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      
      <div className="flex justify-end">
        <Link to="/forgot-password" className="text-[#0066cc]">
          Forgot Password?
        </Link>
      </div>
      
      <Button 
        type="submit" 
        disabled={loading}
        className="bg-[#0066cc] hover:bg-[#0055bb] text-white py-5 sm:py-7 font-bold text-lg sm:text-xl"
      >
        {loading ? "LOGGING IN..." : "LOGIN"}
      </Button>
    </form>
  );
};
