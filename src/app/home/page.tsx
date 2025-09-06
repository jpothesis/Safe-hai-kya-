import React, { useState, useEffect } from 'react';
import { Search, Shield, MapPin, Brain, Route, Star, Facebook, Twitter, Instagram, Mail, Phone, Sparkles, Globe, Users, Award, ArrowRight, Play } from 'lucide-react';

export default function HomePage() {
  const [searchLocation, setSearchLocation] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);

  const handleSearch = () => {
    if (searchLocation.trim()) {
      alert(`Searching safety data for: ${searchLocation}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100/30 via-blue-100/20 to-indigo-100/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(154,166,178,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(188,204,220,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(217,234,253,0.2),transparent_50%)]"></div>
      </div>
      
      {/* Floating Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-slate-200/40 to-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse animation-delay-2s"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-slate-300/20 to-blue-300/20 rounded-full blur-2xl animate-pulse animation-delay-4s"></div>
      </div>

      {/* Mouse Follower */}
      <div 
        className="fixed w-96 h-96 bg-gradient-to-br from-slate-300/10 to-blue-300/10 rounded-full blur-3xl pointer-events-none z-0 transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      <div className="relative z-10">
        {/* Enhanced Navbar */}
        <nav className="bg-white/80 backdrop-blur-2xl border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <Shield className="h-10 w-10 text-slate-500 group-hover:text-blue-500 transition-all duration-500 drop-shadow-lg" />
                  <div className="absolute inset-0 bg-slate-400/20 rounded-full blur-xl group-hover:bg-blue-400/20 transition-all duration-500"></div>
                </div>
                <span className="text-3xl font-black text-slate-700 tracking-tight">
                  SafePath
                </span>
              </div>
              
              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#about" className="text-slate-600 hover:text-slate-800 font-medium transition-all duration-300 relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#features" className="text-slate-600 hover:text-slate-800 font-medium transition-all duration-300 relative group">
                  Features
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-full transition-all duration-300 font-medium border border-slate-200 hover:border-slate-300 hover:scale-105">
                  Login
                </button>
                <button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Sign Up
                </button>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-slate-700 p-2 rounded-lg bg-white/60 backdrop-blur-sm border border-slate-200">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-40 px-4 relative">
          <div className="max-w-6xl mx-auto text-center relative">
            {/* Floating Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-xl border border-slate-200/80 rounded-full px-6 py-3 mb-8 hover:scale-105 transition-all duration-500 group shadow-lg">
              <Sparkles className="h-4 w-4 text-slate-500 group-hover:text-blue-500 transition-colors" />
              <span className="text-slate-700 font-medium">AI-Powered Safety Intelligence</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-slate-800 mb-8 leading-tight tracking-tight">
              Find the{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-blue-600 to-slate-600">
                  Safest
                </span>
                <div className="absolute -inset-4 bg-gradient-to-r from-slate-300/30 to-blue-300/30 blur-2xl -z-10"></div>
              </span>
              <br />
              Path for Your
              <br />
              <span className="relative inline-block">
                Journey
                <div className="absolute -right-16 -top-8 text-6xl animate-bounce">🚶‍♀️</div>
                <div className="absolute -right-4 -top-12 text-4xl animate-pulse animation-delay-1s">🌙</div>
              </span>
            </h1>
            
            <p className="text-2xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
              Navigate with <span className="text-slate-700 font-semibold">confidence</span> using cutting-edge AI safety insights. 
              Get real-time safety scores and discover the most <span className="text-blue-600 font-semibold">secure routes</span> for your travels.
            </p>

            {/* Enhanced Search Bar */}
            <div className="relative max-w-4xl mx-auto mb-16">
              <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-8 border border-slate-200/80 shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 group">
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                  <div className="flex-1 relative w-full">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                      <MapPin className="text-slate-500 h-6 w-6" />
                      <div className="w-px h-6 bg-slate-300"></div>
                    </div>
                    <input
                      type="text"
                      placeholder="Where are you going today?"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="w-full pl-16 pr-6 py-5 bg-white/70 border border-slate-200 rounded-2xl text-slate-800 text-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:border-slate-400/50 transition-all duration-300 backdrop-blur-sm"
                    />
                  </div>
                  <button
                    onClick={handleSearch}
                    className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg hover:shadow-2xl hover:shadow-slate-500/30"
                  >
                    <Search className="h-6 w-6" />
                    <span>Check Safety Now</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              
              {/* Search suggestions */}
              <div className="flex justify-center mt-6 space-x-4">
                {['Central Park', 'Times Square', 'Brooklyn Bridge'].map((suggestion) => (
                  <button key={suggestion} className="px-4 py-2 bg-white/40 hover:bg-white/60 border border-slate-200 rounded-full text-slate-600 hover:text-slate-800 text-sm transition-all duration-300 backdrop-blur-sm">
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Trust indicators */}
            <div className="flex justify-center items-center space-x-12 text-slate-600">
              <div className="flex items-center space-x-2 group hover:text-slate-800 transition-colors">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
              <div className="flex items-center space-x-2 group hover:text-slate-800 transition-colors">
                <Users className="h-5 w-5 text-slate-500" />
                <span className="font-semibold">50k+ Safe Journeys</span>
              </div>
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
              <div className="flex items-center space-x-2 group hover:text-slate-800 transition-colors">
                <Globe className="h-5 w-5 text-blue-500" />
                <span className="font-semibold">24/7 AI Monitoring</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-white/30 backdrop-blur-sm"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-xl border border-slate-200/80 rounded-full px-6 py-3 mb-8 shadow-lg">
                <Brain className="h-5 w-5 text-slate-500" />
                <span className="text-slate-700 font-medium">How It Works</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-800 mb-6 tracking-tight">
                Three Steps to
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-blue-600"> Safety</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Our advanced AI analyzes thousands of data points to provide you with intelligent safety recommendations
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="group relative">
                <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/80 hover:border-slate-300/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-slate-300/50">
                  <div className="relative mb-8">
                    <div className="bg-gradient-to-br from-slate-500 to-slate-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <MapPin className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-slate-400/20 to-slate-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-slate-500 to-slate-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      1
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">Enter Location</h3>
                  <p className="text-slate-600 leading-relaxed text-center text-lg">
                    Simply type in your destination. Our system recognizes locations worldwide and provides instant, intelligent suggestions for your journey.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group relative lg:mt-8">
                <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/80 hover:border-blue-300/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300/50">
                  <div className="relative mb-8">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <Brain className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      2
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">AI Safety Score</h3>
                  <p className="text-slate-600 leading-relaxed text-center text-lg">
                    Our advanced AI analyzes crime data, lighting conditions, crowd density, and historical patterns to generate comprehensive safety insights.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group relative lg:mt-16">
                <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/80 hover:border-slate-400/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-slate-400/50">
                  <div className="relative mb-8">
                    <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-full w-24 h-24 flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <Route className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-slate-500/20 to-slate-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-slate-600 to-slate-700 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      3
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">Choose Route</h3>
                  <p className="text-slate-600 leading-relaxed text-center text-lg">
                    Get multiple route options ranked by safety score. Choose the path that gives you complete peace of mind and confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-white/40 backdrop-blur-sm"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid md:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="col-span-2">
                <div className="flex items-center space-x-3 mb-6 group">
                  <div className="relative">
                    <Shield className="h-10 w-10 text-slate-500 group-hover:text-blue-500 transition-all duration-500" />
                    <div className="absolute inset-0 bg-slate-400/20 rounded-full blur-xl group-hover:bg-blue-400/20 transition-all duration-500"></div>
                  </div>
                  <span className="text-3xl font-black text-slate-700">SafePath</span>
                </div>
                <p className="text-slate-600 mb-8 max-w-md text-lg leading-relaxed">
                  Empowering safer journeys through cutting-edge AI technology. Your security and peace of mind are our highest priority.
                </p>
                
                {/* Social Media */}
                <div className="flex space-x-6">
                  <a href="#" className="bg-white/60 hover:bg-slate-500 hover:text-white text-slate-600 p-3 rounded-full transition-all duration-300 hover:scale-110 border border-slate-200 backdrop-blur-sm">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-white/60 hover:bg-blue-500 hover:text-white text-slate-600 p-3 rounded-full transition-all duration-300 hover:scale-110 border border-slate-200 backdrop-blur-sm">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-white/60 hover:bg-slate-600 hover:text-white text-slate-600 p-3 rounded-full transition-all duration-300 hover:scale-110 border border-slate-200 backdrop-blur-sm">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-6">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-slate-600 hover:text-slate-800 transition-colors group">
                    <div className="bg-slate-200/60 p-2 rounded-lg group-hover:bg-slate-500 group-hover:text-white transition-colors backdrop-blur-sm">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span>support@safepath.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600 hover:text-slate-800 transition-colors group">
                    <div className="bg-blue-200/60 p-2 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors backdrop-blur-sm">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-6">Legal</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-slate-600 hover:text-slate-500 transition-colors font-medium">Privacy Policy</a>
                  <a href="#" className="block text-slate-600 hover:text-blue-500 transition-colors font-medium">Terms of Service</a>
                  <a href="#" className="block text-slate-600 hover:text-slate-700 transition-colors font-medium">Cookie Policy</a>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="border-t border-slate-200 mt-16 pt-8">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                <p className="text-slate-500 text-sm">
                  © 2024 SafePath. All rights reserved.
                </p>
                <div className="bg-orange-100/60 backdrop-blur-sm border border-orange-200 rounded-lg px-4 py-2">
                  <p className="text-orange-600 text-sm font-medium">
                    <strong>Disclaimer:</strong> Safety scores are AI-generated estimates. Always trust your instincts and stay alert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .animation-delay-1s {
          animation-delay: 1s;
        }
        .animation-delay-2s {
          animation-delay: 2s;
        }
        .animation-delay-4s {
          animation-delay: 4s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}