
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  number: string;
}

const FAQSection: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      number: "Q1",
      question: "What is AI resume maker?",
      answer: "AI resume maker is a powerful digital tool that allows you to create a professional resume in a few minutes. This helps in making your job search easier & more efficient."
    },
    {
      id: "item-2",
      number: "Q2",
      question: "How to use AI resume maker?",
      answer: "Register on Naukri, fill in your professional details, select a template, and download your resume. It's that simple!"
    },
    {
      id: "item-3",
      number: "Q3",
      question: "How much does it cost to create a resume with AI resume maker?",
      answer: "You can create a basic resume for free. For advanced features, you can upgrade to Resume Pro."
    },
    {
      id: "item-4",
      number: "Q4",
      question: "How long is Resume Pro valid for?",
      answer: "Resume Pro subscriptions are typically valid for 30 days, 90 days, or 365 days depending on the plan you choose."
    },
    {
      id: "item-5",
      number: "Q5",
      question: "How many resumes can you create with AI resume maker and Resume Pro?",
      answer: "With the free version, you can create 1 resume. With Resume Pro, you can create unlimited resumes."
    },
    {
      id: "item-6",
      number: "Q6",
      question: "Which format will you be able to download your resume in?",
      answer: "You can download your resume in PDF, DOCX, and TXT formats."
    },
    {
      id: "item-7",
      number: "Q7",
      question: "Who should you contact if you need any help?",
      answer: "You can contact our customer support team via email at support@naukri.com or through the chat support available on the website."
    },
    {
      id: "item-8",
      number: "Q8",
      question: "Why should I use a resume builder?",
      answer: "Resume builders save time, ensure professional formatting, and help create ATS-friendly resumes that increase your chances of getting interviews."
    },
    {
      id: "item-9",
      number: "Q9",
      question: "Is this a completely free resume builder?",
      answer: "We offer a free version with basic features. For advanced features, premium templates, and unlimited downloads, you need to upgrade to Resume Pro."
    },
    {
      id: "item-10",
      number: "Q10",
      question: "How can I create my resume?",
      answer: "Register on Naukri, go to the Resume Maker section, fill in your details, select a template, and download your resume."
    },
    {
      id: "item-11",
      number: "Q11",
      question: "What's the recommended layout for a resume?",
      answer: "The ideal resume layout includes a professional summary, skills, work experience, education, and achievements. Our templates are designed to highlight these sections effectively."
    }
  ];

  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Frequently asked questions
      </h2>
      
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqItems.map(item => (
          <AccordionItem key={item.id} value={item.id} className="bg-white rounded-lg overflow-hidden border">
            <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-gray-900 hover:no-underline">
              <div className="flex items-center">
                <span className="text-gray-500 mr-3">{item.number}</span>
                <span>{item.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 pl-12">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
