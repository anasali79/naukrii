
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ChatHelp = () => {
  const [messages, setMessages] = useState<Array<{type: 'bot' | 'user', text: string}>>([
    {type: 'bot', text: 'Hi! I am your smart job search assistant. How can I help you today?'}
  ]);
  const [inputValue, setInputValue] = useState('');
  
  const commonQuestions = [
    'How to use Naukri',
    'How to Register',
    'How to Set Job Alerts',
    'Forgot Password issue',
    'Is Naukri Free'
  ];
  
  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, {type: 'user', text}]);
    setInputValue('');
    
    // Simulate bot response
    setTimeout(() => {
      let response = '';
      
      if (text.toLowerCase().includes('register')) {
        response = 'You can register on Naukri by clicking the "Register" button at the top of the page. You\'ll need to provide your email address, create a password, and fill in some basic profile information.';
      } else if (text.toLowerCase().includes('job alert')) {
        response = 'To set job alerts, go to your profile after logging in, click on "Job Alerts" and then "Create New Alert". You can specify job titles, locations, and other preferences to receive targeted job notifications.';
      } else if (text.toLowerCase().includes('forgot password')) {
        response = 'If you\'ve forgotten your password, click on "Login" and then select "Forgot Password". Enter your registered email address, and we\'ll send you a password reset link.';
      } else if (text.toLowerCase().includes('free')) {
        response = 'Yes, Naukri offers both free and premium services. Basic job search, application, and profile creation are free. Premium services like resume boost, profile highlighter, and extended application limits require a subscription.';
      } else if (text.toLowerCase().includes('how to use')) {
        response = 'To use Naukri effectively, create a complete profile, upload your resume, set job preferences, use filters when searching for jobs, set up job alerts, and apply promptly to relevant openings. Check your dashboard regularly for updates and application status.';
      } else {
        response = 'Thank you for your question. Our team will look into this and provide more information soon. In the meantime, you might find helpful information in our FAQ section or by exploring specific job categories that interest you.';
      }
      
      setMessages(prev => [...prev, {type: 'bot', text: response}]);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm p-4">
        <div className="max-w-3xl mx-auto flex items-center">
          <Link to="/" className="mr-4">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold">Chat Support</h1>
        </div>
      </header>
      
      <div className="flex-1 max-w-3xl w-full mx-auto p-4">
        <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col h-[calc(100vh-11rem)]">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.type === 'bot' ? 'justify-start' : 'justify-end'}`}
              >
                {message.type === 'bot' && (
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <img 
                      src="/lovable-uploads/026dddad-7fa0-43b2-9330-1db273606fc7.png" 
                      alt="Bot" 
                      className="h-6 w-6" 
                    />
                  </div>
                )}
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'bot' 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          {/* Quick questions */}
          {messages.length < 3 && (
            <div className="p-4 pt-0">
              <div className="flex flex-wrap gap-2">
                {commonQuestions.map((question, index) => (
                  <Button 
                    key={index} 
                    variant="outline" 
                    className="text-blue-600 border-blue-200"
                    onClick={() => handleSendMessage(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          <div className="border-t p-4">
            <form 
              className="flex gap-2" 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <Input
                type="text"
                placeholder="Type message here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1"
              />
              <Button type="submit">Send</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHelp;
