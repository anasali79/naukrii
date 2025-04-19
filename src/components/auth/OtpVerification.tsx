import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface OtpVerificationProps {
  type: 'email' | 'phone';
  value: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export function OtpVerification({ type, value, onSuccess, onCancel }: OtpVerificationProps) {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let verifyResult;

      if (type === 'phone') {
        verifyResult = await supabase.auth.verifyOtp({
          phone: value,
          token: otp,
          type: 'sms'
        });
      } else {
        verifyResult = await supabase.auth.verifyOtp({
          email: value,
          token: otp,
          type: 'email'
        });
      }

      if (verifyResult.error) {
        throw verifyResult.error;
      }

      toast.success('Successfully verified!');
      onSuccess?.();
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleVerify} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="otp">Enter verification code</Label>
        <Input
          id="otp"
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          disabled={loading}
          className="text-center text-2xl tracking-widest"
          maxLength={6}
        />
        <p className="text-sm text-gray-500">
          {type === 'email' 
            ? 'Please check your email for the verification code'
            : 'Please check your WhatsApp for the verification code'}
        </p>
      </div>

      <div className="flex gap-3">
        <Button
          type="submit"
          className="flex-1"
          disabled={loading}
        >
          {loading ? 'Verifying...' : 'Verify'}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={loading}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
} 