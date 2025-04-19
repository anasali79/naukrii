
import { Link } from 'react-router-dom';

export const TermsAndConditions = () => {
  return (
    <div className="text-center text-xs sm:text-sm text-gray-600 mt-2 sm:mt-4">
      By clicking Register, you agree to the{" "}
      <Link to="/terms" className="text-[#0066cc]">
        Terms and Conditions
      </Link>{" "}
      &{" "}
      <Link to="/privacy" className="text-[#0066cc]">
        Privacy Policy
      </Link>{" "}
      of Naukri.com
    </div>
  );
};
