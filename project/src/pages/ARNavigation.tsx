import React, { useState } from 'react';
import { 
  Camera, 
  Navigation, 
  MapPin, 
  Volume2, 
  VolumeX,
  Accessibility,
  Users,
  Coffee,
  Plane,
  ShoppingBag,
  Wifi,
  Car,
  Info,
  Zap,
  Eye,
  Smartphone,
  Compass
} from 'lucide-react';

const ARNavigation = () => {
  const [isARActive, setIsARActive] = useState(false);
  const [destination, setDestination] = useState('');
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [accessibilityMode, setAccessibilityMode] = useState(false);

  const destinations = [
    { id: 'gate-a12', name: 'Gate A12', category: 'Gates', distance: '5 min walk', icon: Plane },
    { id: 'security', name: 'Security Checkpoint', category: 'Security', distance: '3 min walk', icon: Eye },
    { id: 'coffee-shop', name: 'Starbucks Coffee', category: 'Food & Drink', distance: '2 min walk', icon: Coffee },
    { id: 'duty-free', name: 'Duty Free Shop', category: 'Shopping', distance: '4 min walk', icon: ShoppingBag },
    { id: 'wifi-zone', name: 'Free WiFi Zone', category: 'Services', distance: '1 min walk', icon: Wifi },
    { id: 'car-rental', name: 'Car Rental Desk', category: 'Transportation', distance: '7 min walk', icon: Car },
    { id: 'info-desk', name: 'Information Desk', category: 'Services', distance: '3 min walk', icon: Info },
    { id: 'restroom', name: 'Restrooms', category: 'Facilities', distance: '1 min walk', icon: Users }
  ];

  const features = [
    {
      icon: Camera,
      title: "Real-time AR Overlay",
      description: "See directional arrows and information overlaid on your camera view"
    },
    {
      icon: Volume2,
      title: "Voice Guidance",
      description: "Audio directions and landmark descriptions for hands-free navigation"
    },
    {
      icon: Accessibility,
      title: "Accessibility Support",
      description: "Elevator routes, wheelchair access, and visual impairment assistance"
    },
    {
      icon: Users,
      title: "Crowd Awareness",
      description: "Dynamic routing based on real-time crowd density and wait times"
    }
  ];

  const currentRoute = {
    destination: "Gate A12",
    steps: [
      { instruction: "Head straight for 50 meters", distance: "50m", landmark: "Pass the information desk on your right" },
      { instruction: "Turn left at the coffee shop", distance: "20m", landmark: "Starbucks will be on your left" },
      { instruction: "Continue straight through security", distance: "100m", landmark: "Show your boarding pass" },
      { instruction: "Take escalator to upper level", distance: "30m", landmark: "Follow signs for Gates A10-A15" },
      { instruction: "Gate A12 will be on your right", distance: "40m", landmark: "Look for the blue seating area" }
    ],
    totalDistance: "240m",
    estimatedTime: "5 minutes"
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 mb-2">AR Navigation</h1>
          <p className="text-xl text-gray-600">Augmented reality indoor navigation with intelligent routing and accessibility features</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - AR Camera View */}
          <div className="lg:col-span-2 space-y-6">
            {/* AR Camera Interface */}
            <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800 relative">
              <div className="aspect-video relative">
                {isARActive ? (
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
                    {/* Simulated AR View */}
                    <div className="absolute inset-0 bg-black/20"></div>
                    
                    {/* AR Overlay Elements */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#023e8a] to-blue-600 rounded-xl flex items-center justify-center">
                          <Navigation className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">Continue Straight</div>
                          <div className="text-sm text-gray-600">50 meters to Gate A12</div>
                        </div>
                      </div>
                    </div>

                    {/* Direction Arrow */}
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <Navigation className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Landmark Indicators */}
                    <div className="absolute bottom-20 left-10">
                      <div className="bg-blue-500/80 backdrop-blur-sm rounded-xl p-3 text-white">
                        <Coffee className="w-6 h-6 mb-1" />
                        <div className="text-xs font-semibold">Starbucks</div>
                      </div>
                    </div>

                    <div className="absolute bottom-32 right-16">
                      <div className="bg-purple-500/80 backdrop-blur-sm rounded-xl p-3 text-white">
                        <Info className="w-6 h-6 mb-1" />
                        <div className="text-xs font-semibold">Info Desk</div>
                      </div>
                    </div>

                    {/* Distance Indicator */}
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                      <div className="text-2xl font-bold text-gray-900">240m</div>
                      <div className="text-sm text-gray-600">5 min walk</div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <div className="text-xl font-semibold mb-2">AR Camera Ready</div>
                      <div className="text-gray-400">Tap "Start AR Navigation" to begin</div>
                    </div>
                  </div>
                )}
              </div>

              {/* AR Controls */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setVoiceEnabled(!voiceEnabled)}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      voiceEnabled 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {voiceEnabled ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
                  </button>
                  
                  <button 
                    onClick={() => setAccessibilityMode(!accessibilityMode)}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      accessibilityMode 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Accessibility className="w-6 h-6" />
                  </button>
                </div>

                <button 
                  onClick={() => setIsARActive(!isARActive)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isARActive 
                      ? 'bg-red-500 text-white hover:bg-red-600' 
                      : 'bg-gradient-to-r from-[#023e8a] to-blue-600 text-white hover:shadow-lg'
                  }`}
                >
                  {isARActive ? 'Stop AR' : 'Start AR Navigation'}
                </button>
              </div>
            </div>

            {/* Current Route Info */}
            {isARActive && (
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Route to {currentRoute.destination}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{currentRoute.totalDistance}</span>
                    <span>•</span>
                    <span>{currentRoute.estimatedTime}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {currentRoute.steps.map((step, index) => (
                    <div key={index} className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 ${
                      index === 0 ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{step.instruction}</div>
                        <div className="text-sm text-gray-600 mt-1">{step.landmark}</div>
                        <div className="text-xs text-blue-600 mt-1">{step.distance}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#023e8a] to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Destination Selector */}
          <div className="space-y-6">
            {/* Quick Destinations */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Where do you want to go?</h3>
              
              <div className="space-y-3">
                {destinations.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => setDestination(dest.id)}
                    className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                      destination === dest.id
                        ? 'bg-[#023e8a] text-white'
                        : 'hover:bg-gray-100 text-gray-700 border border-gray-200'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      destination === dest.id
                        ? 'bg-white/20'
                        : 'bg-gray-100'
                    }`}>
                      <dest.icon className={`w-5 h-5 ${
                        destination === dest.id ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold">{dest.name}</div>
                      <div className={`text-sm ${
                        destination === dest.id ? 'text-blue-200' : 'text-gray-500'
                      }`}>
                        {dest.distance}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Settings */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Navigation Settings</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">Voice Guidance</div>
                    <div className="text-sm text-gray-600">Audio directions and announcements</div>
                  </div>
                  <button 
                    onClick={() => setVoiceEnabled(!voiceEnabled)}
                    className={`w-12 h-6 rounded-full transition-all duration-300 ${
                      voiceEnabled ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                      voiceEnabled ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">Accessibility Mode</div>
                    <div className="text-sm text-gray-600">Elevator routes and barrier-free paths</div>
                  </div>
                  <button 
                    onClick={() => setAccessibilityMode(!accessibilityMode)}
                    className={`w-12 h-6 rounded-full transition-all duration-300 ${
                      accessibilityMode ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                      accessibilityMode ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">AR Navigation Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Accuracy Rate</span>
                  <span className="font-bold">99.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Average Time Saved</span>
                  <span className="font-bold">8 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Supported Languages</span>
                  <span className="font-bold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Active Users</span>
                  <span className="font-bold">2.5K+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARNavigation;