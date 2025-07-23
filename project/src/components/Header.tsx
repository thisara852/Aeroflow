import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane, Search, Bell, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Flight Tracking', href: '/flight-tracking' },
    { name: 'Find My Item', href: '/find-my-item' },
    { name: 'AR Navigation', href: '/ar-navigation' },
    { name: 'Eco Tracker', href: '/eco-tracker' },
    { name: 'Queue System', href: '/queue-system' },
    { name: 'Social Space', href: '/social-space' },
    { name: 'Family Hub', href: '/family-hub' },
    { name: 'Flight Mood', href: '/flight-mood' }
  ];

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#023e8a] to-blue-600 rounded-xl blur-sm opacity-75"></div>
              <div className="relative bg-gradient-to-r from-[#023e8a] to-blue-600 p-2.5 rounded-xl">
                <Plane className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-black text-[#023e8a]">AeroFlow</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-1 ml-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                  location.pathname === item.href
                    ? 'bg-[#023e8a] text-white'
                    : 'text-gray-700 hover:text-[#023e8a] hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Icons & SignIn Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-lg text-gray-600 hover:text-[#023e8a] hover:bg-gray-100 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg relative text-gray-600 hover:text-[#023e8a] hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <Link
              to="/signin"
              className="relative group px-7 py-2 bg-gradient-to-r from-[#023e8a] to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <User className="w-4 h-4 mr-2" />
                SignIn
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 bg-white/95 backdrop-blur-md rounded-2xl mt-2 border border-gray-100">
            <nav className="flex flex-col space-y-2 p-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-[#023e8a] text-white'
                      : 'text-gray-700 hover:text-[#023e8a] hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Link
                  to="/signin"
                  className="bg-gradient-to-r from-[#023e8a] to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SignIn
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
