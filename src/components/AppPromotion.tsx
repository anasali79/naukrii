
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Smartphone } from 'lucide-react';

const AppPromotion = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-naukri-blue to-blue-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6">Get JobHunt Mobile App</h2>
            <p className="text-white/80 mb-8">
              Take your job search on the go and never miss an opportunity. Get instant notifications for new job matches and application updates.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-naukri-yellow" />
                </div>
                <p className="ml-3 text-white/90">
                  Apply to jobs on the go with just one tap
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-naukri-yellow" />
                </div>
                <p className="ml-3 text-white/90">
                  Get instant notifications for new relevant jobs
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-naukri-yellow" />
                </div>
                <p className="ml-3 text-white/90">
                  Track all your applications in one place
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-naukri-yellow" />
                </div>
                <p className="ml-3 text-white/90">
                  Chat with recruiters directly from the app
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2 h-auto py-2">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5,1.1743c0,0-0.06,0.0004-0.1612,0.0049c-0.2176,0.0096-0.4996,0.0254-0.8093,0.1082c-0.3518,0.0931-0.7392,0.2856-1.0981,0.6445s-0.5513,0.7463-0.6445,1.0981c-0.0828,0.3097-0.0986,0.5917-0.1082,0.8093C14.6743,3.9443,14.6738,4.0043,14.6738,4.0043L14.6738,19.9957c0,0,0.0004,0.06,0.0049,0.1612c0.0096,0.2176,0.0254,0.4996,0.1082,0.8093c0.0931,0.3518,0.2856,0.7392,0.6445,1.0981s0.7463,0.5513,1.0981,0.6445c0.3097,0.0828,0.5917,0.0986,0.8093,0.1082c0.1012,0.0045,0.1612,0.0049,0.1612,0.0049s0.06-0.0004,0.1612-0.0049c0.2176-0.0096,0.4996-0.0254,0.8093-0.1082c0.3518-0.0931,0.7392-0.2856,1.0981-0.6445s0.5513-0.7463,0.6445-1.0981c0.0828-0.3097,0.0986-0.5917,0.1082-0.8093c0.0045-0.1012,0.0049-0.1612,0.0049-0.1612V4.0043c0,0-0.0004-0.06-0.0049-0.1612c-0.0096-0.2176-0.0254-0.4996-0.1082-0.8093c-0.0931-0.3518-0.2856-0.7392-0.6445-1.0981s-0.7463-0.5513-1.0981-0.6445c-0.3097-0.0828-0.5917-0.0986-0.8093-0.1082C17.56,1.1747,17.5,1.1743,17.5,1.1743z M8.7148,1.9766L3.7314,11.7793L8.6816,22h2.7432l-4.6006-10.0703h0.0097L11.7744,1.9766H8.7148z M17.5,3.1836c0,0,0.0232,0.0006,0.0913,0.0029c0.1409,0.0048,0.3297,0.0143,0.4553,0.0596c0.1498,0.0542,0.199,0.1104,0.2256,0.1367c0.0266,0.0264,0.0825,0.0758,0.1367,0.2256c0.0453,0.1255,0.0548,0.3144,0.0596,0.4553c0.0023,0.0681,0.0029,0.0913,0.0029,0.0913s0.0006-0.0232,0.0029-0.0913c0.0048-0.1409,0.0143-0.3297,0.0596-0.4553c0.0542-0.1498,0.1104-0.199,0.1367-0.2256c0.0264-0.0266,0.0758-0.0825,0.2256-0.1367c0.1255-0.0453,0.3144-0.0548,0.4553-0.0596c0.0681-0.0023,0.0913-0.0029,0.0913-0.0029v16.6328c0,0-0.0232-0.0006-0.0913-0.0029c-0.1409-0.0048-0.3297-0.0143-0.4553-0.0596c-0.1498-0.0542-0.199-0.1104-0.2256-0.1367c-0.0266-0.0264-0.0825-0.0758-0.1367-0.2256c-0.0453-0.1255-0.0548-0.3144-0.0596-0.4553c-0.0023-0.0681-0.0029-0.0913-0.0029-0.0913s-0.0006,0.0232-0.0029,0.0913c-0.0048,0.1409-0.0143,0.3297-0.0596,0.4553c-0.0542,0.1498-0.1104,0.199-0.1367,0.2256c-0.0264,0.0266-0.0758,0.0825-0.2256,0.1367c-0.1255,0.0453-0.3144,0.0548-0.4553,0.0596c-0.0681,0.0023-0.0913,0.0029-0.0913,0.0029V3.1836z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Button>
              
              <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2 h-auto py-2">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.6123,2.8c-0.3253,0.35-0.5,0.87-0.5,1.56v15.2c0,0.69,0.1747,1.21,0.5,1.56L3.6697,21.19l8.59-8.59v-0.2l-8.59-8.59L3.6123,2.8z M14.7507,12.8l2.8693-2.8693L5.2163,0.7773C4.767,0.531,4.3033,0.4033,3.863,0.4293L14.7507,12.8z M14.7507,11.2l-10.887,12.3707c0.4403,0.0253,0.904-0.1017,1.3533-0.3507L17.62,14.07L14.7507,11.2z M19.9847,11.97l-2.3284-1.3267l-2.7553,2.7533l2.7553,2.7533l2.3283-1.3267c0.817-0.4907,0.817-2.4267,0-2.8533z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="bg-white p-3 rounded-3xl shadow-xl max-w-[280px]">
              <div className="rounded-2xl overflow-hidden border-4 border-gray-200">
                <div className="bg-naukri-blue text-white py-2 px-4 flex items-center justify-between">
                  <Smartphone className="h-5 w-5" />
                  <span className="font-medium">JobHunt App</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-70"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="font-bold">Hello, User!</div>
                      <div className="text-sm text-gray-500">Find your dream job</div>
                    </div>
                    <div className="w-10 h-10 bg-naukri-lightBlue rounded-full flex items-center justify-center text-xl">
                      👤
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-3 mb-3">
                    <div className="text-sm font-medium">New job matches (5)</div>
                    <div className="text-xs text-gray-500">Based on your profile</div>
                  </div>
                  
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="border border-gray-200 rounded-lg p-3 mb-2">
                      <div className="font-medium text-sm">Software Developer</div>
                      <div className="text-xs text-gray-500 mb-2">Tech Innovations Inc</div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs">₹18-25 LPA</span>
                        <Button variant="ghost" size="sm" className="h-7 text-naukri-blue text-xs">
                          Apply
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
