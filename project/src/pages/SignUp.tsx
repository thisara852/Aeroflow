import React from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Create Account</h1>
          <p className="text-gray-400 mt-2">
            Join the journey with <span className="text-blue-400 font-semibold">AeroFlow</span>
          </p>
        </div>

        <form className="space-y-4">
          <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
            <User className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent outline-none text-white ml-3 w-full"
              required
            />
          </div>

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
            className="w-full bg-gradient-to-r from-[#0077b6] to-[#0096c7] text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
          >
            <span>Sign Up</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-400 hover:underline">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
