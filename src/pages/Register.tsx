
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { RegisterForm } from '@/components/auth/RegisterForm';
import { SocialSignIn } from '@/components/auth/SocialSignIn';

const Register = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setIsLoggedIn(true);
        navigate('/');
      }
    };

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          setIsLoggedIn(true);
          navigate('/');
        }
      }
    );

    checkSession();

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white flex flex-col p-4 sm:p-6 max-w-md mx-auto overflow-x-hidden">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#222]">Create your Naukri profile</h1>
        <p className="text-base sm:text-lg text-gray-500 mt-2">
          Search & apply to jobs from India's No.1 Job Site
        </p>
      </div>
      
      <RegisterForm />
      <SocialSignIn />
    </div>
  );
};

export default Register;
