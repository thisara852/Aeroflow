import React from 'react';
import { 
  Plane, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin,
  ArrowRight,
  Search,
  Users,
  Leaf,
  Clock,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    features: [
      { name: 'Virtual Companion', href: '/dashboard' },
      { name: 'FindMyItem', href: '/find-my-item' },
      { name: 'AR Navigation', href: '/ar-navigation' },
      { name: 'Eco Tracker', href: '/eco-tracker' },
      { name: 'Queue System', href: '/queue-system' },
      { name: 'Social Space', href: '/social-space' }
    ],
    company: [
      'About Us', 'Careers', 'Press', 'Partners', 'Blog', 'Contact'
    ],
    support: [
      'Help Center', 'Documentation', 'Community', 'Status Page', 'Bug Reports', 'Feature Requests'
    ],
    legal: [
      'Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Accessibility', 'Licenses'
    ]
  };

  const quickStats = [
    { icon: Users, label: 'Active Users', value: '100K+' },
    { icon: Search, label: 'Items Found', value: '50K+' },
    { icon: Leaf, label: 'CO₂ Saved', value: '2.5M kg' },
    { icon: Clock, label: 'Time Saved', value: '1M hours' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#023e8a] to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-[#023e8a] to-[#0077b6] p-2 rounded-lg">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">SkyMate</span>
                  <span className="text-lg font-medium text-blue-300 block">+ FindMyItem</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                The complete smart airport companion suite featuring AI-powered lost & found, 
                AR navigation, virtual assistance, and comprehensive travel tools for stress-free journeys.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-[#023e8a] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-[#023e8a] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-[#023e8a] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-[#023e8a] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-8 grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Features</h3>
                <ul className="space-y-2">
                  {footerLinks.features.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 group">
                        <span>{link.name}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Support</h3>
                <ul className="space-y-2">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Legal</h3>
                <ul className="space-y-2">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>support@AeroFlow.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+9475 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Francisco, CA</span>
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Aeroflow. All rights reserved.
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-gray-800">
          <div className="bg-gradient-to-r from-[#023e8a]/10 to-[#0077b6]/10 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h4 className="font-semibold text-lg mb-1">Stay Connected</h4>
              <p className="text-gray-300">Get updates on new features, airport partnerships, and travel tips.</p>
            </div>
            <div className="flex w-full md:w-auto mt-4 md:mt-0">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg border border-gray-700 focus:outline-none focus:border-[#023e8a] flex-1 md:w-64"
              />
              <button className="bg-gradient-to-r from-[#023e8a] to-[#0077b6] px-6 py-2 rounded-r-lg hover:shadow-lg transition-all duration-300 flex items-center">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Back to Top Button inside footer, aligned right */}
        <div className="py-6 border-t border-gray-800 flex justify-end">
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-gradient-to-r from-[#023e8a] to-[#0077b6] text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow duration-300"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
            <span></span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
