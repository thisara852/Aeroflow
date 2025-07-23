import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  Zap, 
  Shield,
  Brain,
  MapPin,
  Search,
  Clock,
  Users,
  Leaf,
  Smartphone,
  MessageSquare,
  Heart,
  Camera,
  Globe,
  Star,
  CheckCircle
} from 'lucide-react';

// Import the local image
import airplaneImage from '../assets/img2.jpg';

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "Virtual Companion",
      description: "AI-powered personal assistant with voice search, travel checklists, and emotional support for anxious travelers.",
      color: "from-purple-500 to-pink-500",
      link: "/dashboard"
    },
    {
      icon: Search,
      title: "Smart Lost & Found",
      description: "AI-driven search with image recognition, real-time tracking, and smart locker integration for instant recovery.",
      color: "from-green-500 to-emerald-500",
      link: "/find-my-item"
    },
    {
      icon: MapPin,
      title: "AR Navigation",
      description: "Augmented reality indoor navigation with voice feedback and accessibility-aware routing through terminals.",
      color: "from-blue-500 to-cyan-500",
      link: "/ar-navigation"
    },
    {
      icon: Leaf,
      title: "Eco Impact Tracker",
      description: "Monitor carbon footprint, track renewable energy use, and earn eco-points through sustainable travel choices.",
      color: "from-teal-500 to-green-500",
      link: "/eco-tracker"
    },
    {
      icon: Clock,
      title: "Digital Queue System",
      description: "Skip physical lines with digital tickets and real-time wait time predictions for all airport services.",
      color: "from-orange-500 to-red-500",
      link: "/queue-system"
    },
    {
      icon: MessageSquare,
      title: "Social Space",
      description: "Connect with fellow travelers, coordinate rideshares, share tips, and exchange lounge passes.",
      color: "from-pink-500 to-rose-500",
      link: "/social-space"
    },
    {
      icon: Users,
      title: "Family Travel Hub",
      description: "Coordinate group bookings, assign tasks, and access family-friendly maps with play areas and facilities.",
      color: "from-indigo-500 to-purple-500",
      link: "/family-hub"
    },
    {
      icon: Heart,
      title: "Flight Mood Visualizer",
      description: "Real-time airport mood visualization based on flight delays, weather, and passenger sentiment data.",
      color: "from-red-500 to-pink-500",
      link: "/flight-mood"
    }
  ];

  const stats = [
    { number: "100K+", label: "Active Users" },
    { number: "10+", label: "Service" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "AI Support" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with local image background */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${airplaneImage})` }}
      >
        {/* Overlay to darken image for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full animate-ping delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
                <span className="block">Aeroflow</span>
                <span className="block text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Smart Airport Suite
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
                Your complete digital companion featuring AI-powered lost & found, AR navigation, 
                virtual assistance, and comprehensive travel tools for stress-free airport experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link 
                to="/dashboard"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#023e8a] to-blue-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center">
                  <Zap className="mr-3 w-5 h-5" />
                  Launch Dashboard
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
              
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center">
                <Play className="mr-3 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
                  <div className="text-blue-200 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #023e8a 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#023e8a]/10 text-[#023e8a] text-sm font-semibold">
              ✨ Complete Feature Suite
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Everything You Need
              <span className="block bg-gradient-to-r from-[#023e8a] to-blue-600 bg-clip-text text-transparent">
                In One Platform
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From AI-powered assistance to smart lost & found, every feature is designed to make your airport experience seamless and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link 
                key={index}
                to={feature.link}
                className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-[#023e8a]/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#023e8a] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Arrow Icon */}
                  <div className="flex items-center text-[#023e8a] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#023e8a] to-blue-900">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-20 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-1000"></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
              Ready to Transform Your Travel?
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                <span className="block">Start Your</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Smart Journey
                </span>
                <span className="block">Today</span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
                Join thousands of smart travelers who've discovered stress-free airport navigation with our comprehensive suite of intelligent tools.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link 
                to="/dashboard"
                className="group relative px-10 py-5 bg-white text-[#023e8a] rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-white/25 transition-all duration-500 transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="relative flex items-center">
                  <Smartphone className="mr-3 w-6 h-6" />
                  Launch SkyMate
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
              
              <Link 
                to="/find-my-item"
                className="group px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-[#023e8a] transition-all duration-300 flex items-center"
              >
                <Search className="mr-3 w-6 h-6" />
                Try FindMyItem
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
