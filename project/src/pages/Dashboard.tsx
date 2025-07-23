import React, { useState } from 'react';
import { 
  Plane, MapPin, Clock, Bell, Search, Mic, Heart,
  CheckCircle, AlertTriangle, Calendar, Users, Wifi,
  Coffee, Car, ShoppingBag, Utensils, Info
} from 'lucide-react';

const Dashboard = () => {
  const [isListening, setIsListening] = useState(false);

  const flightInfo = {
    departure: {
      flight: "SL 315",
      from: "Colombo (CMB)",
      to: "Dubai (DXB)",
      gate: "A12",
      terminal: "Terminal 1",
      time: "14:30",
      status: "On Time",
      boarding: "14:00"
    }
  };

  const checklist = [
    { item: "Passport", completed: true, required: true },
    { item: "Boarding Pass", completed: true, required: true },
    { item: "Visa Documents", completed: false, required: true },
    { item: "COVID-19 Certificate", completed: true, required: false },
    { item: "Travel Insurance", completed: false, required: false },
    { item: "Hotel Confirmation", completed: true, required: false }
  ];

  const services = [
    { icon: Coffee, name: "Cafés & Restaurants", count: 12, distance: "2 min walk" },
    { icon: ShoppingBag, name: "Duty Free Shops", count: 8, distance: "3 min walk" },
    { icon: Wifi, name: "Free WiFi Zones", count: 15, distance: "Available here" },
    { icon: Car, name: "Car Rental", count: 6, distance: "5 min walk" },
    { icon: Users, name: "Lounges", count: 4, distance: "7 min walk" },
    { icon: Info, name: "Information Desk", count: 3, distance: "1 min walk" }
  ];

  const emotionalTips = [
    "Take deep breaths - you have plenty of time before your flight",
    "Consider visiting the meditation room on Level 2 for relaxation",
    "Grab a coffee and enjoy the airport's art gallery while waiting",
    "Your gate is easily accessible - no need to rush"
  ];

  return (
    <div
    >
      <div className="min-h-screen bg-white/80 backdrop-blur-md pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-black text-gray-900 mb-2">Welcome back, Thisara!</h1>
            <p className="text-xl text-gray-600">Your personalized airport companion is ready to assist you.</p>
          </div>

          {/* Voice Search */}
          <div className="mb-8">
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Ask me anything... 'Where is gate A12?' or 'Find nearest coffee shop'"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#023e8a] focus:border-transparent text-lg"
                  />
                </div>
                <button 
                  onClick={() => setIsListening(!isListening)}
                  className={`p-4 rounded-2xl transition-all duration-300 ${
                    isListening 
                      ? 'bg-red-500 text-white animate-pulse' 
                      : 'bg-[#023e8a] text-white hover:bg-blue-700'
                  }`}
                >
                  <Mic className="w-6 h-6" />
                </button>
              </div>
              {isListening && (
                <div className="mt-4 text-center text-red-600 font-medium">
                  🎤 Listening... Speak now
                </div>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Flight Information */}
             

              {/* Travel Document Checklist */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Travel Document Checklist</h2>

                <div className="space-y-4">
                  {checklist.map((item, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 ${
                      item.completed 
                        ? 'border-green-200 bg-green-50' 
                        : item.required 
                          ? 'border-red-200 bg-red-50' 
                          : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex items-center space-x-3">
                        {item.completed ? (
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        ) : (
                          <AlertTriangle className={`w-6 h-6 ${item.required ? 'text-red-600' : 'text-gray-400'}`} />
                        )}
                        <div>
                          <div className="font-semibold">{item.item}</div>
                          <div className={`text-sm ${item.required ? 'text-red-600' : 'text-gray-500'}`}>
                            {item.required ? 'Required' : 'Optional'}
                          </div>
                        </div>
                      </div>

                      {!item.completed && (
                        <button className="px-4 py-2 bg-[#023e8a] text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                          Mark Complete
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Airport Services */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Nearby Services</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-xl border border-gray-200 hover:border-[#023e8a] hover:shadow-md transition-all duration-300 cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#023e8a] to-blue-600 rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{service.name}</div>
                        <div className="text-sm text-gray-600">{service.count} available • {service.distance}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Emotional Support */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
                <div className="flex items-center space-x-3 mb-6">
                  <Heart className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Stress Relief</h2>
                </div>

                <div className="space-y-4">
                  {emotionalTips.map((tip, index) => (
                    <div key={index} className="p-4 bg-white/60 rounded-xl border border-purple-200">
                      <p className="text-gray-700 leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  More Relaxation Tips
                </button>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>

                <div className="space-y-4">
                  <button className="w-full flex items-center space-x-3 p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    <Search className="w-5 h-5" />
                    <span>Find Lost Item</span>
                  </button>

                  <button className="w-full flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                    <span>AR Navigation</span>
                  </button>

                  <button className="w-full flex items-center space-x-3 p-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    <Clock className="w-5 h-5" />
                    <span>Join Queue</span>
                  </button>

                  <button className="w-full flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    <Users className="w-5 h-5" />
                    <span>Social Space</span>
                  </button>
                </div>
              </div>

              {/* Notifications */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <Bell className="w-6 h-6 text-[#023e8a]" />
                  <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <div className="font-semibold text-blue-900">Gate Change Alert</div>
                    <div className="text-sm text-blue-700 mt-1">Your gate has been updated to A12. No action needed.</div>
                    <div className="text-xs text-blue-600 mt-2">2 minutes ago</div>
                  </div>

                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="font-semibold text-green-900">Boarding Soon</div>
                    <div className="text-sm text-green-700 mt-1">Boarding starts in 30 minutes. Head to gate when ready.</div>
                    <div className="text-xs text-green-600 mt-2">5 minutes ago</div>
                  </div>

                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl">
                    <div className="font-semibold text-purple-900">Eco Achievement</div>
                    <div className="text-sm text-purple-700 mt-1">You've earned 50 eco-points for choosing sustainable options!</div>
                    <div className="text-xs text-purple-600 mt-2">1 hour ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Dashboard;
