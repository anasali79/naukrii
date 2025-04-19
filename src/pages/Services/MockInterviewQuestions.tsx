
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { PlusCircle, MinusCircle, MessageSquare, PlayCircle, BookOpen, Cpu } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MockInterviewQuestions = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Mock Interview Questions</h1>
            <p className="text-xl max-w-3xl mb-8">Practice with industry-specific questions to nail your next interview and land your dream job</p>
            <Button className="bg-white text-teal-700 hover:bg-gray-100">
              Start Practicing Now
            </Button>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Interview Practice Matters</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Being prepared for interview questions can mean the difference between getting the job and missing out, even if you have the perfect qualifications.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="border rounded-lg p-6 hover:shadow-md transition">
                <div className="text-teal-500 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Interview Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <div 
                  key={category.id} 
                  className="border rounded-lg p-5 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">{category.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{category.questionsCount}+ questions</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-teal-500 text-teal-600 hover:bg-teal-50"
                  >
                    View Questions
                  </Button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Interview Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              {sampleQuestions.map((question, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {question.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-4 bg-white rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-2">Suggested Answer:</h4>
                      <p className="text-gray-600 mb-4">{question.suggestedAnswer}</p>
                      <h4 className="font-semibold text-gray-800 mb-2">Key Points to Cover:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {question.keyPoints.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="text-center mt-8">
              <Button className="bg-teal-600 hover:bg-teal-700">
                Get Full Access
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-teal-700 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Virtual Mock Interviews</h3>
                <p className="opacity-90">Practice with AI-powered interview simulations that provide real-time feedback</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {virtualInterviewFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <PlusCircle className="h-5 w-5 text-teal-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Try Virtual Interview
                </Button>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-800 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Expert Coaching Sessions</h3>
                <p className="opacity-90">One-on-one interview preparation with industry professionals</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {coachingFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <PlusCircle className="h-5 w-5 text-gray-700 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-800 text-gray-800 hover:bg-gray-100"
                >
                  Book a Coach
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
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
    icon: <MessageSquare className="h-8 w-8" />,
    title: 'Reduce Interview Anxiety',
    description: 'Practice builds confidence and reduces stress, helping you perform better when it counts.'
  },
  {
    id: 2,
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Industry-Specific Questions',
    description: 'Access thousands of questions tailored to your field and role level.'
  },
  {
    id: 3,
    icon: <Cpu className="h-8 w-8" />,
    title: 'AI-Powered Feedback',
    description: 'Get instant analysis of your responses to help you improve weak areas.'
  }
];

const categories = [
  { id: 1, title: 'Software Development', questionsCount: 450 },
  { id: 2, title: 'Data Science & Analytics', questionsCount: 320 },
  { id: 3, title: 'Marketing & Sales', questionsCount: 380 },
  { id: 4, title: 'Finance & Accounting', questionsCount: 290 },
  { id: 5, title: 'Product Management', questionsCount: 210 },
  { id: 6, title: 'HR & Recruitment', questionsCount: 180 },
  { id: 7, title: 'Healthcare Professionals', questionsCount: 240 },
  { id: 8, title: 'Leadership & Management', questionsCount: 260 }
];

const sampleQuestions = [
  {
    question: 'Tell me about a challenging project you worked on and how you overcame obstacles.',
    suggestedAnswer: 'In my previous role at XYZ Company, I led a team to implement a new CRM system that had significant technical and adoption challenges. The main obstacle was integrating it with our legacy systems while ensuring minimal disruption to customer service operations.',
    keyPoints: [
      'Define the specific challenge clearly',
      'Explain your role and approach',
      'Highlight problem-solving methods used',
      'Share results and lessons learned',
      'Keep focus on your contributions'
    ]
  },
  {
    question: 'How do you stay updated with the latest trends in your industry?',
    suggestedAnswer: 'I maintain a systematic approach to staying current. I subscribe to key industry publications like [specific examples], participate in online communities such as [examples], and attend annual conferences including [examples]. Additionally, I dedicate weekly time for learning new skills through courses on platforms like Coursera and LinkedIn Learning.',
    keyPoints: [
      'Mention specific publications and resources',
      'Describe any formal continuing education',
      'Highlight networking and community involvement',
      'Explain how you apply new knowledge',
      'Show your proactive approach to learning'
    ]
  },
  {
    question: 'Where do you see yourself in five years?',
    suggestedAnswer: 'In five years, I envision myself having developed deep expertise in [specific area of your field], potentially in a senior role where I can combine my technical abilities with leadership skills. I\'m particularly interested in growing in areas such as [mention relevant skills to the job] and potentially leading initiatives or teams focused on [relevant area to the company].',
    keyPoints: [
      'Align your goals with the potential career path at the company',
      'Show ambition while being realistic',
      'Emphasize commitment to growth in relevant skills',
      'Demonstrate you\'ve researched career paths in the organization',
      'Express enthusiasm for long-term contribution'
    ]
  }
];

const virtualInterviewFeatures = [
  'Realistic simulation of actual interview environments',
  'Questions based on real interviews at top companies',
  'Immediate feedback on communication style and content',
  'Analysis of speech patterns, filler words, and pacing',
  'Record and review your performance',
  'Progress tracking across multiple practice sessions'
];

const coachingFeatures = [
  'Personalized sessions with experienced interviewers',
  'Custom feedback tailored to your industry and role',
  'Mock interviews with role-specific scenarios',
  'Body language and non-verbal communication tips',
  'Guidance on handling tough or unexpected questions',
  'Post-session detailed improvement plan'
];

const testimonials = [
  {
    quote: 'The mock interview questions were almost identical to what I was asked in my actual interview at a major tech company. I felt so prepared!',
    name: 'Priya S.',
    position: 'Software Engineer'
  },
  {
    quote: 'After practicing with the virtual interview tool for two weeks, my confidence increased dramatically. I received offers from 3 companies!',
    name: 'Rahul M.',
    position: 'Marketing Manager'
  },
  {
    quote: 'The expert coaching session identified weaknesses in my responses that I never noticed. The guidance was invaluable for my career change.',
    name: 'Ananya K.',
    position: 'Data Analyst'
  }
];

export default MockInterviewQuestions;
