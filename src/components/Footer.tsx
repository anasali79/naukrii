import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      {/* App Download Section */}
      <div className="w-full bg-[#F7F7F7] py-12">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold mb-2">10M+ users are on the Naukri app</h2>
            <p className="text-gray-600 mb-6">Get real-time job updates & more!</p>
            <div className="flex items-center gap-4 mb-6">
              <input
                type="text"
                placeholder="Enter mobile number..."
                className="w-64 px-4 py-2 rounded-md border border-gray-300"
              />
              <button className="bg-[#457EFF] text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Get link
              </button>
            </div>
            <div className="flex gap-4">
              <Link to="#">
                <img src="/footer/google-play.svg" alt="Get it on Google Play" className="h-10" />
              </Link>
              <Link to="#">
                <img src="/footer/app-store.svg" alt="Download on App Store" className="h-10" />
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="bg-white p-4 rounded-lg">
              <img src="/footer/qr-code.svg" alt="Scan to download" className="w-32 h-32" />
              <p className="text-center text-sm mt-2 text-gray-600">Scan to download</p>
            </div>
            <img src="/footer/mobile-mockup.svg" alt="App preview" className="h-80" />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Logo and Social Links */}
          <div className="col-span-3">
            <Link to="/" className="block mb-6">
              <img src="/naukri-logo.png" alt="Naukri" className="h-8" />
            </Link>
            <h3 className="text-sm font-semibold mb-4">Connect with us</h3>
            <div className="flex gap-4">
              <Link to="#" className="text-gray-400 hover:text-[#457EFF]">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-[#457EFF]">
                <Instagram size={20} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-[#457EFF]">
                <Twitter size={20} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-[#457EFF]">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          <div className="col-span-6 grid grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About us</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-600 hover:text-[#457EFF]">About us</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-[#457EFF]">Careers</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-[#457EFF]">Employer home</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-[#457EFF]">Sitemap</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-[#457EFF]">Credits</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Help center</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-600 hover:text-[#457EFF]">Help center</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-[#457EFF]">Summons/Notices</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-[#457EFF]">Grievances</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-[#457EFF]">Report issue</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Privacy</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-600 hover:text-[#457EFF]">Privacy policy</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-[#457EFF]">Terms & conditions</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-[#457EFF]">Fraud alert</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-[#457EFF]">Trust & safety</Link></li>
              </ul>
            </div>
          </div>

          {/* Apply on the go Section */}
          <div className="col-span-3">
            <h3 className="font-semibold mb-4">Apply on the go</h3>
            <p className="text-gray-600 mb-4">Get real-time job updates on our App</p>
            <div className="flex flex-col gap-4">
              <Link to="#">
                <img src="/footer/google-play.svg" alt="Get it on Google Play" className="h-10" />
              </Link>
              <Link to="#">
                <img src="/footer/app-store.svg" alt="Download on App Store" className="h-10" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src="/footer/info-edge-logo.svg" alt="InfoEdge" className="h-6" />
              <div className="text-sm text-gray-500">
                <p>All trademarks are the property of their respective owners</p>
                <p>All rights reserved © 2025 Info Edge (India) Ltd.</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <span className="text-gray-600">Our businesses</span>
              <img src="/footer/jqb-hai.svg" alt="JQB Hai" className="h-6" />
              <img src="/footer/doselect.svg" alt="doselect" className="h-6" />
              <img src="/footer/minis.svg" alt="minis" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
