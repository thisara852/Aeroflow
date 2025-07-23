import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Users, 
  QrCode, 
  Bell, 
  CheckCircle,
  AlertCircle,
  MapPin,
  Smartphone,
  Timer,
  TrendingUp,
  Calendar,
  Zap,
  Eye,
  Shield,
  ArrowRight,
  Ticket
} from 'lucide-react';

const QueueSystem = () => {
  const [selectedService, setSelectedService] = useState('');
  const [activeTickets, setActiveTickets] = useState([]);

  const services = [
    {
      id: 'check-in',
      name: 'Check-in Counter',
      location: 'Terminal 1 - Level 2',
      currentWait: 12,
      averageWait: 15,
      queueLength: 8,
      status: 'normal',
      icon: CheckCircle,
      description: 'Standard check-in and baggage drop'
    },
    {
      id: 'security',
      name: 'Security Checkpoint',
      location: 'Terminal 1 - Level 3',
      currentWait: 25,
      averageWait: 20,
      queueLength: 15,
      status: 'busy',
      icon: Shield,
      description: 'Security screening and document check'
    },
    {
      id: 'immigration',
      name: 'Immigration',
      location: 'Departure Hall',
      currentWait: 8,
      averageWait: 12,
      queueLength: 5,
      status: 'fast',
      icon: Eye,
      description: 'Passport control and visa verification'
    },
    {
      id: 'lost-found',
      name: 'Lost & Found',
      location: 'Terminal 1 - Ground Floor',
      currentWait: 5,
      averageWait: 8,
      queueLength: 2,
      status: 'fast',
      icon: MapPin,
      description: 'Report and claim lost items'
    },
    {
      id: 'customer-service',
      name: 'Customer Service',
      location: 'Terminal 1 - Level 2',
      currentWait: 18,
      averageWait: 22,
      queueLength: 12,
      status: 'normal',
      icon: Users,
      description: 'General inquiries and assistance'
    },
    {
      id: 'car-rental',
      name: 'Car Rental',
      location: 'Arrivals Hall',
      currentWait: 10,
      averageWait: 15,
      queueLength: 6,
      status: 'normal',
      icon: MapPin,
      description: 'Vehicle rental and returns'
    }
  ];

  const myTickets = [
    {
      id: 'TK001',
      service: 'Security Checkpoint',
      number: 'A047',
      currentServing: 'A042',
      estimatedWait: 15,
      status: 'waiting',
      joinedAt: '14:30',
      location: 'Terminal 1 - Level 3'
    },
    {
      id: 'TK002',
      service: 'Lost & Found',
      number: 'L003',
      currentServing: 'L002',
      estimatedWait: 3,
      status: 'next',
      joinedAt: '14:45',
      location: 'Terminal 1 - Ground Floor'
    }
  ];

  const queueStats = {
    totalServed: 1247,
    averageWaitReduction: 68,
    satisfactionRate: 94,
    activeQueues: 12
  };

  const getStatusColor = (status) => {
    const colors = {
      fast: 'bg-green-100 text-green-800 border-green-200',
      normal: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      busy: 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[status] || colors.normal;
  };

  const getStatusIcon = (status) => {
    const icons = {
      fast: '🟢',
      normal: '🟡',
      busy: '🔴'
    };
    return icons[status] || icons.normal;
  };

  const getTicketStatusColor = (status) => {
    const colors = {
      waiting: 'bg-blue-100 text-blue-800 border-blue-200',
      next: 'bg-green-100 text-green-800 border-green-200',
      called: 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return colors[status] || colors.waiting;
  };

  const joinQueue = (serviceId) => {
    const service = services.find(s => s.id === serviceId);
    const newTicket = {
      id: `TK${Date.now()}`,
      service: service.name,
      number: `${service.name.charAt(0)}${String(Math.floor(Math.random() * 100)).padStart(3, '0')}`,
      currentServing: `${service.name.charAt(0)}${String(Math.floor(Math.random() * 100) - 10).padStart(3, '0')}`,
      estimatedWait: service.currentWait,
      status: 'waiting',
      joinedAt: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
      location: service.location
    };
    setActiveTickets([...activeTickets, newTicket]);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 mb-2">Digital Queue System</h1>
          <p className="text-xl text-gray-600">Skip physical lines with smart digital tickets and real-time wait predictions</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{queueStats.totalServed}</div>
                <div className="text-sm text-gray-600">People Served Today</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{queueStats.averageWaitReduction}%</div>
                <div className="text-sm text-gray-600">Wait Time Reduced</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{queueStats.satisfactionRate}%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Timer className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{queueStats.activeQueues}</div>
                <div className="text-sm text-gray-600">Active Queues</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Available Services */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Services</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <div key={service.id} className="border border-gray-200 rounded-2xl p-6 hover:border-[#023e8a] hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#023e8a] to-blue-600 rounded-xl flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{service.name}</h3>
                          <p className="text-sm text-gray-600">{service.location}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(service.status)}`}>
                        {getStatusIcon(service.status)} {service.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-2xl font-bold text-gray-900">{service.currentWait}</div>
                        <div className="text-xs text-gray-600">Current Wait (min)</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-2xl font-bold text-gray-900">{service.queueLength}</div>
                        <div className="text-xs text-gray-600">People in Queue</div>
                      </div>
                    </div>
                    
                    <Link
                      to="/join-queue"
                      onClick={() => joinQueue(service.id)}
                      className="w-full inline-flex bg-gradient-to-r from-[#023e8a] to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 items-center justify-center space-x-2"
                    >
                      <Ticket className="w-5 h-5" />
                      <span>Join Queue</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">1. Select Service</h3>
                  <p className="text-sm text-gray-600">Choose the service you need from available options</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <QrCode className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">2. Get Digital Ticket</h3>
                  <p className="text-sm text-gray-600">Receive your queue number and QR code instantly</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Bell className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">3. Get Notified</h3>
                  <p className="text-sm text-gray-600">Receive real-time updates on your queue status</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">4. Get Served</h3>
                  <p className="text-sm text-gray-600">Present your QR code when your turn arrives</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - My Tickets */}
          <div className="space-y-6">
            {/* Active Tickets */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">My Active Tickets</h2>
              
              {myTickets.length === 0 && activeTickets.length === 0 ? (
                <div className="text-center py-8">
                  <Ticket className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No active tickets</p>
                  <p className="text-sm text-gray-500">Join a queue to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {[...myTickets, ...activeTickets].map((ticket) => (
                    <div key={ticket.id} className={`p-4 rounded-2xl border-2 ${getTicketStatusColor(ticket.status)}`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-bold text-gray-900">{ticket.service}</div>
                        <span className="text-2xl font-black">{ticket.number}</span>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Currently Serving:</span>
                          <span className="font-semibold">{ticket.currentServing}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Estimated Wait:</span>
                          <span className="font-semibold">{ticket.estimatedWait} min</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Joined At:</span>
                          <span className="font-semibold">{ticket.joinedAt}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                          <MapPin className="w-4 h-4" />
                          <span>{ticket.location}</span>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button className="flex-1 bg-[#023e8a] text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1">
                            <QrCode className="w-4 h-4" />
                            <span>Show QR</span>
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                            <Bell className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Queue Tips */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-6 h-6" />
                <h3 className="text-lg font-bold">Pro Tips</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p>Join queues remotely and explore the airport while waiting</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p>Enable notifications to get alerts when your turn is near</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p>Check wait times before heading to the service location</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p>Have your QR code ready when your number is called</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  <Eye className="w-5 h-5" />
                  <span>View All Queues</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  <Bell className="w-5 h-5" />
                  <span>Notification Settings</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  <Calendar className="w-5 h-5" />
                  <span>Queue History</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueSystem;
