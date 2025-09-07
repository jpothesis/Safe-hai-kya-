'use client';

import { useState, useEffect, useRef } from 'react';
import { MapPin, Search, Shield, Eye, Users, Filter, Star, MessageSquare } from 'lucide-react';

// Type definitions
interface Route {
  id: number;
  name: string;
  distance: string;
  duration: string;
  safetyScore: number;
  color: string;
  lighting: number;
  crimeRate: number;
  policeProximity: number;
  coordinates: number[][];
}

// Mock data for demonstration
const mockRoutes: Route[] = [
  {
    id: 1,
    name: "Main Street Route",
    distance: "2.3 km",
    duration: "8 min",
    safetyScore: 9.2,
    color: "#22c55e", // green
    lighting: 9.5,
    crimeRate: 1.2,
    policeProximity: 0.3,
    coordinates: [[40.7589, -73.9851], [40.7505, -73.9934]]
  },
  {
    id: 2,
    name: "Park Avenue Route", 
    distance: "2.8 km",
    duration: "12 min",
    safetyScore: 7.8,
    color: "#eab308", // yellow
    lighting: 7.2,
    crimeRate: 3.1,
    policeProximity: 0.8,
    coordinates: [[40.7589, -73.9851], [40.7489, -73.9889]]
  },
  {
    id: 3,
    name: "Back Alley Route",
    distance: "1.9 km", 
    duration: "6 min",
    safetyScore: 4.5,
    color: "#ef4444", // red
    lighting: 4.1,
    crimeRate: 8.7,
    policeProximity: 2.1,
    coordinates: [[40.7589, -73.9851], [40.7445, -73.9876]]
  }
];

