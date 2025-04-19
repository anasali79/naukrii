
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { FileText, Check, Users, Calendar, Clock, Award } from 'lucide-react';

const ResumeWritingServices = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
                <h1 className="text-4xl font-bold mb-4">Professional Resume Writing Services</h1>
                <p className="text-xl mb-6 opacity-90">Let our expert writers craft a job-winning resume that highlights your strengths and catches recruiters' attention</p>
                <Button className="bg-white text-blue-700 hover:bg-gray-100">
                  Get Your Professional Resume
                </Button>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <div className="text-center">
                    <FileText className="h-16 w-16 mx-auto mb-4 text-blue-300" />
                    <div className="text-2xl font-bold mb-2">93%</div>
                    <p className="text-blue-100">of our clients receive interview calls within 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Resume Writing Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We follow a meticulous process to create resumes that stand out and effectively communicate your value to potential employers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {process.map((step, index) => (
              <div key={step.id} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-100 z-0"></div>
                )}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Resume Writing Service?</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-700 p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Our Writers</h3>
                <div className="space-y-6">
                  {writers.map((stat, index) => (
                    <div key={index} className="flex items-start">
                      {stat.icon}
                      <div className="ml-4">
                        <div className="text-xl font-bold mb-1">{stat.value}</div>
                        <p className="text-blue-100">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Choose Your Service Package</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div 
                  key={pkg.id} 
                  className={`border rounded-lg overflow-hidden hover:shadow-lg transition ${
                    pkg.popular ? 'border-blue-500 relative' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-3 py-1 uppercase font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                    <p className="text-gray-600 mb-4 h-12">{pkg.description}</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">₹{pkg.price}</span>
                    </div>
                    <Button 
                      className={`w-full ${
                        pkg.popular 
                          ? 'bg-blue-600 hover:bg-blue-700' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      Choose Package
                    </Button>
                  </div>
                  <div className="p-6">
                    <p className="font-medium text-gray-700 mb-4">Package includes:</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, index) => (
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
          
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Resume?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Join thousands of professionals who have accelerated their careers with our resume writing services</p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started Today
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const process = [
  {
    id: 1,
    icon: <FileText className="h-6 w-6" />,
    title: 'Submit Information',
    description: 'Fill out our detailed questionnaire and upload your current resume'
  },
  {
    id: 2,
    icon: <Users className="h-6 w-6" />,
    title: 'Writer Assignment',
    description: 'We match you with a writer specialized in your industry'
  },
  {
    id: 3,
    icon: <Calendar className="h-6 w-6" />,
    title: 'Draft Creation',
    description: 'Your writer creates a compelling resume highlighting your strengths'
  },
  {
    id: 4,
    icon: <Check className="h-6 w-6" />,
    title: 'Review & Finalize',
    description: 'Provide feedback and receive your polished, final resume'
  }
];

const benefits = [
  {
    title: 'ATS-Optimized Content',
    description: 'Our resumes are engineered to pass through Applicant Tracking Systems with targeted keywords and formatting.'
  },
  {
    title: 'Industry-Specific Expertise',
    description: 'Writers with experience in your field ensure the right terminology and emphasis on relevant achievements.'
  },
  {
    title: 'Attention-Grabbing Achievement Focus',
    description: 'We transform job descriptions into powerful achievement statements that showcase your value.'
  },
  {
    title: 'Unlimited Revisions',
    description: 'We\'ll refine your resume until you\'re completely satisfied with the final result.'
  }
];

const writers = [
  {
    icon: <Award className="h-6 w-6 text-blue-300" />,
    value: '50+ Certified Writers',
    label: 'Professional resume writers with industry certifications'
  },
  {
    icon: <Users className="h-6 w-6 text-blue-300" />,
    value: '25,000+',
    label: 'Successful resumes written across all career levels'
  },
  {
    icon: <Clock className="h-6 w-6 text-blue-300" />,
    value: '10+ Years',
    label: 'Average experience of our senior writing team'
  }
];

const packages = [
  {
    id: 1,
    title: 'Entry Level',
    description: 'Perfect for fresh graduates and early career professionals',
    price: '1,999',
    popular: false,
    features: [
      'ATS-optimized resume',
      'Cover letter',
      'LinkedIn profile summary',
      '2 rounds of revisions',
      '3-day delivery'
    ]
  },
  {
    id: 2,
    title: 'Professional',
    description: 'Ideal for mid-career professionals with 3-8 years experience',
    price: '3,499',
    popular: true,
    features: [
      'ATS-optimized resume',
      'Customized cover letter',
      'Complete LinkedIn profile optimization',
      'Unlimited revisions for 14 days',
      '48-hour delivery',
      'Follow-up consultation call'
    ]
  },
  {
    id: 3,
    title: 'Executive',
    description: 'Tailored for senior managers and C-level executives',
    price: '5,999',
    popular: false,
    features: [
      'Premium ATS-optimized resume',
      'Executive bio & cover letter',
      'Full LinkedIn profile & networking strategy',
      'Unlimited revisions for 30 days',
      '24-hour priority delivery',
      'Two consultation calls',
      'Interview preparation guide'
    ]
  }
];

export default ResumeWritingServices;
