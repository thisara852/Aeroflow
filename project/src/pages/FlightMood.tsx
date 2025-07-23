import React, { useState } from 'react';
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Wind, 
  Thermometer,
  Plane,
  TrendingUp,
  TrendingDown,
  Users,
  Clock,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Activity,
  Zap,
  Heart,
  Coffee,
  Music,
  Smile,
  Frown,
  Meh
} from 'lucide-react';

const FlightMood = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('current');

  const currentMood = {
    overall: 'positive',
    score: 7.2,
    trend: 'improving',
    factors: {
      weather: { score: 8.5, status: 'excellent', icon: Sun },
      delays: { score: 6.8, status: 'moderate', icon: Clock },
      crowding: { score: 7.1, status: 'good', icon: Users },
      services: { score: 8.2, status: 'excellent', icon: Coffee }
    }
  };

  const weatherData = {
    current: {
      condition: 'Sunny',
      temperature: 28,
      humidity: 45,
      windSpeed: 12,
      visibility: 10,
      icon: Sun
    },
    forecast: [
      { time: '15:00', temp: 29, condition: 'Sunny', icon: Sun },
      { time: '16:00', temp: 30, condition: 'Partly Cloudy', icon: Cloud },
      { time: '17:00', temp: 28, condition: 'Cloudy', icon: Cloud },
      { time: '18:00', temp: 26, condition: 'Light Rain', icon: CloudRain }
    ]
  };

  const flightStats = {
    onTime: 78,
    delayed: 18,
    cancelled: 4,
    totalFlights: 245,
    averageDelay: 12
  };

  const passengerSentiment = [
    { emotion: 'Happy', percentage: 45, color: 'bg-green-500', icon: Smile },
    { emotion: 'Neutral', percentage: 35, color: 'bg-yellow-500', icon: Meh },
    { emotion: 'Frustrated', percentage: 20, color: 'bg-red-500', icon: Frown }
  ];

  const moodFactors = [
    {
      category: 'Flight Operations',
      icon: Plane,
      metrics: [
        { name: 'On-time Performance', value: '78%', trend: 'up', color: 'green' },
        { name: 'Average Delay', value: '12 min', trend: 'down', color: 'green' },
        { name: 'Gate Changes', value: '5', trend: 'down', color: 'green' },
        { name: 'Cancellations', value: '4', trend: 'stable', color: 'yellow' }
      ]
    },
    {
      category: 'Passenger Experience',
      icon: Users,
      metrics: [
        { name: 'Security Wait Time', value: '8 min', trend: 'down', color: 'green' },
        { name: 'Check-in Queue', value: '5 min', trend: 'stable', color: 'yellow' },
        { name: 'Lounge Capacity', value: '65%', trend: 'up', color: 'orange' },
        { name: 'WiFi Performance', value: '94%', trend: 'up', color: 'green' }
      ]
    },
    {
      category: 'Environmental',
      icon: Cloud,
      metrics: [
        { name: 'Weather Conditions', value: 'Excellent', trend: 'stable', color: 'green' },
        { name: 'Air Quality', value: 'Good', trend: 'up', color: 'green' },
        { name: 'Temperature', value: '28°C', trend: 'stable', color: 'green' },
        { name: 'Wind Speed', value: '12 km/h', trend: 'down', color: 'green' }
      ]
    },
    {
      category: 'Services & Amenities',
      icon: Coffee,
      metrics: [
        { name: 'Restaurant Availability', value: '92%', trend: 'stable', color: 'green' },
        { name: 'Shop Operations', value: '98%', trend: 'up', color: 'green' },
        { name: 'Charging Stations', value: '87%', trend: 'down', color: 'orange' },
        { name: 'Cleanliness Score', value: '9.1/10', trend: 'up', color: 'green' }
      ]
    }
  ];

  const hourlyMood = [
    { hour: '06:00', mood: 8.2, passengers: 120 },
    { hour: '08:00', mood: 7.8, passengers: 280 },
    { hour: '10:00', mood: 7.5, passengers: 420 },
    { hour: '12:00', mood: 6.9, passengers: 580 },
    { hour: '14:00', mood: 7.2, passengers: 650 },
    { hour: '16:00', mood: 7.6, passengers: 720 },
    { hour: '18:00', mood: 8.1, passengers: 580 },
    { hour: '20:00', mood: 8.4, passengers: 380 }
  ];

  const getMoodColor = (score) => {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getMoodEmoji = (score) => {
    if (score >= 8) return '😊';
    if (score >= 6) return '😐';
    return '😞';
  };

  const getTrendIcon = (trend) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <Activity className="w-4 h-4 text-gray-500" />;
  };

  const getTrendColor = (color) => {
    const colors = {
      green: 'text-green-600',
      yellow: 'text-yellow-600',
      orange: 'text-orange-600',
      red: 'text-red-600'
    };
    return colors[color] || 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 mb-2">Flight Mood Visualizer</h1>
          <p className="text-xl text-gray-600">Real-time airport mood analysis based on flight operations, weather, and passenger sentiment</p>
        </div>

        {/* Current Mood Overview */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-6xl mb-2">{getMoodEmoji(currentMood.score)}</div>
              <div className="text-3xl font-black mb-1">{currentMood.score}/10</div>
              <div className="text-blue-100">Overall Mood</div>
              <div className="text-sm text-blue-200 mt-1 capitalize">{currentMood.overall}</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold mb-1">Improving</div>
              <div className="text-blue-100">Trend</div>
              <div className="text-sm text-blue-200 mt-1">+0.3 from yesterday</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold mb-1">2,847</div>
              <div className="text-blue-100">Active Passengers</div>
              <div className="text-sm text-blue-200 mt-1">Current terminal count</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold mb-1">Real-time</div>
              <div className="text-blue-100">Updates</div>
              <div className="text-sm text-blue-200 mt-1">Every 5 minutes</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Mood Factors */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Mood Factors Analysis</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {moodFactors.map((factor, index) => (
                  <div key={index} className="border border-gray-200 rounded-2xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#023e8a] to-blue-600 rounded-xl flex items-center justify-center">
                        <factor.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900">{factor.category}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {factor.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{metric.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className={`font-semibold ${getTrendColor(metric.color)}`}>
                              {metric.value}
                            </span>
                            {getTrendIcon(metric.trend)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hourly Mood Chart */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hourly Mood Trends</h2>
              
              <div className="h-64 flex items-end justify-center space-x-4">
                {hourlyMood.map((data, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div className="text-xs text-gray-600">{data.mood}</div>
                    <div 
                      className="bg-gradient-to-t from-[#023e8a] to-blue-400 rounded-t-lg w-8 transition-all duration-500 hover:from-blue-600 hover:to-cyan-400"
                      style={{ height: `${(data.mood / 10) * 100}%` }}
                    ></div>
                    <div className="text-xs text-gray-600">{data.hour}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">8.4</div>
                  <div className="text-sm text-green-700">Peak Mood (8 PM)</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <div className="text-2xl font-bold text-red-600">6.9</div>
                  <div className="text-sm text-red-700">Lowest Mood (12 PM)</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">7.5</div>
                  <div className="text-sm text-blue-700">Average Today</div>
                </div>
              </div>
            </div>

            {/* Passenger Sentiment */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Passenger Sentiment Distribution</h2>
              
              <div className="space-y-4">
                {passengerSentiment.map((sentiment, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3 w-32">
                      <sentiment.icon className="w-6 h-6 text-gray-600" />
                      <span className="font-semibold text-gray-900">{sentiment.emotion}</span>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-4">
                      <div 
                        className={`${sentiment.color} h-4 rounded-full transition-all duration-500`}
                        style={{ width: `${sentiment.percentage}%` }}
                      ></div>
                    </div>
                    <span className="font-bold text-gray-900 w-12">{sentiment.percentage}%</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Heart className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-900">Sentiment Insights</span>
                </div>
                <p className="text-sm text-blue-700">
                  Passenger satisfaction is above average today. The sunny weather and improved on-time performance 
                  are contributing to positive sentiment. Consider promoting outdoor dining areas to capitalize on the good mood.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Weather Widget */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Current Weather</h3>
              
              <div className="text-center mb-6">
                <weatherData.current.icon className="w-16 h-16 text-yellow-500 mx-auto mb-2" />
                <div className="text-3xl font-black text-gray-900">{weatherData.current.temperature}°C</div>
                <div className="text-gray-600">{weatherData.current.condition}</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <div className="text-lg font-bold text-gray-900">{weatherData.current.humidity}%</div>
                  <div className="text-xs text-gray-600">Humidity</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <div className="text-lg font-bold text-gray-900">{weatherData.current.windSpeed} km/h</div>
                  <div className="text-xs text-gray-600">Wind Speed</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">4-Hour Forecast</h4>
                {weatherData.forecast.map((forecast, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">{forecast.time}</span>
                    <div className="flex items-center space-x-2">
                      <forecast.icon className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-semibold">{forecast.temp}°C</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flight Statistics */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Flight Operations</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Flights</span>
                  <span className="font-bold text-gray-900">{flightStats.totalFlights}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600">On Time</span>
                    <span className="font-semibold">{flightStats.onTime}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${flightStats.onTime}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-yellow-600">Delayed</span>
                    <span className="font-semibold">{flightStats.delayed}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: `${flightStats.delayed}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-red-600">Cancelled</span>
                    <span className="font-semibold">{flightStats.cancelled}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: `${flightStats.cancelled}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Avg. Delay</span>
                    <span className="font-bold text-orange-600">{flightStats.averageDelay} min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mood Recommendations */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Smile className="w-6 h-6" />
                <h3 className="text-lg font-bold">Mood Boosters</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-white/20 rounded-lg">
                  <div className="font-semibold mb-1">🎵 Live Music</div>
                  <p>Acoustic performance at Terminal 1 main hall, 3-5 PM</p>
                </div>
                <div className="p-3 bg-white/20 rounded-lg">
                  <div className="font-semibold mb-1">☕ Happy Hour</div>
                  <p>20% off all beverages at participating cafés until 6 PM</p>
                </div>
                <div className="p-3 bg-white/20 rounded-lg">
                  <div className="font-semibold mb-1">🧘 Wellness Zone</div>
                  <p>Free meditation sessions every hour in the quiet zone</p>
                </div>
              </div>
            </div>

            {/* Real-time Updates */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Live Updates</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-green-900">Security Wait Reduced</div>
                    <div className="text-sm text-green-700">Average wait time down to 8 minutes</div>
                    <div className="text-xs text-green-600">2 min ago</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Music className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-blue-900">Entertainment Started</div>
                    <div className="text-sm text-blue-700">Live acoustic session in main hall</div>
                    <div className="text-xs text-blue-600">5 min ago</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-yellow-900">Gate Change</div>
                    <div className="text-sm text-yellow-700">Flight EK 203 moved to Gate B15</div>
                    <div className="text-xs text-yellow-600">8 min ago</div>
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

export default FlightMood;