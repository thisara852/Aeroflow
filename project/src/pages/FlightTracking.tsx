import React, { useState } from 'react';
import { Plane, Clock, MapPin, AlertCircle, Search, Ticket, Contact } from 'lucide-react';

const FlightTracking = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [flightData, setFlightData] = useState(null);

  // Example other plans data
  const otherPlans = [
    {
      number: 'EK722',
      departureCity: 'Colombo (CMB)',
      arrivalCity: 'Dubai (DXB)',
      departureTime: '16:00',
      status: 'Delayed',
      gate: 'B4',
    },
    {
      number: 'QR672',
      departureCity: 'Colombo (CMB)',
      arrivalCity: 'Doha (DOH)',
      departureTime: '15:15',
      status: 'On Time',
      gate: 'C7',
    },
    {
      number: 'AI112',
      departureCity: 'Colombo (CMB)',
      arrivalCity: 'New Delhi (DEL)',
      departureTime: '18:30',
      status: 'On Time',
      gate: 'D2',
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    // Dummy flight data (replace with real API integration)
    const dummyData = {
      number: flightNumber.toUpperCase(),
      ticket: ticketNumber,
      passport: passportNumber.toUpperCase(),
      status: 'On Time',
      departure: {
        city: 'Colombo (CMB)',
        time: '14:00',
      },
      arrival: {
        city: 'Dubai (DXB)',
        time: '17:45',
      },
      gate: 'A12',
    };

    setFlightData(dummyData);
  };

  return (
    <div className="min-h-screen bg-white/80 backdrop-blur-md pt-20 px-8">
      <br></br>
      <h1 className="text-4xl font-black text-gray-900 mb-10 text-center">Track Your Flight</h1>
      
      <div className="flex max-w-7xl mx-auto gap-10">
        {/* Left Side - Form & Flight Info */}
        <div className="flex-1">
          <form 
            onSubmit={handleSearch} 
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-xl mx-auto mb-12"
          >
            {/* Flight Number */}
            <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 mb-6 border border-gray-200 focus-within:ring-2 focus-within:ring-[#023e8a]">
              <Plane className="w-6 h-6 text-[#023e8a]" />
              <input
                type="text"
                placeholder="Flight Number (e.g., EK720)"
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value)}
                className="ml-4 w-full bg-transparent outline-none text-gray-900 placeholder-gray-400 font-semibold text-lg"
                required
                autoComplete="off"
              />
            </div>

            {/* Ticket Number */}
            <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 mb-6 border border-gray-200 focus-within:ring-2 focus-within:ring-[#023e8a]">
              <Ticket className="w-6 h-6 text-[#023e8a]" />
              <input
                type="text"
                placeholder="Ticket Number"
                value={ticketNumber}
                onChange={(e) => setTicketNumber(e.target.value)}
                className="ml-4 w-full bg-transparent outline-none text-gray-900 placeholder-gray-400 font-semibold text-lg"
                required
                autoComplete="off"
              />
            </div>

            {/* Passport Number */}
            <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 mb-6 border border-gray-200 focus-within:ring-2 focus-within:ring-[#023e8a]">
              <Contact className="w-6 h-6 text-[#023e8a]" />
              <input
                type="text"
                placeholder="Passport Number"
                value={passportNumber}
                onChange={(e) => setPassportNumber(e.target.value)}
                className="ml-4 w-full bg-transparent outline-none text-gray-900 placeholder-gray-400 font-semibold text-lg"
                required
                autoComplete="off"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#023e8a] to-blue-600 text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex justify-center items-center space-x-2"
            >
              <span>Track Flight</span>
              <Search className="w-5 h-5" />
            </button>
          </form>

          {/* Flight Info */}
          {flightData && (
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Flight <span className="text-[#023e8a]">{flightData.number}</span>
                </h2>
                <span
                  className={`text-sm px-3 py-1 rounded-full font-semibold ${
                    flightData.status === 'On Time'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {flightData.status}
                </span>
              </div>

              <div className="text-sm text-gray-700">
                Ticket #: <span className="font-semibold text-gray-900">{flightData.ticket}</span><br />
                Passport #: <span className="font-semibold text-gray-900">{flightData.passport}</span>
              </div>

              <div className="flex justify-between items-center text-gray-600 text-lg">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-[#023e8a]" />
                    <span>Departure: {flightData.departure.city}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-[#023e8a]" />
                    <span>{flightData.departure.time}</span>
                  </div>
                </div>

                <Plane className="w-8 h-8 text-gray-400 rotate-90" />

                <div className="space-y-1 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <span>Arrival: {flightData.arrival.city}</span>
                    <MapPin className="w-5 h-5 text-[#023e8a]" />
                  </div>
                  <div className="flex items-center justify-end space-x-2">
                    <span>{flightData.arrival.time}</span>
                    <Clock className="w-5 h-5 text-[#023e8a]" />
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-700">
                <AlertCircle className="inline w-5 h-5 mr-2 text-yellow-400" />
                Boarding Gate: <span className="font-semibold text-gray-900">{flightData.gate}</span>
              </div>
            </div>
          )}
        </div>

        {/* Right Side - Other Flight Plans */}
        <div className="w-96 bg-white rounded-3xl shadow-xl border border-gray-200 p-6 max-h-[80vh] overflow-y-auto sticky top-20">
          <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Other Flight Plans
          </h3>
          <ul className="space-y-4">
            {otherPlans.map((plan, idx) => (
              <li key={idx} className="p-3 rounded-xl border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-[#023e8a]">{plan.number}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                      plan.status === 'On Time'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {plan.status}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4 text-[#023e8a]" />
                    <span>{plan.departureCity}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4 text-[#023e8a]" />
                    <span>{plan.arrivalCity}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-[#023e8a]" />
                    <span>{plan.departureTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4 text-yellow-400" />
                    <span>Gate: {plan.gate}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
      
        </div>
      </div>
    </div>
  );
};

export default FlightTracking;
