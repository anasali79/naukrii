import React from 'react';
import NaukriHomeHeader from '@/components/NaukriHomeHeader';
import NaukriHero from '@/components/NaukriHero';
import MockInterviewSection from '@/components/MockInterviewSection';
import TrendingSection from '@/components/TrendingSection';
import TopCompaniesSection from '@/components/TopCompaniesSection';
import CampusSection from '@/components/CampusSection';
import ProfileBanner from '@/components/ProfileBanner';
import JobsByRoleSection from '@/components/JobsByRoleSection';
import FeaturedJobs from '@/components/FeaturedJobs';
import FeaturedCompanies from '@/components/FeaturedCompanies';
import Footer from '@/components/Footer';
import NaukriFooter from '@/components/NaukriFooter';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="naukri-dark-blue">
        <NaukriHomeHeader />
        <NaukriHero />
      </div>
      <div className="flex flex-col max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8">
        <MockInterviewSection />
        <TrendingSection />
        <TopCompaniesSection />
        <CampusSection />
        <ProfileBanner />
        <JobsByRoleSection />
        <FeaturedJobs />
        <FeaturedCompanies />
      </div>
      {/* Mobile Footer */}
      <div className="md:hidden">
        <NaukriFooter />
      </div>
      {/* Desktop Footer */}
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
