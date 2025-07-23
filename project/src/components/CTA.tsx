import React from 'react';
import { ArrowRight, Download, Globe, Sparkles, Zap } from 'lucide-react';

const CTA = () => {
  return (
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
            Transform Your Travel Experience Today
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
              <span className="block">Ready to</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionize
              </span>
              <span className="block">Your Journey?</span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
              Join thousands of smart travelers who've discovered stress-free airport navigation. 
              Experience the future of travel with AeroFlow's intelligent platform.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button className="group relative px-10 py-5 bg-white text-[#023e8a] rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-white/25 transition-all duration-500 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative flex items-center">
                <Download className="mr-3 w-6 h-6" />
                Download Mobile App
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
            
            <button className="group px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-[#023e8a] transition-all duration-300 flex items-center">
              <Globe className="mr-3 w-6 h-6" />
              Try Web Version
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-4xl font-black text-white mb-2">30 seconds</div>
                <div className="text-blue-200 font-medium">Average setup time</div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-4xl font-black text-white mb-2">Free forever</div>
                <div className="text-blue-200 font-medium">Core features included</div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-4xl font-black text-white mb-2">24/7 support</div>
                <div className="text-blue-200 font-medium">Always here to help</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;