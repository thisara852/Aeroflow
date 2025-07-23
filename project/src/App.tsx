import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import FindMyItem from './pages/FindMyItem';
import ARNavigation from './pages/ARNavigation';
import EcoTracker from './pages/EcoTracker';
import QueueSystem from './pages/QueueSystem';
import SocialSpace from './pages/SocialSpace';
import FamilyHub from './pages/FamilyHub';
import FlightMood from './pages/FlightMood';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import FlightTracking from './pages/FlightTracking'; // ✅ NEW

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/find-my-item" element={<FindMyItem />} />
          <Route path="/ar-navigation" element={<ARNavigation />} />
          <Route path="/eco-tracker" element={<EcoTracker />} />
          <Route path="/queue-system" element={<QueueSystem />} />
          <Route path="/social-space" element={<SocialSpace />} />
          <Route path="/family-hub" element={<FamilyHub />} />
          <Route path="/flight-mood" element={<FlightMood />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/flight-tracking" element={<FlightTracking />} /> {/* ✅ NEW */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