export default function MapPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const [routeFilter, setRouteFilter] = useState<'shortest' | 'safest' | 'balanced'>('balanced');
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');
  const mapRef = useRef<HTMLDivElement>(null);

  // Initialize map (mock implementation)
  useEffect(() => {
    // In a real implementation, you would initialize Google Maps or Leaflet here
    console.log('Map initialized');
  }, []);

  const handleSearch = (): void => {
    console.log('Searching for:', searchQuery);
    // Implement search logic here
  };

  const getSafetyColor = (score: number): string => {
    if (score >= 8) return '#22c55e';
    if (score >= 6) return '#eab308';
    return '#ef4444';
  };

  const filteredRoutes: Route[] = [...mockRoutes].sort((a: Route, b: Route) => {
    switch (routeFilter) {
      case 'shortest':
        return parseFloat(a.distance.replace(' km', '')) - parseFloat(b.distance.replace(' km', ''));
      case 'safest':
        return b.safetyScore - a.safetyScore;
      default: // balanced
        return (b.safetyScore * 0.6 + (3 - parseFloat(a.distance.replace(' km', ''))) * 0.4) - 
               (a.safetyScore * 0.6 + (3 - parseFloat(b.distance.replace(' km', ''))) * 0.4);
    }
  });

  const handleStarClick = (starNumber: number): void => {
    setRating(starNumber);
  };

  const handleReviewSubmit = (): void => {
    console.log('Review submitted:', { rating, reviewText });
    setShowReviewModal(false);
    setRating(0);
    setReviewText('');
    // Handle review submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D2E0FB] to-[#F9F3CC] font-sans">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#8EACCD] mb-2">Safe Route Navigator</h1>
          <p className="text-gray-600">Find the safest path to your destination</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search Bar */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-[#D2E0FB]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search location or route..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-[#D7E5CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EACCD] bg-white/90"
                />
                <Search className="absolute left-3 top-3.5 h-4 w-4 text-[#8EACCD]" />
                <button 
                  onClick={handleSearch}
                  className="absolute right-2 top-2 px-3 py-1.5 bg-[#8EACCD] text-white rounded-md hover:bg-[#7A9BC4] transition-colors"
                >
                  Go
                </button>
              </div>
            </div>

            {/* Route Filter */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-[#D2E0FB]">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="h-4 w-4 text-[#8EACCD]" />
                <h3 className="font-semibold text-[#8EACCD]">Route Preference</h3>
              </div>
              <div className="space-y-2">
                {(['shortest', 'safest', 'balanced'] as const).map((filter) => (
                  <label key={filter} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="routeFilter"
                      value={filter}
                      checked={routeFilter === filter}
                      onChange={(e) => setRouteFilter(e.target.value as 'shortest' | 'safest' | 'balanced')}
                      className="text-[#8EACCD] focus:ring-[#8EACCD]"
                    />
                    <span className="capitalize text-gray-700">{filter}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Route Options */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-[#D2E0FB]">
              <h3 className="font-semibold text-[#8EACCD] mb-3">Route Options</h3>
              <div className="space-y-3">
                {filteredRoutes.map((route: Route) => (
                  <div
                    key={route.id}
                    onClick={() => setSelectedRoute(route)}
                    className={`p-3 rounded-lg cursor-pointer transition-all border-2 ${
                      selectedRoute?.id === route.id
                        ? 'border-[#8EACCD] bg-[#D2E0FB]/50'
                        : 'border-transparent bg-white/60 hover:bg-white/80'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: route.color }}
                      ></div>
                      <span className="font-medium text-sm">{route.name}</span>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div>{route.distance} • {route.duration}</div>
                      <div className="flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        <span style={{ color: getSafetyColor(route.safetyScore) }}>
                          Safety: {route.safetyScore}/10
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Review Button */}
            <button
              onClick={() => setShowReviewModal(true)}
              className="w-full bg-[#8EACCD] text-white py-3 px-4 rounded-xl hover:bg-[#7A9BC4] transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              Add Review
            </button>
          </div>

          {/* Map Container */}
          <div className="lg:col-span-3 space-y-6">
            {/* Map */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-[#D2E0FB] overflow-hidden">
              <div 
                ref={mapRef}
                className="h-96 bg-gradient-to-br from-[#F9F3CC] to-[#D7E5CA] flex items-center justify-center relative"
              >
                <div className="text-center text-[#8EACCD]">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p className="text-sm">Google Maps / Leaflet integration goes here</p>
                  
                  {/* Mock route visualization */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 p-2 rounded-lg shadow-md">
                      <div className="text-xs font-semibold mb-1">Active Routes:</div>
                      {filteredRoutes.map((route: Route) => (
                        <div key={route.id} className="flex items-center gap-2 text-xs">
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: route.color }}
                          ></div>
                          <span>{route.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Score Card */}
            {selectedRoute && (
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#D2E0FB]">
                <h3 className="text-xl font-bold text-[#8EACCD] mb-4">
                  Safety Analysis: {selectedRoute.name}
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Overall Safety Score */}
                  <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-3">
                      <svg className="w-20 h-20 transform -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="30"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="30"
                          stroke={getSafetyColor(selectedRoute.safetyScore)}
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${(selectedRoute.safetyScore / 10) * 188.5} 188.5`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold" style={{ color: getSafetyColor(selectedRoute.safetyScore) }}>
                          {selectedRoute.safetyScore}
                        </span>
                      </div>
                    </div>
                    <p className="font-semibold text-[#8EACCD]">Overall Safety</p>
                  </div>

                  {/* Safety Metrics */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-[#8EACCD]" />
                        <span className="text-sm">Lighting Quality</span>
                      </div>
                      <span className="font-semibold">{selectedRoute.lighting}/10</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-[#8EACCD]" />
                        <span className="text-sm">Crime Rate</span>
                      </div>
                      <span className="font-semibold">{selectedRoute.crimeRate}/10</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#8EACCD]" />
                        <span className="text-sm">Police Proximity</span>
                      </div>
                      <span className="font-semibold">{selectedRoute.policeProximity} km</span>
                    </div>
                  </div>

                  {/* Route Details */}
                  <div className="bg-[#F9F3CC]/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#8EACCD] mb-2">Route Details</h4>
                    <div className="space-y-2 text-sm">
                      <div>Distance: <span className="font-medium">{selectedRoute.distance}</span></div>
                      <div>Duration: <span className="font-medium">{selectedRoute.duration}</span></div>
                      <div className="flex items-center gap-1">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: selectedRoute.color }}
                        ></div>
                        <span>Safety Level: </span>
                        <span 
                          className="font-medium"
                          style={{ color: getSafetyColor(selectedRoute.safetyScore) }}
                        >
                          {selectedRoute.safetyScore >= 8 ? 'High' : selectedRoute.safetyScore >= 6 ? 'Medium' : 'Low'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-[#8EACCD] mb-4">Add Route Review</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Route Rating
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`h-6 w-6 cursor-pointer ${
                        star <= rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                      onClick={() => handleStarClick(star)}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Experience
                </label>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="w-full p-3 border border-[#D7E5CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EACCD]"
                  rows={4}
                  placeholder="Share your experience with this route..."
                ></textarea>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowReviewModal(false);
                    setRating(0);
                    setReviewText('');
                  }}
                  className="flex-1 px-4 py-2 border border-[#D7E5CA] text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReviewSubmit}
                  className="flex-1 px-4 py-2 bg-[#8EACCD] text-white rounded-lg hover:bg-[#7A9BC4] transition-colors"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}