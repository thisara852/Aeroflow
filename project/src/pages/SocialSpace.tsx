import React, { useState } from 'react';
import { 
  MessageSquare, 
  Users, 
  Car, 
  Coffee, 
  Star, 
  MapPin, 
  Clock, 
  Send,
  Heart,
  Share2,
  MoreHorizontal,
  Plus,
  Filter,
  Search,
  Globe,
  Shield,
  Zap,
  Gift,
  Plane,
  Camera
} from 'lucide-react';

const SocialSpace = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [newMessage, setNewMessage] = useState('');

  const chatMessages = [
    {
      id: 1,
      user: "Sarah Chen",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
      message: "Anyone heading to downtown Dubai? Looking to share a taxi from DXB!",
      time: "2 min ago",
      likes: 3,
      replies: 2,
      type: "rideshare"
    },
    {
      id: 2,
      user: "Marcus Johnson",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100",
      message: "Pro tip: The coffee shop on Level 3 has the best wifi and charging stations. Perfect for remote work!",
      time: "5 min ago",
      likes: 8,
      replies: 4,
      type: "tip"
    },
    {
      id: 3,
      user: "Emily Rodriguez",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100",
      message: "Flight delayed by 3 hours 😩 Anyone know good spots to relax in Terminal 1?",
      time: "8 min ago",
      likes: 2,
      replies: 6,
      type: "help"
    },
    {
      id: 4,
      user: "James Park",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
      message: "I have a Priority Pass lounge access that I won't use. Valid until 6 PM today. DM me!",
      time: "12 min ago",
      likes: 15,
      replies: 8,
      type: "exchange"
    },
    {
      id: 5,
      user: "Lisa Wang",
      avatar: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=100",
      message: "Just discovered the meditation room near Gate B7. So peaceful! Highly recommend for anxious flyers.",
      time: "15 min ago",
      likes: 12,
      replies: 3,
      type: "tip"
    }
  ];

  const rideshareRequests = [
    {
      id: 1,
      user: "Alex Thompson",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100",
      from: "Terminal 1",
      to: "Marina District",
      time: "16:30",
      seats: 2,
      cost: "$25",
      status: "active"
    },
    {
      id: 2,
      user: "Maria Garcia",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
      from: "Terminal 2",
      to: "Business Bay",
      time: "17:00",
      seats: 1,
      cost: "$20",
      status: "active"
    },
    {
      id: 3,
      user: "David Kim",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
      from: "Terminal 1",
      to: "Downtown",
      time: "18:15",
      seats: 3,
      cost: "$30",
      status: "filling"
    }
  ];

  const exchanges = [
    {
      id: 1,
      user: "Sophie Miller",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100",
      item: "Business Lounge Pass",
      description: "Emirates Business Lounge access, valid until 8 PM",
      value: "Free",
      category: "lounge",
      time: "10 min ago"
    },
    {
      id: 2,
      user: "Ryan Cooper",
      avatar: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=100",
      item: "Duty Free Voucher",
      description: "20% off voucher for electronics, expires today",
      value: "Trade",
      category: "shopping",
      time: "25 min ago"
    },
    {
      id: 3,
      user: "Anna Lee",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
      item: "Fast Track Security",
      description: "Skip the line pass for security checkpoint",
      value: "$15",
      category: "service",
      time: "1 hour ago"
    }
  ];

  const getMessageTypeColor = (type) => {
    const colors = {
      rideshare: 'bg-blue-100 text-blue-800',
      tip: 'bg-green-100 text-green-800',
      help: 'bg-orange-100 text-orange-800',
      exchange: 'bg-purple-100 text-purple-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const getMessageTypeIcon = (type) => {
    const icons = {
      rideshare: Car,
      tip: Star,
      help: MessageSquare,
      exchange: Gift
    };
    const Icon = icons[type] || MessageSquare;
    return <Icon className="w-3 h-3" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 mb-2">Social Space</h1>
          <p className="text-xl text-gray-600">Connect with fellow travelers, share tips, coordinate rides, and exchange services</p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex space-x-2 bg-white rounded-2xl p-2 shadow-lg border border-gray-100 w-fit">
            {[
              { id: 'chat', name: 'Live Chat', icon: MessageSquare },
              { id: 'rideshare', name: 'Rideshare', icon: Car },
              { id: 'exchange', name: 'Exchange', icon: Gift }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#023e8a] text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'chat' && (
              <div className="space-y-6">
                {/* Post New Message */}
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <img 
                      src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Your avatar"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <textarea 
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Share a tip, ask for help, or connect with fellow travelers..."
                        className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#023e8a] focus:border-transparent resize-none"
                        rows="3"
                      />
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex space-x-2">
                          <button className="flex items-center space-x-2 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
                            <Car className="w-4 h-4" />
                            <span>Rideshare</span>
                          </button>
                          <button className="flex items-center space-x-2 px-3 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors">
                            <Star className="w-4 h-4" />
                            <span>Tip</span>
                          </button>
                          <button className="flex items-center space-x-2 px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors">
                            <Gift className="w-4 h-4" />
                            <span>Exchange</span>
                          </button>
                        </div>
                        <button className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-[#023e8a] to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                          <Send className="w-4 h-4" />
                          <span>Post</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-4">
                  {chatMessages.map((message) => (
                    <div key={message.id} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <img 
                          src={message.avatar}
                          alt={message.user}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-bold text-gray-900">{message.user}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getMessageTypeColor(message.type)}`}>
                              {getMessageTypeIcon(message.type)}
                              <span className="capitalize">{message.type}</span>
                            </span>
                            <span className="text-sm text-gray-500">{message.time}</span>
                          </div>
                          <p className="text-gray-700 mb-4 leading-relaxed">{message.message}</p>
                          <div className="flex items-center space-x-6">
                            <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                              <Heart className="w-5 h-5" />
                              <span className="text-sm">{message.likes}</span>
                            </button>
                            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                              <MessageSquare className="w-5 h-5" />
                              <span className="text-sm">{message.replies}</span>
                            </button>
                            <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                              <Share2 className="w-5 h-5" />
                              <span className="text-sm">Share</span>
                            </button>
                            <button className="text-gray-500 hover:text-gray-700 transition-colors">
                              <MoreHorizontal className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'rideshare' && (
              <div className="space-y-6">
                {/* Create Rideshare */}
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Create Rideshare Request</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                      <input type="text" placeholder="Terminal 1" className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#023e8a]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                      <input type="text" placeholder="Downtown Dubai" className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#023e8a]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Departure Time</label>
                      <input type="time" className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#023e8a]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Available Seats</label>
                      <select className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#023e8a]">
                        <option>1 seat</option>
                        <option>2 seats</option>
                        <option>3 seats</option>
                      </select>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-[#023e8a] to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Create Rideshare Request
                  </button>
                </div>

                {/* Available Rideshares */}
                <div className="space-y-4">
                  {rideshareRequests.map((request) => (
                    <div key={request.id} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={request.avatar}
                            alt={request.user}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-bold text-gray-900">{request.user}</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <MapPin className="w-4 h-4" />
                              <span>{request.from} → {request.to}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#023e8a]">{request.cost}</div>
                          <div className="text-sm text-gray-600">per person</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200">
                        <div className="text-center">
                          <Clock className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                          <div className="text-sm font-semibold">{request.time}</div>
                          <div className="text-xs text-gray-600">Departure</div>
                        </div>
                        <div className="text-center">
                          <Users className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                          <div className="text-sm font-semibold">{request.seats} seats</div>
                          <div className="text-xs text-gray-600">Available</div>
                        </div>
                        <div className="text-center">
                          <Car className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                          <div className={`text-sm font-semibold capitalize ${
                            request.status === 'active' ? 'text-green-600' : 'text-orange-600'
                          }`}>
                            {request.status}
                          </div>
                          <div className="text-xs text-gray-600">Status</div>
                        </div>
                      </div>
                      
                      <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                        Join Rideshare
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'exchange' && (
              <div className="space-y-6">
                {/* Create Exchange */}
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">List Item for Exchange</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Item Title</label>
                      <input type="text" placeholder="Business Lounge Pass" className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#023e8a]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea placeholder="Describe your item and any conditions..." className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#023e8a] resize-none" rows="3"></textarea>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                        <select className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#023e8a]">
                          <option>Lounge Access</option>
                          <option>Shopping Voucher</option>
                          <option>Service Pass</option>
                          <option>Food & Beverage</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Value/Price</label>
                        <input type="text" placeholder="Free, $20, or Trade" className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#023e8a]" />
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    List for Exchange
                  </button>
                </div>

                {/* Available Exchanges */}
                <div className="space-y-4">
                  {exchanges.map((exchange) => (
                    <div key={exchange.id} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <img 
                            src={exchange.avatar}
                            alt={exchange.user}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-bold text-gray-900">{exchange.user}</h3>
                              <span className="text-sm text-gray-500">{exchange.time}</span>
                            </div>
                            <h4 className="text-lg font-semibold text-[#023e8a] mb-2">{exchange.item}</h4>
                            <p className="text-gray-600 mb-3">{exchange.description}</p>
                            <div className="flex items-center space-x-4">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                exchange.category === 'lounge' ? 'bg-blue-100 text-blue-800' :
                                exchange.category === 'shopping' ? 'bg-green-100 text-green-800' :
                                'bg-purple-100 text-purple-800'
                              }`}>
                                {exchange.category}
                              </span>
                              <span className="text-lg font-bold text-gray-900">{exchange.value}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3 mt-4 pt-4 border-t border-gray-200">
                        <button className="flex-1 bg-gradient-to-r from-[#023e8a] to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                          Contact Seller
                        </button>
                        <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Online Users */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Active Travelers</h3>
              <div className="space-y-3">
                {[
                  { name: "Sarah Chen", status: "Terminal 1", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100" },
                  { name: "Marcus Johnson", status: "Gate A12", avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100" },
                  { name: "Emily Rodriguez", status: "Security", avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100" },
                  { name: "James Park", status: "Lounge", avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100" }
                ].map((user, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="relative">
                      <img 
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-600">{user.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6" />
                <h3 className="text-lg font-bold">Community Guidelines</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p>Be respectful and helpful to fellow travelers</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p>Verify rideshare details before committing</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p>Report inappropriate content or behavior</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p>Keep personal information secure</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Today's Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Users</span>
                  <span className="font-bold text-[#023e8a]">247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Messages Posted</span>
                  <span className="font-bold text-[#023e8a]">1,432</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Rideshares Created</span>
                  <span className="font-bold text-[#023e8a]">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Items Exchanged</span>
                  <span className="font-bold text-[#023e8a]">156</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSpace;