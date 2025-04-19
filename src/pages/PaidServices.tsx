
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, BarChart2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const PaidServices = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Paid Jobseeker Services</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">Enhance your job search with our premium services designed to maximize your visibility to recruiters and increase your chances of landing your dream job.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paidServices.map((service) => (
            <div 
              key={service.id} 
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="opacity-90 text-sm">{service.subtitle}</p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">₹{service.price}</span>
                  <span className="text-gray-500 ml-2">{service.duration}</span>
                </div>
                <ul className="mb-6 space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <BarChart2 className="h-16 w-16 text-blue-500" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Not sure which service is right for you?</h2>
              <p className="text-gray-600 mb-4">Our career experts can help you choose the best options based on your experience, industry, and job search goals.</p>
              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                <Link to="/chat-help">Chat with an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const paidServices = [
  {
    id: 1,
    title: 'Resume Display',
    subtitle: 'Stand out among other job applicants',
    price: '999',
    duration: 'for 3 months',
    features: [
      'Highlighted profile in recruiter searches',
      'Featured at the top of job applications',
      'Get 3x more recruiter views',
      'Priority in all job applications'
    ]
  },
  {
    id: 2,
    title: 'Job Search Booster',
    subtitle: 'Apply to more jobs with ease',
    price: '799',
    duration: 'for 1 month',
    features: [
      'Apply to 100+ premium jobs',
      'View contact details of recruiters',
      'Access salary insights for better negotiation',
      'Get job alerts before others'
    ]
  },
  {
    id: 3,
    title: 'Recruiter Connection',
    subtitle: 'Direct access to top companies',
    price: '1499',
    duration: 'for 2 months',
    features: [
      'Connect with 25 recruiters directly',
      'Profile sharing with 100+ companies',
      'Personalized job recommendations',
      'Application status tracking'
    ]
  }
];

const faqs = [
  {
    question: 'How do paid services improve my chances of getting a job?',
    answer: 'Our paid services increase your visibility to recruiters, highlight your profile in search results, and give you access to premium job listings that may not be available to regular users. This significantly increases your chances of being noticed by employers.'
  },
  {
    question: 'Can I cancel a service after purchasing?',
    answer: 'Yes, you can cancel any service within 7 days of purchase if you are not satisfied. However, refunds are subject to our terms and conditions, which vary by service type.'
  },
  {
    question: 'Do these services guarantee a job?',
    answer: 'While our services significantly improve your job search experience and increase your visibility to recruiters, we cannot guarantee job offers. Hiring decisions ultimately depend on your qualifications, interview performance, and employer requirements.'
  },
  {
    question: 'How do I know which service is best for me?',
    answer: 'The best service depends on your career stage, industry, and specific job search needs. For example, Resume Display is ideal if you want to stand out in applications, while Recruiter Connection works well for direct access to hiring managers.'
  }
];

export default PaidServices;
