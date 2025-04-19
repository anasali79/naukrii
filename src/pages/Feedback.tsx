
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, ThumbsUp, MessageSquare } from 'lucide-react';

const Feedback = () => {
  const [rating, setRating] = React.useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Feedback and Rate</h1>
          <p className="text-gray-600 mb-8">We value your feedback! Help us improve your job search experience by sharing your thoughts and suggestions.</p>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-blue-600 text-white p-6">
              <h2 className="text-xl font-bold mb-2">Rate Your Experience</h2>
              <p className="opacity-90">How satisfied are you with JobHunt overall?</p>
            </div>
            
            <div className="p-6">
              <div className="flex justify-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className="mx-1 focus:outline-none"
                    onClick={() => setRating(star)}
                  >
                    <Star 
                      className={`h-10 w-10 ${
                        star <= rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  </button>
                ))}
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    What do you like most about JobHunt?
                  </label>
                  <Textarea 
                    placeholder="Tell us what's working well for you..."
                    className="resize-none"
                    rows={4}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    What could we improve?
                  </label>
                  <Textarea 
                    placeholder="Share your suggestions for making JobHunt better..."
                    className="resize-none"
                    rows={4}
                  />
                </div>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Submit Feedback
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 text-center">
              <ThumbsUp className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Recommend Us</h3>
              <p className="text-gray-600 text-sm mb-4">Enjoyed using JobHunt? Share with colleagues and friends who are job hunting.</p>
              <div className="flex space-x-2 justify-center">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="text-blue-600 border-blue-300 hover:bg-blue-50"
                >
                  Share
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 text-center">
              <Star className="h-10 w-10 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Rate on App Store</h3>
              <p className="text-gray-600 text-sm mb-4">Using our mobile app? Leave a rating and review on your app store.</p>
              <div className="flex space-x-2 justify-center">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="text-gray-700 border-gray-300 hover:bg-gray-50"
                >
                  Google Play
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="text-gray-700 border-gray-300 hover:bg-gray-50"
                >
                  App Store
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 text-center">
              <MessageSquare className="h-10 w-10 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Contact Support</h3>
              <p className="text-gray-600 text-sm mb-4">Need help with something specific? Our support team is ready to assist.</p>
              <div className="flex space-x-2 justify-center">
                <Button 
                  size="sm" 
                  className="bg-green-600 hover:bg-green-700"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Join Our User Research Panel</h2>
            <p className="text-gray-600 mb-4">Help shape the future of JobHunt by participating in user research studies. You'll get early access to new features and may receive incentives for your participation.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Name
                </label>
                <Input type="text" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Email
                </label>
                <Input type="email" placeholder="Your email address" />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Your Role/Industry
              </label>
              <Input type="text" placeholder="e.g., Software Engineer, Healthcare, etc." />
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700">
              Join Research Panel
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Feedback;
