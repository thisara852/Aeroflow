import React, { useState } from 'react';
import { 
  Users, 
  MapPin, 
  CheckCircle, 
  Clock, 
  Plane, 
  Baby,
  Utensils,
  Gamepad2,
  Wifi,
  Car,
  Plus,
  Edit,
  Bell,
  Calendar,
  Navigation,
  Heart,
  Shield,
  Star,
  Camera,
  Share2
} from 'lucide-react';

const FamilyHub = () => {
  const [selectedMember, setSelectedMember] = useState('all');

  const familyMembers = [
    {
      id: 'dad',
      name: 'Thisara (You)',
      role: 'Trip Organizer',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'Security Checkpoint',
      flight: 'SL 315',
      tasks: 3,
      completed: 2
    },
    {
      id: 'mom',
      name: 'Priya',
      role: 'Co-organizer',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'Duty Free Shopping',
      flight: 'SL 315',
      tasks: 2,
      completed: 2
    },
    {
      id: 'child1',
      name: 'Arjun (12)',
      role: 'Young Traveler',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'Play Area',
      flight: 'SL 315',
      tasks: 1,
      completed: 1
    },
    {
      id: 'child2',
      name: 'Maya (8)',
      role: 'Young Traveler',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'Play Area',
      flight: 'SL 315',
      tasks: 1,
      completed: 0
    }
  ];

  const familyTasks = [
    {
      id: 1,
      task: 'Check-in and get boarding passes',
      assignedTo: 'Thisara',
      status: 'completed',
      priority: 'high',
      deadline: '13:00',
      location: 'Check-in Counter A'
    },
    {
      id: 2,
      task: 'Collect duty-free pre-orders',
      assignedTo: 'Priya',
      status: 'completed',
      priority: 'medium',
      deadline: '14:30',
      location: 'Duty Free Shop'
    },
    {
      id: 3,
      task: 'Security screening for family',
      assignedTo: 'Thisara',
      status: 'in-progress',
      priority: 'high',
      deadline: '15:00',
      location: 'Security Checkpoint B'
    },
    {
      id: 4,
      task: 'Lunch at family restaurant',
      assignedTo: 'All',
      status: 'pending',
      priority: 'medium',
      deadline: '15:30',
      location: 'Food Court Level 2'
    },
    {
      id: 5,
      task: 'Kids activity time',
      assignedTo: 'Arjun',
      status: 'completed',
      priority: 'low',
      deadline: '16:00',
      location: 'Kids Play Area'
    },
    {
      id: 6,
      task: 'Final boarding call preparation',
      assignedTo: 'Maya',
      status: 'pending',
      priority: 'high',
      deadline: '16:30',
      location: 'Gate A12'
    }
  ];

  const familyFacilities = [
    {
      category: 'Baby Care',
      icon: Baby,
      facilities: [
        { name: 'Baby Changing Rooms', location: 'All Terminals', distance: '2 min walk' },
        { name: 'Nursing Rooms', location: 'Terminal 1 & 2', distance: '5 min walk' },
        { name: 'Baby Food Heating', location: 'Food Courts', distance: '3 min walk' }
      ]
    },
    {
      category: 'Kids Entertainment',
      icon: Gamepad2,
      facilities: [
        { name: 'Interactive Play Area', location: 'Terminal 1 Level 2', distance: '4 min walk' },
        { name: 'Gaming Zone', location: 'Terminal 2', distance: '8 min walk' },
        { name: 'Kids Movie Theater', location: 'Terminal 1', distance: '6 min walk' }
      ]
    },
    {
      category: 'Family Dining',
      icon: Utensils,
      facilities: [
        { name: 'Family Restaurant', location: 'Food Court', distance: '3 min walk' },
        { name: 'Kids Menu Available', location: 'Multiple locations', distance: 'Various' },
        { name: 'High Chairs Available', location: 'All restaurants', distance: 'Various' }
      ]
    },
    {
      category: 'Comfort & Rest',
      icon: Heart,
      facilities: [
        { name: 'Family Rest Areas', location: 'All Terminals', distance: '2 min walk' },
        { name: 'Quiet Zones', location: 'Terminal 1 & 2', distance: '5 min walk' },
        { name: 'Family Lounges', location: 'Premium areas', distance: '7 min walk' }
      ]
    }
  ];

  const getTaskStatusColor = (status) => {
    const colors = {
      completed: 'bg-green-100 text-green-800 border-green-200',
      'in-progress': 'bg-blue-100 text-blue-800 border-blue-200',
      pending: 'bg-orange-100 text-orange-800 border-orange-200'
    };
    return colors[status] || colors.pending;
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'text-red-600',
      medium: 'text-yellow-600',
      low: 'text-green-600'
    };
    return colors[priority] || colors.medium;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 mb-2">Family Travel Hub</h1>
          <p className="text-xl text-gray-600">Coordinate your family journey with smart task management and family-friendly navigation</p>
        </div>

        {/* Family Overview */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Family Status</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Plane className="w-4 h-4" />
              <span>Flight SL 315 • Gate A12 • Boarding: 16:00</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {familyMembers.map((member) => (
              <div key={member.id} className="relative p-6 border border-gray-200 rounded-2xl hover:border-[#023e8a] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <img 
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="w-4 h-4 text-[#023e8a]" />
                    <span className="text-gray-700">{member.status}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">{member.completed}/{member.tasks} tasks done</span>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[#023e8a] to-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(member.completed / member.tasks) * 100}%` }}
                  ></div>
                </div>
                
                <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-1">
                  <Navigation className="w-4 h-4" />
                  <span>Locate</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Tasks */}
          <div className="lg:col-span-2 space-y-6">
            {/* Task Management */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Family Tasks</h2>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#023e8a] to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  <Plus className="w-4 h-4" />
                  <span>Add Task</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {familyTasks.map((task) => (
                  <div key={task.id} className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                    task.status === 'completed' ? 'border-green-200 bg-green-50' :
                    task.status === 'in-progress' ? 'border-blue-200 bg-blue-50' :
                    'border-orange-200 bg-orange-50'
                  }`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-bold text-gray-900">{task.task}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTaskStatusColor(task.status)}`}>
                            {task.status.replace('-', ' ')}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{task.assignedTo}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>Due: {task.deadline}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{task.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-semibold ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    {task.status !== 'completed' && (
                      <div className="flex space-x-3">
                        <button className="flex-1 bg-[#023e8a] text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                          {task.status === 'in-progress' ? 'Mark Complete' : 'Start Task'}
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                          <Navigation className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Family-Friendly Map */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Family-Friendly Facilities</h2>
              
              <div className="space-y-6">
                {familyFacilities.map((category, index) => (
                  <div key={index} className="border border-gray-200 rounded-2xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#023e8a] to-blue-600 rounded-xl flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.facilities.map((facility, facilityIndex) => (
                        <div key={facilityIndex} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                          <h4 className="font-semibold text-gray-900 mb-2">{facility.name}</h4>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3" />
                              <span>{facility.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Navigation className="w-3 h-3" />
                              <span>{facility.distance}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  <Users className="w-5 h-5" />
                  <span>Locate All Members</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  <Bell className="w-5 h-5" />
                  <span>Send Group Alert</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  <Camera className="w-5 h-5" />
                  <span>Family Photo Spots</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  <Utensils className="w-5 h-5" />
                  <span>Find Family Dining</span>
                </button>
              </div>
            </div>

            {/* Family Timeline */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Today's Timeline</h3>
              
              <div className="space-y-4">
                {[
                  { time: '13:00', event: 'Check-in Complete', status: 'completed' },
                  { time: '14:30', event: 'Duty Free Collection', status: 'completed' },
                  { time: '15:00', event: 'Security Screening', status: 'current' },
                  { time: '15:30', event: 'Family Lunch', status: 'upcoming' },
                  { time: '16:00', event: 'Kids Play Time', status: 'upcoming' },
                  { time: '16:30', event: 'Boarding Preparation', status: 'upcoming' }
                ].map((item, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-3 rounded-xl ${
                    item.status === 'completed' ? 'bg-green-50' :
                    item.status === 'current' ? 'bg-blue-50' :
                    'bg-gray-50'
                  }`}>
                    <div className={`w-3 h-3 rounded-full ${
                      item.status === 'completed' ? 'bg-green-500' :
                      item.status === 'current' ? 'bg-blue-500' :
                      'bg-gray-300'
                    }`}></div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{item.time}</div>
                      <div className="text-sm text-gray-600">{item.event}</div>
                    </div>
                    {item.status === 'completed' && <CheckCircle className="w-5 h-5 text-green-500" />}
                    {item.status === 'current' && <Clock className="w-5 h-5 text-blue-500" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-gradient-to-br from-red-600 to-pink-600 rounded-3xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6" />
                <h3 className="text-lg font-bold">Emergency & Safety</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span>Airport Security</span>
                  <span className="font-bold">+971-4-224-5555</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Medical Emergency</span>
                  <span className="font-bold">+971-4-224-5566</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Lost Child Alert</span>
                  <span className="font-bold">+971-4-224-5577</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Family Assistance</span>
                  <span className="font-bold">+971-4-224-5588</span>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-white text-red-600 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Emergency Alert
              </button>
            </div>

            {/* Family Tips */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-6 h-6 text-yellow-500" />
                <h3 className="text-lg font-bold text-gray-900">Family Travel Tips</h3>
              </div>
              
              <div className="space-y-3 text-sm text-gray-700">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p><strong>Keep kids engaged:</strong> Use the interactive play areas during long waits</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p><strong>Stay hydrated:</strong> Free water refill stations available throughout terminals</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p><strong>Document check:</strong> Keep all family passports and documents together</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p><strong>Meeting point:</strong> Establish a family meeting point in case of separation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyHub;