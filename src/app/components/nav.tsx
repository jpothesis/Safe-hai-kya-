"use client";

import Link from "next/link";
import { Shield } from "lucide-react";


export default function Nav() {
  return (
    <nav className="bg-white/80 backdrop-blur-2xl border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 md:h-10 md:w-10 text-slate-600" />
            <span className="text-2xl md:text-3xl font-bold text-slate-700">
              SafePath
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-slate-600 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/services" className="text-slate-600 hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
