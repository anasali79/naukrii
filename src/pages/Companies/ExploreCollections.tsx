
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ExploreCollections = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Explore Company Collections</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {featuredCollections.map((collection) => (
            <div 
              key={collection.id} 
              className="border rounded-lg overflow-hidden hover:shadow-md transition duration-200"
            >
              <div 
                className="h-40 bg-cover bg-center" 
                style={{ backgroundImage: `url(${collection.image})` }}
              ></div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{collection.title}</h2>
                <p className="text-gray-500 mb-3">{collection.description}</p>
                <div className="flex flex-wrap gap-2">
                  {collection.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Popular Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCollections.map((collection) => (
            <div 
              key={collection.id} 
              className="border rounded-lg p-5 hover:shadow-md transition duration-200"
            >
              <h3 className="font-semibold text-gray-800 mb-2">{collection.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{collection.companies} companies</p>
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs text-gray-600"
                  >
                    {collection.title.substring(0, 1)}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-gray-600">
                  +{collection.companies - 4}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const featuredCollections = [
  {
    id: 1,
    title: 'Top Tech Companies in India',
    description: 'Leading technology companies transforming the digital landscape in India',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800',
    tags: ['Technology', 'Software', 'Digital Transformation']
  },
  {
    id: 2,
    title: 'Fastest Growing Startups',
    description: 'Innovative startups with exceptional growth and funding in recent years',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800',
    tags: ['Startups', 'Innovation', 'Growth']
  },
  {
    id: 3,
    title: 'Best Companies for Work-Life Balance',
    description: 'Organizations known for prioritizing employee wellbeing and work-life balance',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800',
    tags: ['Work-Life Balance', 'Employee Benefits', 'Culture']
  },
  {
    id: 4,
    title: 'Top Companies for Women',
    description: 'Leading organizations for women\'s career growth and development',
    image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=800',
    tags: ['Diversity', 'Inclusion', 'Women Empowerment']
  }
];

const popularCollections = [
  { id: 1, title: 'Top IT Companies', companies: 75 },
  { id: 2, title: 'E-commerce Giants', companies: 40 },
  { id: 3, title: 'Fintech Leaders', companies: 35 },
  { id: 4, title: 'Healthcare Innovators', companies: 50 },
  { id: 5, title: 'Edtech Pioneers', companies: 30 },
  { id: 6, title: 'Manufacturing Excellence', companies: 45 },
  { id: 7, title: 'Consulting Firms', companies: 25 },
  { id: 8, title: 'Media & Entertainment', companies: 35 }
];

export default ExploreCollections;
