import React, { useState } from 'react';
import { 
  Leaf, 
  Zap, 
  Plane, 
  Car, 
  Recycle, 
  Award,
  TrendingUp,
  TrendingDown,
  Globe,
  Users,
  Target,
  Calendar,
  BarChart3,
  PieChart,
  Star,
  Trophy,
  Gift,
  ArrowRight
} from 'lucide-react';

const EcoTracker = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const ecoStats = {
    carbonFootprint: {
      current: 2.4,
      previous: 3.1,
      unit: 'tons CO₂',
      change: -22.6
    },
    ecoPoints: {
      current: 1250,
      previous: 980,
      unit: 'points',
      change: 27.6
    },
    renewableEnergy: {
      current: 78,
      previous: 65,
      unit: '% renewable',
      change: 20.0
    },
    offsetContribution: {
      current: 156,
      previous: 120,
      unit: 'kg CO₂ offset',
      change: 30.0
    }
  };

  const achievements = [
    { 
      id: 1, 
      title: "Carbon Neutral Traveler", 
      description: "Offset 100% of your flight emissions", 
      icon: Leaf, 
      earned: true, 
      points: 500,
      date: "2025-01-10"
    },
    { 
      id: 2, 
      title: "Renewable Energy Champion", 
      description: "Choose renewable energy options 10 times", 
      icon: Zap, 
      earned: true, 
      points: 300,
      date: "2025-01-08"
    },
    { 
      id: 3, 
      title: "Eco Transport Master", 
      description: "Use sustainable transport for 5 airport trips", 
      icon: Car, 
      earned: false, 
      points: 400,
      progress: 60
    },
    { 
      id: 4, 
      title: "Waste Warrior", 
      description: "Recycle 50 items at airport facilities", 
      icon: Recycle, 
      earned: false, 
      points: 250,
      progress: 80
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Sarah Chen", points: 2850, avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { rank: 2, name: "Marcus Johnson", points: 2640, avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { rank: 3, name: "You (Thisara)", points: 1250, avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { rank: 4, name: "Emily Rodriguez", points: 1180, avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100" },
    { rank: 5, name: "James Park", points: 1050, avatar: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=100" }
  ];

  const sustainableTips = [
    {
      category: "Transportation",
      tip: "Take the airport express train instead of a taxi to reduce emissions by 75%",
      impact: "Save 12kg CO₂",
      icon: Car
    },
    {
      category: "Energy",
      tip: "Use the solar charging stations in Terminal 2 for your devices",
      impact: "100% renewable energy",
      icon: Zap
    },
    {
      category: "Waste",
      tip: "Bring a reusable water bottle - refill stations available throughout the airport",
      impact: "Prevent 1 plastic bottle",
      icon: Recycle
    },
    {
      category: "Offset",
      tip: "Offset your flight emissions through our verified carbon offset program",
      impact: "Neutralize 2.4 tons CO₂",
      icon: Leaf
    }
  ];

  const rewards = [
    { name: "Free Coffee", points: 100, available: true, icon: Gift },
    { name: "Lounge Access", points: 500, available: true, icon: Star },
    { name: "Priority Boarding", points: 750, available: false, icon: Plane },
    { name: "Carbon Offset Voucher", points: 1000, available: true, icon: Leaf }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 mb-2">Eco Impact Tracker</h1>
          <p className="text-xl text-gray-600">Monitor your carbon footprint, earn eco-points, and contribute to sustainable travel</p>
        </div>

        {/* Period Selector */}
        <div className="mb-8">
          <div className="flex space-x-2 bg-white rounded-2xl p-2 shadow-lg border border-gray-100 w-fit">
            {['week', 'month', 'year'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 capitalize ${
                  selectedPeriod === period
                    ? 'bg-[#023e8a] text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {Object.entries(ecoStats).map(([key, stat]) => (
            <div key={key} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  key === 'carbonFootprint' ? 'bg-red-100' :
                  key === 'ecoPoints' ? 'bg-green-100' :
                  key === 'renewableEnergy' ? 'bg-yellow-100' :
                  'bg-blue-100'
                }`}>
                  {key === 'carbonFootprint' && <Plane className="w-6 h-6 text-red-600" />}
                  {key === 'ecoPoints' && <Star className="w-6 h-6 text-green-600" />}
                  {key === 'renewableEnergy' && <Zap className="w-6 h-6 text-yellow-600" />}
                  {key === 'offsetContribution' && <Leaf className="w-6 h-6 text-blue-600" />}
                </div>
                <div className={`flex items-center space-x-1 text-sm font-semibold ${
                  stat.change > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span>{Math.abs(stat.change)}%</span>
                </div>
              </div>
              <div className="text-3xl font-black text-gray-900 mb-1">{stat.current}</div>
              <div className="text-sm text-gray-600 capitalize">{stat.unit}</div>
              <div className="text-xs text-gray-500 mt-2">
                vs previous {selectedPeriod}: {stat.previous} {stat.unit}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Carbon Footprint Chart */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Carbon Footprint Trend</h2>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-gray-400" />
                  <PieChart className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              
              {/* Simulated Chart */}
              <div className="h-64 bg-gradient-to-t from-gray-50 to-white rounded-2xl border border-gray-200 flex items-end justify-center space-x-4 p-6">
                {[3.2, 2.8, 3.5, 2.1, 2.9, 2.4, 1.8].map((value, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div 
                      className="bg-gradient-to-t from-[#023e8a] to-blue-400 rounded-t-lg w-8 transition-all duration-500 hover:from-blue-600 hover:to-cyan-400"
                      style={{ height: `${(value / 4) * 100}%` }}
                    ></div>
                    <div className="text-xs text-gray-600">W{index + 1}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <div className="text-2xl font-bold text-red-600">3.2</div>
                  <div className="text-sm text-red-700">Peak Week</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">1.8</div>
                  <div className="text-sm text-green-700">Best Week</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">2.4</div>
                  <div className="text-sm text-blue-700">Current</div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Eco Achievements</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    achievement.earned 
                      ? 'border-green-200 bg-green-50' 
                      : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        achievement.earned 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        <achievement.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-bold text-gray-900">{achievement.title}</h3>
                          {achievement.earned && <Trophy className="w-4 h-4 text-yellow-500" />}
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                        
                        {achievement.earned ? (
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-green-600">
                              Earned {achievement.date}
                            </span>
                            <span className="text-sm font-bold text-green-600">
                              +{achievement.points} points
                            </span>
                          </div>
                        ) : (
                          <div>
                            <div className="flex items-center justify-between text-sm mb-2">
                              <span className="text-gray-600">Progress</span>
                              <span className="font-semibold">{achievement.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-[#023e8a] to-blue-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${achievement.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sustainable Tips */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sustainability Tips</h2>
              
              <div className="space-y-4">
                {sustainableTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <tip.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-semibold text-green-600">{tip.category}</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{tip.impact}</span>
                      </div>
                      <p className="text-gray-700">{tip.tip}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Leaderboard */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <h2 className="text-xl font-bold text-gray-900">Eco Leaderboard</h2>
              </div>
              
              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div key={user.rank} className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                    user.name.includes('You') 
                      ? 'bg-blue-50 border-2 border-blue-200' 
                      : 'hover:bg-gray-50'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      user.rank === 1 ? 'bg-yellow-500 text-white' :
                      user.rank === 2 ? 'bg-gray-400 text-white' :
                      user.rank === 3 ? 'bg-orange-500 text-white' :
                      'bg-gray-200 text-gray-600'
                    }`}>
                      {user.rank}
                    </div>
                    <img 
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-600">{user.points} points</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rewards Store */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <Gift className="w-6 h-6 text-purple-500" />
                <h2 className="text-xl font-bold text-gray-900">Eco Rewards</h2>
              </div>
              
              <div className="space-y-4">
                {rewards.map((reward, index) => (
                  <div key={index} className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    reward.available 
                      ? 'border-green-200 bg-green-50 hover:bg-green-100' 
                      : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <reward.icon className={`w-6 h-6 ${
                          reward.available ? 'text-green-600' : 'text-gray-400'
                        }`} />
                        <div>
                          <div className="font-semibold text-gray-900">{reward.name}</div>
                          <div className="text-sm text-gray-600">{reward.points} points</div>
                        </div>
                      </div>
                      <button className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        reward.available 
                          ? 'bg-green-500 text-white hover:bg-green-600' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}>
                        {reward.available ? 'Redeem' : 'Locked'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Points */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-6 text-white">
              <div className="text-center">
                <Leaf className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-black mb-2">1,250</div>
                <div className="text-green-100 mb-4">Eco Points Available</div>
                <button className="w-full bg-white text-green-600 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  View All Rewards
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoTracker;