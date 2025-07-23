import React, { useEffect, useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState('');
  const [locationLoading, setLocationLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser');
      setLocationLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setLocationError('');
        setLocationLoading(false);
      },
      (error) => {
        setLocationError('Unable to retrieve your location. Please allow location access.');
        setLocationLoading(false);
      }
    );
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    // You can now use location info in sign-in API call or logic
    alert(`Signing in... Location: ${location ? `Lat ${location.latitude}, Lon ${location.longitude}` : 'Unavailable'}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400 mt-2">
            Sign in to continue to <span className="text-blue-400 font-semibold">AeroFlow</span>
          </p>
          {locationLoading && <p className="text-sm text-yellow-300 mt-2">Requesting location access...</p>}
          {location && !locationLoading && (
            <p className="text-sm text-green-400 mt-2">
              Location detected: Lat {location.latitude.toFixed(4)}, Lon {location.longitude.toFixed(4)}
            </p>
          )}
          {locationError && !locationLoading && (
            <p className="text-sm text-red-500 mt-2">{locationError}</p>
          )}
        </div>

        <form onSubmit={handleSignIn} className="space-y-4">
          <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent outline-none text-white ml-3 w-full"
              required
            />
          </div>

          <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
            <Lock className="w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none text-white ml-3 w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#023e8a] to-[#0077b6] text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
          >
            <span>Sign In</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="text-center mt-4">
            <Link to="/forgot-password" className="text-blue-400 hover:underline text-sm">
              Forgot password?
            </Link>
          </div>

          <div className="text-center text-sm text-gray-400">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
