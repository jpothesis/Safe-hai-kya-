"use client";

import React, { useState, useEffect } from "react";
import Nav from "./components/nav";

import {
  Search,
  Shield,
  MapPin,
  Brain,
  Route,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  Sparkles,
  Globe,
  Users,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  const [searchLocation, setSearchLocation] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSearch = () => {
    if (searchLocation.trim()) {
      alert(`Searching safety data for: ${searchLocation}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden relative">
      {/* Floating Gradient Follower */}
      <div
        className="fixed w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-slate-300/10 to-blue-300/10 rounded-full blur-3xl pointer-events-none z-0 transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      />

      <div className="relative z-10">
        <Nav />


        {/* Hero Section */}
        <section className="pt-20 md:pt-32 pb-20 px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-800 leading-tight tracking-tight mb-6">
            Find the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-blue-600 to-slate-600">
              Safest
            </span>{" "}
            Path for Your Journey
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Navigate with{" "}
            <span className="font-semibold text-slate-700">confidence</span>{" "}
            using cutting-edge AI safety insights.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border shadow-lg flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Where are you going today?"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border text-slate-700 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <button
              onClick={handleSearch}
              className="px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:from-slate-700 hover:to-slate-800 transition"
            >
              <div className="flex items-center justify-center gap-2">
                <Search className="h-5 w-5" />
                Check Safety
              </div>
            </button>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-800 mb-12">
            Three Steps to Safety
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <StepCard
              icon={<MapPin className="h-8 w-8 text-white" />}
              step="1"
              title="Enter Location"
              text="Simply type in your destination. Our system recognizes locations worldwide and provides instant suggestions."
            />
            <StepCard
              icon={<Brain className="h-8 w-8 text-white" />}
              step="2"
              title="AI Safety Score"
              text="Our advanced AI analyzes crime data, lighting, and crowd density to generate insights."
            />
            <StepCard
              icon={<Route className="h-8 w-8 text-white" />}
              step="3"
              title="Choose Route"
              text="Get multiple route options ranked by safety score."
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-white/70 backdrop-blur-xl border-t">
          <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="text-xl font-bold mb-4">SafePath</h3>
              <p className="text-slate-600 text-sm">
                Empowering safer journeys through cutting-edge AI technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <p className="text-slate-600 text-sm">support@safepath.com</p>
              <p className="text-slate-600 text-sm">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-4 text-slate-600">
                <Facebook />
                <Twitter />
                <Instagram />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <p className="text-slate-600 text-sm">Privacy Policy</p>
              <p className="text-slate-600 text-sm">Terms of Service</p>
            </div>
          </div>
          <p className="text-center text-slate-500 text-xs mt-8">
            © 2024 SafePath. AI-generated estimates. Stay alert.
          </p>
        </footer>
      </div>
    </div>
  );
}

function StepCard({
  icon,
  step,
  title,
  text,
}: {
  icon: React.ReactNode;
  step: string;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white/70 rounded-2xl p-6 shadow hover:shadow-lg transition">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 mb-4 text-white font-bold">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">
        Step {step}: {title}
      </h3>
      <p className="text-slate-600 text-sm">{text}</p>
    </div>
  );
}
