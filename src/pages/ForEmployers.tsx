
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Search, Database, BarChart2, Clock, Shield } from 'lucide-react';

const ForEmployers = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
                <h1 className="text-4xl font-bold mb-4">Hiring Solutions for Employers</h1>
                <p className="text-xl opacity-90 mb-6">Connect with the right talent quickly and efficiently with our comprehensive recruitment solutions</p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-white text-blue-700 hover:bg-gray-100">
                    Post a Job
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Sales
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Start Hiring Today</h2>
                    <p className="mb-4 text-blue-100">Register as an employer and post your first job in minutes</p>
                    <Button className="w-full bg-white text-blue-700 hover:bg-gray-100">
                      Sign Up Free
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Employers Choose JobHunt</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Join 75,000+ companies who trust us to find the right talent for their organizations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 inline-flex mb-4">
                    {<benefit.icon className="h-8 w-8 text-blue-600" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to find your next great hire?</h3>
              <p className="text-gray-600 mb-6">Post a job today and start receiving applications from qualified candidates</p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Post a Job Now
              </Button>
            </div>
          </div>
        </div>
        
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Hiring Solutions</h2>
            
            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <div 
                  key={solution.id} 
                  className={`bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row ${
                    index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:w-1/2 bg-gray-200 min-h-[300px]"></div>
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <ul className="space-y-3 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans for Every Hiring Need</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Choose the plan that works best for your recruitment strategy and budget</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                    <p className="text-gray-600 mb-4 h-12">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">₹{plan.price}</span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-blue-600 hover:bg-blue-700' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      Get Started
                    </Button>
                  </div>
                  <div className="p-6">
                    <p className="font-medium text-gray-700 mb-4">Plan includes:</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Need a custom solution?</h3>
              <p className="text-gray-600 mb-6">Contact our sales team for enterprise solutions tailored to your specific needs</p>
              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                Contact Enterprise Sales
              </Button>
            </div>
          </div>
        </div>
        
        <div className="py-16 bg-blue-800 text-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Hiring Process?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">Join thousands of employers who find top talent faster and more efficiently with JobHunt</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-blue-700 hover:bg-gray-100">
                Sign Up as Employer
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule a Demo
              </Button>
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
    icon: Users,
    title: 'Vast Talent Pool',
    description: 'Access millions of active job seekers across industries and experience levels'
  },
  {
    id: 2,
    icon: Search,
    title: 'Smart Matching Technology',
    description: 'Our AI-powered algorithms connect you with the most relevant candidates'
  },
  {
    id: 3,
    icon: Clock,
    title: 'Faster Time-to-Hire',
    description: 'Reduce your hiring timeline with streamlined recruitment tools and processes'
  }
];

const solutions = [
  {
    id: 1,
    title: 'Job Postings & Promotion',
    description: 'Get your job openings in front of qualified candidates quickly and efficiently.',
    features: [
      'Featured job listings for maximum visibility',
      'Targeted distribution across our network',
      'Automated candidate matching',
      'Application management tools'
    ]
  },
  {
    id: 2,
    title: 'Resume Database Access',
    description: 'Proactively search our extensive database to find the perfect candidates.',
    features: [
      'Advanced search filters and Boolean search',
      'Candidate activity information',
      'Direct messaging to potential candidates',
      'Resume folder organization'
    ]
  },
  {
    id: 3,
    title: 'Employer Branding Solutions',
    description: 'Showcase your company culture and values to attract the right talent.',
    features: [
      'Enhanced company profile',
      'Video content integration',
      'Employee testimonials feature',
      'Customizable career page'
    ]
  }
];

const plans = [
  {
    id: 1,
    title: 'Basic',
    description: 'For small businesses with occasional hiring needs',
    price: '4,999',
    period: '/month',
    popular: false,
    features: [
      'Post up to 3 jobs simultaneously',
      'Access to basic candidate filters',
      'Email support',
      '50 resume views per month',
      'Standard job listing'
    ]
  },
  {
    id: 2,
    title: 'Professional',
    description: 'For growing companies with regular hiring requirements',
    price: '9,999',
    period: '/month',
    popular: true,
    features: [
      'Post up to 10 jobs simultaneously',
      'Advanced candidate matching',
      'Dedicated account manager',
      'Unlimited resume views',
      'Featured job listings',
      'Basic analytics and reporting',
      'Applicant tracking system integration'
    ]
  },
  {
    id: 3,
    title: 'Enterprise',
    description: 'For large organizations with high-volume recruiting',
    price: '24,999',
    period: '/month',
    popular: false,
    features: [
      'Unlimited job postings',
      'Premium candidate matching',
      'Priority customer support',
      'Comprehensive analytics dashboard',
      'Employer branding solutions',
      'Custom API integration',
      'Dedicated recruitment consultant'
    ]
  }
];

export default ForEmployers;
