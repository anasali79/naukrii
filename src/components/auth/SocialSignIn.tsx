
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from '@/components/ui/use-toast';
import { supabase } from "@/integrations/supabase/client";

export const SocialSignIn = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSocialSignup = async (provider: 'google') => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/register`,
        },
      });
      
      if (error) throw error;
    } catch (error: any) {
      toast({
        title: "Signup failed",
        description: error.message || "An error occurred during signup",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-center text-gray-500">Or</div>
      <Button
        type="button"
        variant="outline"
        disabled={loading}
        onClick={() => handleSocialSignup('google')}
        className="border-[#0066cc] text-[#0066cc] border py-4 sm:py-6 rounded-full flex items-center justify-center gap-2"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="h-5 sm:h-6 w-5 sm:w-6" />
        <span className="text-[#0066cc] text-base sm:text-lg font-medium">Sign up with Google</span>
      </Button>
    </>
  );
};
