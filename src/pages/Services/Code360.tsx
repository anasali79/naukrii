import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Code, CheckCircle, PenTool, BookOpen, LucideIcon, Zap, Users } from 'lucide-react';

const Code360 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
                <div className="flex items-center mb-4">
                  <img 
                    src="/naukri-logo.png" 
                    alt="Naukri Logo" 
                    className="h-8" 
                  />
                  <span className="text-xl font-semibold text-white">360</span>
                </div>
                <h1 className="text-4xl font-bold mb-4">Code 360</h1>
                <p className="text-xl mb-6 opacity-90">Accelerate your tech career with our comprehensive coding practice platform designed for technical interviews</p>
                <Button className="bg-white text-purple-700 hover:bg-gray-100">
                  Start Coding Now
                </Button>
              </div>
              <div className="md:w-1/3">
                <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <Code className="h-20 w-20 mx-auto mb-4 text-purple-300" />
                  <div className="text-center">
                    <p className="text-white font-bold">Master Data Structures, Algorithms & System Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Code 360?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our comprehensive platform helps you build the skills needed to excel in technical interviews at top tech companies.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature) => (
              <div key={feature.id} className="border rounded-lg p-6 hover:shadow-md transition">
                <div className="text-purple-600 mb-4">{<feature.icon className="h-8 w-8" />}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topics.map((topic) => (
                <div 
                  key={topic.id} 
                  className="border rounded-lg p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-md mr-3">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{topic.title}</h3>
                      <p className="text-gray-500 text-sm">{topic.problemCount} problems</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Like You Interview</h2>
                <ul className="space-y-4">
                  {practiceFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Real-World Interview Problems</h3>
                <div className="space-y-4">
                  {companies.map((company, index) => (
                    <div key={index} className="flex items-center bg-white/10 p-3 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-white text-purple-700 flex items-center justify-center mr-3 font-bold">
                        {company.charAt(0)}
                      </div>
                      <span>{company}</span>
                    </div>
                  ))}
                  <p className="text-sm text-purple-200 italic mt-4">
                    Based on actual interview questions reported by candidates
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div 
                  key={plan.id} 
                  className={`border rounded-lg overflow-hidden hover:shadow-lg transition ${
                    plan.popular ? 'border-purple-500 relative' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs px-3 py-1 uppercase font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                    <p className="text-gray-600 mb-4 h-12">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">₹{plan.price}</span>
                      <span className="text-gray-500 ml-2">{plan.period}</span>
                    </div>
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-purple-600 hover:bg-purple-700' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      Get Started
                    </Button>
                  </div>
                  <div className="p-6">
                    <p className="font-medium text-gray-700 mb-4">Features include:</p>
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
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Ace Your Tech Interviews?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Join thousands of software developers who have landed jobs at top tech companies through Code 360 preparation</p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const features: {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    id: 1,
    icon: Code,
    title: '1000+ Coding Problems',
    description: 'Curated problems from easy to hard, covering all popular interview topics and patterns.'
  },
  {
    id: 2,
    icon: PenTool,
    title: 'Interactive Coding Environment',
    description: 'Write, test, and debug your code in our online IDE with support for multiple programming languages.'
  },
  {
    id: 3,
    icon: BookOpen,
    title: 'Comprehensive Learning Paths',
    description: 'Structured courses on data structures, algorithms, and system design for systematic learning.'
  },
  {
    id: 4,
    icon: Zap,
    title: 'Performance Analytics',
    description: 'Track your progress, identify strengths and weaknesses, and focus on improvement areas.'
  },
  {
    id: 5,
    icon: Users,
    title: 'Mock Interviews',
    description: 'Practice with peer mock interviews or schedule sessions with experienced tech interviewers.'
  },
  {
    id: 6,
    icon: CheckCircle,
    title: 'Solution Explanations',
    description: 'Detailed explanations with time and space complexity analysis for each problem.'
  }
];

const topics = [
  { id: 1, title: 'Arrays & Strings', problemCount: 150 },
  { id: 2, title: 'Linked Lists', problemCount: 75 },
  { id: 3, title: 'Trees & Graphs', problemCount: 120 },
  { id: 4, title: 'Dynamic Programming', problemCount: 100 },
  { id: 5, title: 'Sorting & Searching', problemCount: 85 },
  { id: 6, title: 'System Design', problemCount: 50 },
  { id: 7, title: 'Object-Oriented Design', problemCount: 40 },
  { id: 8, title: 'Bit Manipulation', problemCount: 30 }
];

const practiceFeatures = [
  {
    title: 'Timed Coding Sessions',
    description: 'Practice under realistic time constraints to improve your speed and accuracy.'
  },
  {
    title: 'Multiple Language Support',
    description: 'Code in Java, Python, C++, JavaScript, and more with language-specific test cases.'
  },
  {
    title: 'Code Quality Analysis',
    description: 'Get feedback on your code quality, complexity, and efficiency.'
  },
  {
    title: 'Edge Case Tests',
    description: 'Challenge your solutions with comprehensive test cases including edge scenarios.'
  }
];

const companies = [
  'Google', 'Amazon', 'Microsoft', 'Facebook', 'Apple', 'Netflix'
];

const plans = [
  {
    id: 1,
    title: 'Basic',
    description: 'For casual preparation',
    price: '799',
    period: 'per month',
    popular: false,
    features: [
      'Access to 300+ problems',
      'Basic coding environment',
      'Solution explanations',
      'Progress tracking',
      'Forum access'
    ]
  },
  {
    id: 2,
    title: 'Premium',
    description: 'For serious job seekers',
    price: '1,499',
    period: 'per month',
    popular: true,
    features: [
      'Access to all 1000+ problems',
      'Advanced coding environment',
      'Detailed video explanations',
      'Personalized study plans',
      '2 mock interviews per month',
      'Company-specific problem sets',
      'Performance analytics'
    ]
  },
  {
    id: 3,
    title: 'Ultimate',
    description: 'For maximum preparation',
    price: '3,999',
    period: 'per month',
    popular: false,
    features: [
      'All Premium features',
      'Unlimited mock interviews',
      'Private coaching sessions',
      'Resume review',
      'Interview strategy sessions',
      'System design workshops',
      'Lifetime access to solutions'
    ]
  }
];

export default Code360;
