'use client';

import { useState } from 'react';
import { Shield, Users, MapPin, Brain, Database, AlertTriangle, Eye, Clock, Star, TrendingUp, Heart, Lightbulb } from 'lucide-react';

// Type definitions
interface TabButtonProps {
  id: string;
  label: string;
  active: boolean;
  onClick: (id: string) => void;
}

// TabButton Component
function TabButton({ id, label, active, onClick }: TabButtonProps) {
  return (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 rounded-lg font-medium transition-all ${
        active
          ? 'bg-[#8EACCD] text-white shadow-lg'
          : 'bg-white/60 text-[#8EACCD] hover:bg-white/80'
      }`}
    >
      {label}
    </button>
  );
}

export default function AwarenessPage() {
  const [activeTab, setActiveTab] = useState<string>('impact');

  const stats = [
    { icon: Users, label: "Women feel unsafe walking alone at night", value: "73%" },
    { icon: Clock, label: "Students avoid late-night activities due to safety concerns", value: "68%" },
    { icon: MapPin, label: "Assault incidents happen on poorly lit streets", value: "85%" },
    { icon: TrendingUp, label: "Safety incidents reduced with better route planning", value: "42%" }
  ];

  const aiFactors = [
    {
      icon: Eye,
      title: "Street Lighting",
      description: "Analyzes streetlight density, brightness levels, and coverage gaps using satellite imagery and municipal data.",
      weight: "25%"
    },
    {
      icon: Shield,
      title: "Crime Statistics",
      description: "Real-time crime data including incident types, frequency, and temporal patterns from police databases.",
      weight: "30%"
    },
    {
      icon: Users,
      title: "Community Reviews",
      description: "User-generated safety reports, experiences, and real-time crowd-sourced safety updates.",
      weight: "20%"
    },
    {
      icon: MapPin,
      title: "Infrastructure",
      description: "Proximity to police stations, hospitals, emergency services, and safe public spaces.",
      weight: "15%"
    },
    {
      icon: Clock,
      title: "Time & Context",
      description: "Dynamic scoring based on time of day, day of week, seasonal patterns, and local events.",
      weight: "10%"
    }
  ];

  const dataSources = [
    {
      icon: Shield,
      name: "Police Departments",
      description: "Official crime statistics, incident reports, and patrol data from local law enforcement agencies.",
      reliability: "High",
      updateFreq: "Daily"
    },
    {
      icon: MapPin,
      name: "OpenStreetMap (OSM)",
      description: "Community-maintained geographic data including street layouts, lighting, and infrastructure details.",
      reliability: "High",
      updateFreq: "Real-time"
    },
    {
      icon: Users,
      name: "User Contributions",
      description: "Community reviews, safety reports, and real-time updates from verified users.",
      reliability: "Variable",
      updateFreq: "Real-time"
    },
    {
      icon: Eye,
      name: "Municipal Data",
      description: "Street lighting databases, maintenance records, and urban planning information.",
      reliability: "High",
      updateFreq: "Weekly"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D2E0FB] to-[#F9F3CC] font-sans">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-[#8EACCD]" />
            <h1 className="text-4xl font-bold text-[#8EACCD]">Building Safer Communities</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understanding the technology and mission behind our AI-powered safe route navigation system
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <TabButton 
            id="impact" 
            label="Social Impact" 
            active={activeTab === 'impact'} 
            onClick={setActiveTab} 
          />
          <TabButton 
            id="ai" 
            label="How AI Works" 
            active={activeTab === 'ai'} 
            onClick={setActiveTab} 
          />
          <TabButton 
            id="data" 
            label="Data Sources" 
            active={activeTab === 'data'} 
            onClick={setActiveTab} 
          />
          <TabButton 
            id="disclaimer" 
            label="Disclaimer" 
            active={activeTab === 'disclaimer'} 
            onClick={setActiveTab} 
          />
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Social Impact Section */}
          {activeTab === 'impact' && (
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#D2E0FB]">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="h-6 w-6 text-[#8EACCD]" />
                  <h2 className="text-2xl font-bold text-[#8EACCD]">Why We Built This</h2>
                </div>
                
                <div className="prose prose-lg text-gray-700 mb-8">
                  <p className="text-lg leading-relaxed">
                    Personal safety shouldn't be a luxury or a gamble. Every day, millions of people—especially women, 
                    students, and vulnerable community members—make difficult choices about where to go and when, 
                    all because they're concerned about their safety.
                  </p>
                  <p className="leading-relaxed">
                    We believe that access to safety information is a fundamental right. Our platform was born from 
                    real stories of people who've had to take longer, more expensive routes home just to feel secure, 
                    students who've missed opportunities because they were afraid to travel after dark, and communities 
                    that deserve better tools to navigate their neighborhoods safely.
                  </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-[#F9F3CC]/60 rounded-xl p-6 text-center">
                      <stat.icon className="h-8 w-8 text-[#8EACCD] mx-auto mb-3" />
                      <div className="text-3xl font-bold text-[#8EACCD] mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-600 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-r from-[#8EACCD] to-[#7A9BC4] rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To democratize safety information and empower every individual to make informed decisions about 
                  their routes, ultimately creating safer, more connected communities where everyone can move 
                  freely with confidence.
                </p>
              </div>
            </div>
          )}

          {/* AI Technology Section */}
          {activeTab === 'ai' && (
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#D2E0FB]">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="h-6 w-6 text-[#8EACCD]" />
                  <h2 className="text-2xl font-bold text-[#8EACCD]">How Our AI Works</h2>
                </div>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our artificial intelligence system analyzes multiple data layers to calculate safety scores for 
                  different routes. The AI continuously learns from new data to improve accuracy and adapt to 
                  changing conditions in your area.
                </p>

                <div className="space-y-6">
                  {aiFactors.map((factor, index) => (
                    <div key={index} className="bg-[#F9F3CC]/40 rounded-xl p-6 border border-[#D7E5CA]">
                      <div className="flex items-start gap-4">
                        <div className="bg-[#8EACCD] p-3 rounded-xl">
                          <factor.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-[#8EACCD]">{factor.title}</h3>
                            <span className="bg-[#8EACCD] text-white px-3 py-1 rounded-full text-sm font-medium">
                              {factor.weight}
                            </span>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{factor.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI Process Flow */}
                <div className="mt-8 bg-gradient-to-r from-[#D2E0FB] to-[#D7E5CA] rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-[#8EACCD] mb-4">AI Processing Pipeline</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="bg-white/80 px-4 py-2 rounded-lg">Data Collection</div>
                    <div className="text-[#8EACCD]">→</div>
                    <div className="bg-white/80 px-4 py-2 rounded-lg">Pattern Analysis</div>
                    <div className="text-[#8EACCD]">→</div>
                    <div className="bg-white/80 px-4 py-2 rounded-lg">Risk Assessment</div>
                    <div className="text-[#8EACCD]">→</div>
                    <div className="bg-white/80 px-4 py-2 rounded-lg">Score Generation</div>
                    <div className="text-[#8EACCD]">→</div>
                    <div className="bg-white/80 px-4 py-2 rounded-lg">Route Optimization</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Data Sources Section */}
          {activeTab === 'data' && (
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#D2E0FB]">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="h-6 w-6 text-[#8EACCD]" />
                  <h2 className="text-2xl font-bold text-[#8EACCD]">Our Data Sources</h2>
                </div>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We combine multiple reliable data sources to provide the most accurate and up-to-date safety 
                  information. Our system prioritizes data quality, transparency, and user privacy.
                </p>

                <div className="grid lg:grid-cols-2 gap-6">
                  {dataSources.map((source, index) => (
                    <div key={index} className="bg-[#F9F3CC]/40 rounded-xl p-6 border border-[#D7E5CA]">
                      <div className="flex items-start gap-4">
                        <div className="bg-[#8EACCD] p-3 rounded-xl">
                          <source.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-[#8EACCD] mb-2">{source.name}</h3>
                          <p className="text-gray-700 mb-4 leading-relaxed">{source.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-[#8EACCD]">Reliability:</span>
                              <span className={`px-2 py-1 rounded-full ${
                                source.reliability === 'High' 
                                  ? 'bg-green-100 text-green-700' 
                                  : 'bg-yellow-100 text-yellow-700'
                              }`}>
                                {source.reliability}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-[#8EACCD]">Updates:</span>
                              <span className="bg-[#D2E0FB] text-[#8EACCD] px-2 py-1 rounded-full">
                                {source.updateFreq}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Data Privacy Note */}
                <div className="mt-8 bg-[#D7E5CA]/50 rounded-xl p-6 border border-[#D7E5CA]">
                  <h3 className="text-lg font-semibold text-[#8EACCD] mb-3">Data Privacy & Security</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We prioritize user privacy and data security. All personal data is anonymized and encrypted. 
                    We never store individual location histories or personally identifiable information. Our 
                    data practices comply with GDPR, CCPA, and other privacy regulations.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Disclaimer Section */}
          {activeTab === 'disclaimer' && (
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#D2E0FB]">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="h-6 w-6 text-orange-500" />
                  <h2 className="text-2xl font-bold text-[#8EACCD]">Important Disclaimer</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Main Disclaimer */}
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-orange-800 mb-3">
                      Safety Scores Are Probabilistic Estimates
                    </h3>
                    <p className="text-orange-700 leading-relaxed">
                      Our safety scores are statistical predictions based on available data and should be used as 
                      one factor in your decision-making process. They cannot predict individual incidents or 
                      guarantee personal safety. Always trust your instincts and remain vigilant regardless of 
                      the safety score.
                    </p>
                  </div>

                  {/* Key Points */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-[#8EACCD]">What Our Scores Represent</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-[#8EACCD] rounded-full mt-2"></div>
                          <span>Statistical likelihood of safety based on historical data</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-[#8EACCD] rounded-full mt-2"></div>
                          <span>Relative comparison between different routes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-[#8EACCD] rounded-full mt-2"></div>
                          <span>General guidance for route planning</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-[#8EACCD]">What They Cannot Do</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <span>Predict specific incidents or guarantee safety</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <span>Replace personal judgment and situational awareness</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <span>Account for real-time dynamic situations</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Safety Recommendations */}
                  <div className="bg-[#D2E0FB]/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-[#8EACCD] mb-4">Always Remember</h3>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                      <div>
                        <h4 className="font-medium mb-2">Stay Alert</h4>
                        <p className="text-sm">Trust your instincts and remain aware of your surroundings, regardless of safety scores.</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Have Backup Plans</h4>
                        <p className="text-sm">Always have alternative routes and emergency contacts readily available.</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Use Multiple Tools</h4>
                        <p className="text-sm">Combine our app with other safety tools and resources for comprehensive protection.</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Report Issues</h4>
                        <p className="text-sm">Help improve community safety by reporting incidents and updating route information.</p>
                      </div>
                    </div>
                  </div>

                  {/* Legal Disclaimer */}
                  <div className="text-sm text-gray-600 bg-gray-50 rounded-xl p-6">
                    <p className="font-medium mb-2">Legal Notice:</p>
                    <p className="leading-relaxed">
                      By using this service, you acknowledge that safety scores are estimates only and that you 
                      assume full responsibility for your personal safety decisions. We are not liable for any 
                      incidents that may occur while using recommended routes. This service is provided "as is" 
                      without warranties of any kind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-[#8EACCD] to-[#7A9BC4] rounded-2xl p-8 text-center text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Navigate Safely?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of users who are making informed decisions about their routes every day.
          </p>
          <button className="bg-white text-[#8EACCD] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Start Using Safe Routes
          </button>
        </div>
      </div>
    </div>
  );
}