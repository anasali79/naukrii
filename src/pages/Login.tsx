import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { LoginForm } from '@/components/auth/LoginForm';
import { LoginSocialButtons } from '@/components/auth/LoginSocialButtons';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the return URL from the location state or default to home page
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    // Check if user is already logged in
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setIsLoggedIn(true);
        
        // Check if there's a pending job application
        const pendingJobId = sessionStorage.getItem('pendingJobApplication');
        if (pendingJobId) {
          sessionStorage.removeItem('pendingJobApplication');
          navigate(`/apply-job/${pendingJobId}`);
          return;
        }
        
        navigate(from, { replace: true });
      }
    };

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          setIsLoggedIn(true);
          
          // Check if there's a pending job application
          const pendingJobId = sessionStorage.getItem('pendingJobApplication');
          if (pendingJobId) {
            sessionStorage.removeItem('pendingJobApplication');
            navigate(`/apply-job/${pendingJobId}`);
            return;
          }
          
          navigate(from, { replace: true });
        }
      }
    );

    checkSession();

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate, from]);

  return (
    <div className="min-h-screen bg-white flex flex-col p-4 sm:p-6 max-w-md mx-auto overflow-x-hidden">
      <div className="mb-6">
        <Link to="/" className="inline-block">
          <ArrowLeft className="h-6 w-6 text-black" />
        </Link>
      </div>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-10 gap-2 sm:gap-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#222]">Login to Naukri</h1>
        <Link to="/register" className="text-[#0066cc] font-bold whitespace-nowrap">
          REGISTER FOR FREE
        </Link>
      </div>
      
      <LoginForm redirectTo={from} />
      <LoginSocialButtons redirectTo={from} />
    </div>
  );
};

export default Login;
