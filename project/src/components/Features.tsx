import React from 'react';
import { 
  Brain, 
  MapPin, 
  Search, 
  Clock, 
  Users, 
  Leaf,
  Smartphone,
  Shield,
  ArrowUpRight
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Assistant",
      description: "Get personalized recommendations and intelligent travel guidance tailored to your journey.",
      color: "from-purple-500 to-pink-500",
      delay: "0"
    },
    {
      icon: MapPin,
      title: "AR Navigation",
      description: "Never get lost with augmented reality directions through complex terminals.",
      color: "from-blue-500 to-cyan-500",
      delay: "100"
    },
    {
      icon: Search,
      title: "Smart Lost & Found",
      description: "AI-driven system that reunites you with belongings faster than ever.",
      color: "from-green-500 to-emerald-500",
      delay: "200"
    },
    {
      icon: Clock,
      title: "Queue Management",
      description: "Skip lines with digital tickets and real-time wait time predictions.",
      color: "from-orange-500 to-red-500",
      delay: "300"
    },
    {
      icon: Users,
      title: "Family Travel Hub",
      description: "Coordinate with family members and share locations seamlessly.",
      color: "from-pink-500 to-rose-500",
      delay: "400"
    },
    {
      icon: Leaf,
      title: "Eco Dashboard",
      description: "Track your carbon footprint and discover sustainable travel options.",
      color: "from-teal-500 to-green-500",
      delay: "500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Seamless experience across all devices with offline capabilities.",
      color: "from-indigo-500 to-purple-500",
      delay: "600"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Enterprise-grade security with transparent privacy controls.",
      color: "from-red-500 to-pink-500",
      delay: "700"
    }
  ];

  return (
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
            ✨ Intelligent Features
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            Built for
            <span className="block bg-gradient-to-r from-[#023e8a] to-blue-600 bg-clip-text text-transparent">
              Modern Travelers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every feature is designed to reduce stress, save time, and make your airport experience genuinely enjoyable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-[#023e8a]/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${feature.delay}ms` }}
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
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;