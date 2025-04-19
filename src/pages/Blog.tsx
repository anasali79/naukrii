import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, Tag, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Naukri Blog</h1>
            <p className="text-xl mb-8 max-w-3xl">Career advice, industry insights, and job search tips to help you succeed in your professional journey</p>
            
            <div className="flex max-w-md">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="pl-10 py-6 bg-white border-gray-300 focus:border-blue-500 rounded-r-none"
                />
              </div>
              <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700 px-6">
                Search
              </Button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
              
              <div className="mb-12">
                <div className="bg-gray-200 h-64 w-full rounded-t-lg"></div>
                <div className="border border-t-0 rounded-b-lg p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>May 10, 2023</span>
                    <span className="mx-2">•</span>
                    <User className="h-4 w-4 mr-1" />
                    <span>Career Expert</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>5 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">10 Resume Trends to Follow in 2023 for Maximum Impact</h3>
                  <p className="text-gray-600 mb-4">In today's competitive job market, having a resume that stands out is more important than ever. Learn the latest trends and techniques that are helping job seekers get noticed by top employers.</p>
                  <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                    Read More
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {recentArticles.map((article) => (
                  <div key={article.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="bg-gray-200 h-48 w-full"></div>
                    <div className="p-5">
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{article.excerpt}</p>
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center">
                        Read Article <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Guides</h2>
              <div className="space-y-6 mb-8">
                {careerGuides.map((guide) => (
                  <div key={guide.id} className="flex border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="bg-gray-200 h-32 w-32 flex-shrink-0"></div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2">{guide.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{guide.description}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Tag className="h-3 w-3 mr-1" />
                        {guide.categories.map((category, index) => (
                          <span key={index}>
                            {category}
                            {index < guide.categories.length - 1 && <span className="mx-1">•</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                  Load More Articles
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTopics.map((topic, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full transition"
                    >
                      {topic}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Trending Articles</h3>
                <div className="space-y-4">
                  {trendingArticles.map((article, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-gray-200 h-16 w-16 rounded flex-shrink-0"></div>
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-900 text-sm">{article.title}</h4>
                        <p className="text-gray-500 text-xs mt-1">{article.views} views</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 text-sm mb-4">Get the latest career advice and job search tips delivered to your inbox weekly.</p>
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="mb-3"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const recentArticles = [
  {
    id: 1,
    title: 'How to Navigate the Hybrid Work Environment in 2023',
    excerpt: 'With remote and in-office work blending, learn strategies to thrive in this new normal.',
    date: 'April 28, 2023',
    readTime: '4 min read'
  },
  {
    id: 2,
    title: 'Top Skills Employers Are Looking for Post-Pandemic',
    excerpt: 'The pandemic has shifted priorities. Discover which skills will make you stand out.',
    date: 'April 22, 2023',
    readTime: '6 min read'
  },
  {
    id: 3,
    title: 'How AI Is Changing the Recruitment Process',
    excerpt: 'Artificial intelligence is revolutionizing how companies hire. Here\'s what you need to know.',
    date: 'April 15, 2023',
    readTime: '7 min read'
  },
  {
    id: 4,
    title: 'Negotiating Your Salary: A Complete Guide',
    excerpt: 'Learn effective strategies to maximize your compensation package in your next job.',
    date: 'April 8, 2023',
    readTime: '8 min read'
  }
];

const careerGuides = [
  {
    id: 1,
    title: 'Complete Guide to Software Engineering Careers',
    description: 'Everything you need to know about starting and advancing in software development roles.',
    categories: ['Technology', 'Career Path', 'Skills Development']
  },
  {
    id: 2,
    title: 'Finance Industry: Career Paths and Growth Opportunities',
    description: 'Explore various career paths in banking, investment, and financial services sectors.',
    categories: ['Finance', 'Banking', 'Career Growth']
  },
  {
    id: 3,
    title: 'Breaking into Data Science: From Beginner to Professional',
    description: 'Step-by-step guide to building skills and landing your first data science role.',
    categories: ['Data Science', 'Technology', 'Skills Development']
  }
];

const popularTopics = [
  'Resume Writing', 'Interview Tips', 'Career Change', 'Remote Work', 
  'Salary Negotiation', 'Work-Life Balance', 'Leadership', 'Skill Development',
  'Job Search', 'LinkedIn Optimization', 'Networking', 'Industry Insights'
];

const trendingArticles = [
  {
    title: '7 Mistakes to Avoid in Your First Job Interview',
    views: '15.4K'
  },
  {
    title: 'How to Write a Resignation Letter (With Templates)',
    views: '12.8K'
  },
  {
    title: 'Top 10 Highest Paying Jobs in 2023',
    views: '10.2K'
  },
  {
    title: 'LinkedIn Profile Tips That Actually Work',
    views: '9.7K'
  },
  {
    title: 'How to Answer "Tell Me About Yourself" in Interviews',
    views: '8.5K'
  }
];

export default Blog;
