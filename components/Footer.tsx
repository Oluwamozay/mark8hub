'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-slate-300 hover:text-[#EA580C] transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-slate-300 hover:text-[#EA580C] transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="text-slate-300 hover:text-[#EA580C] transition-colors">Careers</Link></li>
              <li><Link href="/press" className="text-slate-300 hover:text-[#EA580C] transition-colors">Press</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-slate-300 hover:text-[#EA580C] transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-[#EA580C] transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-slate-300 hover:text-[#EA580C] transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-slate-300 hover:text-[#EA580C] transition-colors">Terms</Link></li>
            </ul>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-white font-semibold mb-4">Marketplace</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-slate-300 hover:text-[#EA580C] transition-colors">All Products</Link></li>
              <li><Link href="/products" className="text-slate-300 hover:text-[#EA580C] transition-colors">Categories</Link></li>
              <li><Link href="/resell" className="text-slate-300 hover:text-[#EA580C] transition-colors">Resell</Link></li>
              <li><Link href="/ads" className="text-slate-300 hover:text-[#EA580C] transition-colors">Advertise</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-[#EA580C] text-sm"
              />
              <button className="px-4 py-2 bg-[#EA580C] text-white rounded-lg font-medium text-sm hover:bg-[#d04d0a] transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-slate-300 hover:text-[#EA580C] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-[#EA580C] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-[#EA580C] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-center text-slate-400 text-sm">
            &copy; 2026 Mark8Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
