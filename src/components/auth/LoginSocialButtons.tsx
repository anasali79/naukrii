import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from '@/components/ui/use-toast';
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone } from 'lucide-react';
import { OtpVerification } from './OtpVerification';

interface LoginSocialButtonsProps {
  redirectTo?: string;
}

export const LoginSocialButtons: React.FC<LoginSocialButtonsProps> = ({ redirectTo }) => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpEmail, setOtpEmail] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [otpType, setOtpType] = useState<'email' | 'phone'>('email');
  const [otpValue, setOtpValue] = useState('');
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get the redirect URL from props or from location state
  const getRedirectUrl = () => {
    // Force the redirect URL to use port 8082
    return 'http://localhost:8082/auth/callback';
  };

  const handleSocialLogin = async (provider: 'google') => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: getRedirectUrl(),
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          }
        },
      });
      
      if (error) throw error;
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error.message || "An error occurred during login",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneLogin = async (channel: 'sms' | 'whatsapp' = 'sms') => {
    try {
      setLoading(true);
      if (!phoneNumber) {
        setShowPhoneInput(true);
        return;
      }

      // Format phone number to include country code if not present
      const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+91${phoneNumber}`;
      setOtpType('phone');
      setOtpValue(formattedPhone);
      
      const { data, error } = await supabase.auth.signInWithOtp({
        phone: formattedPhone,
        options: {
          channel
        }
      });

      if (error) throw error;

      setShowOtpVerification(true);
      toast({
        title: "OTP sent",
        description: channel === 'whatsapp' 
          ? "Please check your WhatsApp for the verification code"
          : "Please check your phone for the verification code",
      });
    } catch (error: any) {
      toast({
        title: channel === 'whatsapp' ? "WhatsApp login failed" : "Phone login failed",
        description: error.message || `An error occurred during ${channel} login`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOtpLogin = async () => {
    try {
      setLoading(true);
      if (!otpEmail) {
        setShowOtpInput(true);
        return;
      }

      setOtpType('email');
      setOtpValue(otpEmail);

      const { data, error } = await supabase.auth.signInWithOtp({
        email: otpEmail,
        options: {
          emailRedirectTo: getRedirectUrl(),
        }
      });

      if (error) throw error;

      setShowOtpVerification(true);
      toast({
        title: "OTP sent",
        description: "Please check your email for the verification code",
      });
    } catch (error: any) {
      toast({
        title: "OTP login failed",
        description: error.message || "An error occurred during OTP login",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (showOtpVerification) {
    return (
      <OtpVerification
        type={otpType}
        value={otpValue}
        onSuccess={() => {
          setShowOtpVerification(false);
          navigate(redirectTo || '/');
        }}
        onCancel={() => {
          setShowOtpVerification(false);
          setShowPhoneInput(false);
          setShowOtpInput(false);
        }}
      />
    );
  }

  return (
    <div className="mt-8 space-y-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {showOtpInput ? (
          <div className="space-y-2">
            <Label htmlFor="otpEmail">Email for OTP</Label>
            <Input
              id="otpEmail"
              type="email"
              placeholder="Enter your email"
              value={otpEmail}
              onChange={(e) => setOtpEmail(e.target.value)}
              disabled={loading}
            />
          </div>
        ) : null}

        {showPhoneInput ? (
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={loading}
            />
            <div className="flex gap-2 mt-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => handlePhoneLogin('sms')}
                disabled={loading || !phoneNumber}
              >
                Send SMS OTP
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => handlePhoneLogin('whatsapp')}
                disabled={loading || !phoneNumber}
              >
                Send on WhatsApp
              </Button>
            </div>
          </div>
        ) : null}

        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={() => handleSocialLogin('google')}
          disabled={loading}
        >
          <img src="/google.svg" alt="Google" className="w-5 h-5 mr-2" />
          Continue with Google
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={() => setShowPhoneInput(true)}
          disabled={loading}
        >
          <Phone className="w-5 h-5 mr-2" />
          Continue with Phone Number
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={handleOtpLogin}
          disabled={loading}
        >
          {showOtpInput ? "Send OTP" : "Continue with Email OTP"}
        </Button>
      </div>
    </div>
  );
};
