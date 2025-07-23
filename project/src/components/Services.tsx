import React from 'react';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Real-Time Flight Intelligence",
      description: "Our AI doesn't just track flights—it predicts disruptions, suggests alternatives, and keeps you ahead of delays before they impact your journey.",
      image: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Predictive delay alerts", "Alternative route suggestions", "Weather impact analysis", "Gate optimization"],
      badge: "AI-Powered"
    },
    {
      title: "Immersive AR Navigation",
      description: "Transform complex terminals into intuitive pathways with our cutting-edge augmented reality system that adapts to crowds and accessibility needs.",
      image: "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["3D turn-by-turn directions", "Accessibility-aware routing", "Crowd-based optimization", "Landmark recognition"],
      badge: "AR Technology"
    },
    {
      title: "Intelligent Lost & Found",
      description: "Revolutionary AI system that analyzes thousands of items daily, using computer vision and smart matching to reunite travelers with belongings instantly.",
      image: "https://images.pexels.com/photos/1906655/pexels-photo-1906655.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Computer vision matching", "Instant photo recognition", "Automated claim processing", "Real-time notifications"],
      badge: "Smart Recovery"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#023e8a]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#023e8a]/10 to-blue-500/10 text-[#023e8a] text-sm font-semibold">
            <Sparkles className="w-4 h-4 mr-2" />
            Premium Services
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            Services That
            <span className="block bg-gradient-to-r from-[#023e8a] to-blue-600 bg-clip-text text-transparent">
              Anticipate Your Needs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just respond to problems—we prevent them. Our intelligent services adapt to your unique travel patterns and preferences.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#023e8a] to-blue-600 text-white text-sm font-semibold">
                    {service.badge}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100">
                      <CheckCircle className="w-5 h-5 text-[#023e8a] flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023e8a] to-blue-600 text-white rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Explore This Service
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#023e8a]/20 to-blue-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#023e8a]/40 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;