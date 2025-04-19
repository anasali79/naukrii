
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from 'lucide-react';

const PowerProfile = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Power Profile</h1>
            <p className="text-xl max-w-3xl mb-8">Transform your job application into a powerful statement of your skills and achievements</p>
            <Button className="bg-white text-blue-700 hover:bg-gray-100">Create Your Power Profile</Button>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Power Profile?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our industry-leading profile enhancement service helps you stand out to recruiters and significantly improves your chances of landing interviews.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="border rounded-lg p-6 hover:shadow-md transition">
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
                <ul className="space-y-4">
                  {steps.map((step, index) => (
                    <li key={index} className="flex">
                      <div className="flex-shrink-0 h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 mt-0.5">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                <div className="bg-gray-200 h-40 w-full rounded-md mb-4 flex items-center justify-center text-gray-500">
                  Profile Preview Illustration
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Your Power Profile</h3>
                <p className="text-gray-600 mb-4">Professionally crafted content that highlights your strengths and achievements in the most appealing way to recruiters.</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Start Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div 
                  key={plan.id} 
                  className={`border rounded-lg overflow-hidden hover:shadow-lg transition ${
                    plan.popular ? 'border-blue-500 relative' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-3 py-1 uppercase font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">₹{plan.price}</span>
                    </div>
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-blue-600 hover:bg-blue-700' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      Choose Plan
                    </Button>
                  </div>
                  <div className="p-6">
                    <p className="font-medium text-gray-700 mb-4">Features:</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const benefits = [
  {
    id: 1,
    icon: <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z"></path>
    </svg>,
    title: '5X More Visibility',
    description: 'Your profile gets prioritized in recruiter searches, making you 5 times more visible than standard profiles.'
  },
  {
    id: 2,
    icon: <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
    </svg>,
    title: 'Professional Content',
    description: 'Expert writers create impactful content highlighting your skills and experience in the best possible light.'
  },
  {
    id: 3,
    icon: <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path>
    </svg>,
    title: 'Optimized Keywords',
    description: 'Strategic placement of industry-specific keywords to ensure your profile appears in relevant searches.'
  },
  {
    id: 4,
    icon: <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path>
    </svg>,
    title: 'Higher Response Rate',
    description: 'Job seekers with Power Profile receive 3 times more responses from recruiters than standard profiles.'
  },
  {
    id: 5,
    icon: <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
    </svg>,
    title: 'Privacy Protection',
    description: 'Control who sees your profile with advanced privacy settings while still remaining visible to relevant recruiters.'
  },
  {
    id: 6,
    icon: <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14v14z"></path>
    </svg>,
    title: 'Feedback & Updates',
    description: 'Receive ongoing support with profile updates and improvements based on industry trends and feedback.'
  }
];

const steps = [
  {
    title: 'Submit Your Information',
    description: 'Provide your current resume, career goals, and preferences through our easy online form.'
  },
  {
    title: 'Expert Review & Enhancement',
    description: 'Our expert team analyzes your profile and enhances it with industry-specific keywords and compelling content.'
  },
  {
    title: 'Profile Optimization',
    description: 'We optimize your profile format, layout, and visibility settings to maximize recruiter attention.'
  },
  {
    title: 'Activation & Monitoring',
    description: 'Your Power Profile goes live with priority ranking, and we provide ongoing performance reports.'
  }
];

const plans = [
  {
    id: 1,
    title: 'Basic',
    description: 'Essential profile enhancement',
    price: '1,499',
    popular: false,
    features: [
      'Professional profile content',
      'Keyword optimization',
      'Basic visibility boost',
      '30-day priority in search results',
      'One-time profile update'
    ]
  },
  {
    id: 2,
    title: 'Premium',
    description: 'Comprehensive profile solution',
    price: '2,999',
    popular: true,
    features: [
      'All Basic features',
      'Advanced content optimization',
      '90-day priority in search results',
      'Recruiter attention highlights',
      'Two profile updates',
      'Job match alerts',
      'Application tracking'
    ]
  },
  {
    id: 3,
    title: 'Executive',
    description: 'Elite career advancement',
    price: '4,999',
    popular: false,
    features: [
      'All Premium features',
      '180-day priority in search results',
      'Executive bio writing',
      'Unlimited profile updates',
      'Direct recruiter connections',
      'Interview preparation guide',
      'Salary negotiation tips'
    ]
  }
];

export default PowerProfile;
