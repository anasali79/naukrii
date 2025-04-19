
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import ResumeProBanner from '@/components/resume/ResumeProBanner';
import ExpertAssistance from '@/components/resume/ExpertAssistance';
import ResumeTemplates from '@/components/resume/ResumeTemplates';
import FeatureSection from '@/components/resume/FeatureSection';
import HowToUseSection from '@/components/resume/HowToUseSection';
import TestimonialsSection from '@/components/resume/TestimonialsSection';
import FAQSection from '@/components/resume/FAQSection';
import KnowMoreSection from '@/components/resume/KnowMoreSection';
import BottomBanner from '@/components/resume/BottomBanner';

const ResumeMaker = () => {
  const navigate = useNavigate();

  // Handler for "Get Resume Pro" button
  const handleGetResumePro = () => {
    const resumeProPackage = {
      id: "resumePro",
      name: "Resume Pro",
      price: 253,
      originalPrice: 253,
      discountPercent: 0,
      duration: "Valid for 3 months"
    };
    
    navigate('/services/cart-checkout', { 
      state: { initialPackage: resumeProPackage } 
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Header section with back button */}
        <div className="bg-white px-4 py-4 border-b">
          <Link to="/" className="flex items-center">
            <ArrowLeft className="h-6 w-6 text-gray-800" />
            <h1 className="text-2xl font-bold ml-4">Build your resume</h1>
          </Link>
        </div>
        
        {/* Resume Pro Section */}
        <ResumeProBanner onGetResumePro={handleGetResumePro} />
        
        {/* Expert Assistance Section */}
        <div className="py-12 px-4">
          <ExpertAssistance />
          
          {/* Resume Templates Section */}
          <ResumeTemplates />
          
          {/* Why Use Our Resume Maker Section */}
          <FeatureSection />
          
          {/* How to Use Section */}
          <HowToUseSection />
          
          {/* Testimonials Section */}
          <TestimonialsSection />
          
          {/* FAQ Section */}
          <FAQSection />
          
          {/* Know More Section */}
          <KnowMoreSection />
        </div>
        
        {/* Bottom Banner */}
        <BottomBanner onGetResumePro={handleGetResumePro} />
      </main>
      <Footer />
    </div>
  );
};

export default ResumeMaker;
