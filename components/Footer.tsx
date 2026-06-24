'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Mark8Hub */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Mark8Hub</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-[#EA580C] transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-[#EA580C] transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-400 hover:text-[#EA580C] transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-slate-400 hover:text-[#EA580C] transition-colors text-sm">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-slate-400 hover:text-[#EA580C] transition-colors text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-slate-400 hover:text-[#EA580C] transition-colors text-sm">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-slate-400 hover:text-[#EA580C] transition-colors text-sm">
                  Deals
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-slate-400 hover:text-[#EA580C] transition-colors text-sm">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Sell */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Sell</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sell" className="text-slate-400 hover:text-[#EA580C] transition-colors text-sm">
                  Start Selling
                </Link>
              </li>
              <li>
                <Link href="/seller-dashboard" className="text-slate-400 hover:text-[#EA580C] transition-colors text-sm">
                  Seller Dashboard
                </Link>
              </li>
              <li>
                <Link href="/advertise" className="text-slate-400 hover:text-[#EA580C] transition-colors text-sm">
                  Advertise
                </Link>
              </li>
              <li>
                <Link href="/resell" className="text-slate-400 hover:text-[#EA580C] transition-colors text-sm">
                  Resell
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-slate-400 hover:text-[#EA580C] transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-[#EA580C] transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-[#EA580C] transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-[#EA580C] transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            &copy; 2026 Mark8Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;