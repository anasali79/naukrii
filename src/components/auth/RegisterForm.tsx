
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from '@/components/ui/use-toast';
import { Eye, EyeOff } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { TermsAndConditions } from './TermsAndConditions';
import { PasswordInput } from './PasswordInput';

export const RegisterForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [receiveUpdates, setReceiveUpdates] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email || !password || !mobile) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters long",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      
      console.log("Registering with metadata:", {
        full_name: fullName,
        mobile: mobile,
        receive_updates: receiveUpdates
      });
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            mobile: mobile,
            receive_updates: receiveUpdates ? true : false
          },
        }
      });

      if (error) {
        console.error('Registration error:', error);
        throw error;
      }

      console.log("Registration response:", data);

      if (data?.user) {
        toast({
          title: "Registration successful",
          description: "Your account has been created successfully!",
        });
        
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        toast({
          title: "Registration successful",
          description: "Please check your email for verification",
        });
      }
    } catch (error: any) {
      console.error('Registration error details:', error);
      toast({
        title: "Registration failed",
        description: error.message || "An error occurred during registration",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-6 sm:gap-10 mt-6 w-full">
      <div className="space-y-1">
        <Label htmlFor="fullName" className="text-base sm:text-lg text-gray-500">
          Full name<span className="text-red-500">*</span>
        </Label>
        <Input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="py-4 sm:py-6 border-b border-t-0 border-x-0 rounded-none text-lg sm:text-xl focus-visible:ring-0 px-0"
          required
        />
      </div>
      
      <div className="space-y-1">
        <Label htmlFor="email" className="text-base sm:text-lg text-gray-500">
          Email ID<span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-4 sm:py-6 border-b border-t-0 border-x-0 rounded-none text-lg sm:text-xl focus-visible:ring-0 px-0"
          required
        />
        <p className="text-gray-500 text-xs sm:text-sm mt-1">We'll send relevant jobs and updates to this email</p>
      </div>
      
      <PasswordInput 
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      
      <div className="space-y-1">
        <Label htmlFor="mobile" className="text-base sm:text-lg text-gray-500">
          Mobile number<span className="text-red-500">*</span>
        </Label>
        <Input
          id="mobile"
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="py-4 sm:py-6 border-b border-t-0 border-x-0 rounded-none text-lg sm:text-xl focus-visible:ring-0 px-0"
          required
        />
        <p className="text-gray-500 text-xs sm:text-sm mt-1">Recruiters will contact you on this number</p>
      </div>
      
      <div className="flex items-start space-x-2 mt-2 sm:mt-4">
        <Checkbox 
          id="updates" 
          checked={receiveUpdates}
          onCheckedChange={(checked) => setReceiveUpdates(checked as boolean)}
          className="mt-1"
        />
        <div className="flex flex-col">
          <Label htmlFor="updates" className="font-normal text-gray-600 text-sm sm:text-base">
            Send me updates & promotions via email, SMS and
          </Label>
          <div className="flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-4 sm:h-5 w-4 sm:w-5 mr-1" />
            <span className="text-gray-600 text-sm sm:text-base">WhatsApp</span>
          </div>
        </div>
      </div>

      <TermsAndConditions />
      
      <Button 
        type="submit" 
        disabled={loading}
        className="bg-[#ff5630] hover:bg-[#f04b29] text-white py-5 sm:py-7 font-bold text-lg sm:text-xl rounded-full"
      >
        {loading ? "REGISTERING..." : "Register"}
      </Button>
    </form>
  );
};
