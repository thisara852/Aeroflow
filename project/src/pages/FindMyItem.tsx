import React, { useState } from 'react';
import { 
  Search, 
  Camera, 
  MapPin, 
  Clock, 
  Filter, 
  Upload,
  CheckCircle,
  AlertCircle,
  Eye,
  MessageSquare,
  QrCode,
  Bell,
  Globe,
  Shield,
  Zap,
  Users,
  Calendar,
  Package
} from 'lucide-react';

const FindMyItem = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Items', count: 156 },
    { id: 'electronics', name: 'Electronics', count: 45 },
    { id: 'clothing', name: 'Clothing', count: 32 },
    { id: 'bags', name: 'Bags & Luggage', count: 28 },
    { id: 'documents', name: 'Documents', count: 18 },
    { id: 'jewelry', name: 'Jewelry', count: 12 },
    { id: 'other', name: 'Other', count: 21 }
  ];

  const statuses = [
    { id: 'all', name: 'All Status', color: 'gray' },
    { id: 'received', name: 'Received', color: 'blue' },
    { id: 'review', name: 'In Review', color: 'yellow' },
    { id: 'ready', name: 'Ready for Pickup', color: 'green' },
    { id: 'closed', name: 'Closed', color: 'gray' }
  ];

  const lostItems = [
    {
      id: 'LF001',
      title: 'iPhone 14 Pro - Space Black',
      description: 'Lost near Gate A12, has a blue case with initials "JS"',
      category: 'Electronics',
      location: 'Terminal 1 - Gate A12',
      date: '2025-01-15',
      time: '14:30',
      status: 'ready',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
      confidence: 95
    },
    {
      id: 'LF002',
      title: 'Black Leather Wallet',
      description: 'Contains credit cards and driver license, lost in security area',
      category: 'Personal Items',
      location: 'Security Checkpoint B',
      date: '2025-01-15',
      time: '12:15',
      status: 'review',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
      confidence: 88
    },
    {
      id: 'LF003',
      title: 'Blue Denim Jacket',
      description: 'Size M, has airline pin on left pocket',
      category: 'Clothing',
      location: 'Food Court Area',
      date: '2025-01-14',
      time: '18:45',
      status: 'received',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
      confidence: 76
    },
    {
      id: 'LF004',
      title: 'Silver MacBook Air',
      description: 'Has stickers on the back, charger included',
      category: 'Electronics',
      location: 'Departure Lounge C',
      date: '2025-01-14',
      time: '16:20',
      status: 'ready',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
      confidence: 92
    }
  ];

  const myReports = [
    {
      id: 'MR001',
      title: 'Lost Passport',
      status: 'review',
      date: '2025-01-15',
      location: 'Immigration Area',
      priority: 'high'
    },
    {
      id: 'MR002',
      title: 'Wireless Headphones',
      status: 'ready',
      date: '2025-01-14',
      location: 'Gate B7',
      priority: 'medium'
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      received: 'bg-blue-100 text-blue-800 border-blue-200',
      review: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      ready: 'bg-green-100 text-green-800 border-green-200',
      closed: 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return colors[status] || colors.received;
  };

  const getStatusIcon = (status) => {
    const icons = {
      received: Clock,
      review: Eye,
      ready: CheckCircle,
      closed: AlertCircle
    };
    const Icon = icons[status] || Clock;
    return <Icon className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 mb-2">FindMyItem</h1>
          <p className="text-xl text-gray-600">AI-powered smart lost & found system with instant matching and recovery</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">156</div>
                <div className="text-sm text-gray-600">Items Found</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">89%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">2.5h</div>
                <div className="text-sm text-gray-600">Avg Recovery</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">AI Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Report Lost Item */}
            <div className="bg-gradient-to-br from-[#023e8a] to-blue-600 rounded-3xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Lost Something?</h3>
              <p className="text-blue-100 mb-6">Report your lost item with AI assistance for faster recovery</p>
              <button className="w-full bg-white text-[#023e8a] py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Upload className="w-5 h-5" />
                <span>Report Lost Item</span>
              </button>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-[#023e8a] text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      selectedCategory === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* My Reports */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">My Reports</h3>
              <div className="space-y-3">
                {myReports.map((report) => (
                  <div key={report.id} className="p-4 border border-gray-200 rounded-xl hover:border-[#023e8a] transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">{report.title}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(report.status)}`}>
                        {report.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>{report.location}</div>
                      <div>{report.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and Filters */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Describe your lost item... 'black iPhone', 'blue jacket', etc."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#023e8a] focus:border-transparent"
                  />
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    <Camera className="w-5 h-5" />
                    <span>Photo Search</span>
                  </button>
                  
                  <button 
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center space-x-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    <Filter className="w-5 h-5" />
                    <span>Filters</span>
                  </button>
                </div>
              </div>

              {showFilters && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                      <select 
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#023e8a]"
                      >
                        {statuses.map((status) => (
                          <option key={status.id} value={status.id}>{status.name}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                      <input 
                        type="date" 
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#023e8a]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <select className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#023e8a]">
                        <option>All Locations</option>
                        <option>Terminal 1</option>
                        <option>Terminal 2</option>
                        <option>Security Area</option>
                        <option>Gates</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Found Items Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {lostItems.map((item) => (
                <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(item.status)}`}>
                        {getStatusIcon(item.status)}
                        <span className="ml-1 capitalize">{item.status.replace('-', ' ')}</span>
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                        {item.confidence}% match
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      <span className="text-sm text-gray-500">#{item.id}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{item.date} at {item.time}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-gradient-to-r from-[#023e8a] to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Claim Item</span>
                      </button>
                      <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300">
                        <MessageSquare className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features Banner */}
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Advanced AI Features</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Camera className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-semibold">Image Recognition</div>
                  <div className="text-sm opacity-90">AI-powered visual matching</div>
                </div>
                <div className="text-center">
                  <QrCode className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-semibold">Smart Lockers</div>
                  <div className="text-sm opacity-90">24/7 secure pickup</div>
                </div>
                <div className="text-center">
                  <Bell className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-semibold">Real-time Alerts</div>
                  <div className="text-sm opacity-90">Instant notifications</div>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-semibold">Multilingual</div>
                  <div className="text-sm opacity-90">Support in 12 languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindMyItem;