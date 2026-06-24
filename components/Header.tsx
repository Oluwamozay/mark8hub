'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, MessageCircle, Bot, Menu, X } from 'lucide-react';

const Header = () => {
  const [cartCount] = useState(3);
  const [unreadMessages] = useState(2);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#1E293B] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="text-xl font-bold text-[#EA580C]">
          Mark8Hub
        </Link>

        {/* Center: Search (hidden on mobile) */}
        <div className="hidden md:flex items-center bg-slate-700 rounded-lg px-3 py-2 w-64">
          <Search className="text-slate-400 mr-2" size={18} />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent text-white placeholder-slate-400 outline-none w-full text-sm"
          />
        </div>

        {/* Right: Navigation (hidden on mobile) */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/products" className="text-slate-300 hover:text-[#EA580C] transition-colors text-sm">
            Products
          </Link>
          <Link href="/resell" className="text-slate-300 hover:text-[#EA580C] transition-colors text-sm">
            Resell
          </Link>
          <Link href="/dashboard" className="text-slate-300 hover:text-[#EA580C] transition-colors text-sm">
            Dashboard
          </Link>

          <div className="relative">
            <ShoppingCart className="text-slate-300 hover:text-[#EA580C] transition-colors cursor-pointer" size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#EA580C] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          <div className="relative">
            <MessageCircle className="text-slate-300 hover:text-[#EA580C] transition-colors cursor-pointer" size={20} />
            {unreadMessages > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#EA580C] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {unreadMessages}
              </span>
            )}
          </div>

          <Bot className="text-slate-300 hover:text-[#EA580C] transition-colors cursor-pointer" size={20} />

          <Link href="/auth/login">
            <button className="text-slate-300 hover:text-white transition-colors text-sm">Login</button>
          </Link>
          <Link href="/auth/signup">
            <button className="bg-[#EA580C] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#d04d0a] transition-colors">
              Signup
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1E293B] border-t border-slate-700 px-4 py-4 space-y-4">
          <div className="flex items-center bg-slate-700 rounded-lg px-3 py-2">
            <Search className="text-slate-400 mr-2" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent text-white placeholder-slate-400 outline-none w-full text-sm"
            />
          </div>
          <Link
            href="/products"
            className="block text-slate-300 hover:text-[#EA580C] transition-colors text-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/resell"
            className="block text-slate-300 hover:text-[#EA580C] transition-colors text-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            Resell
          </Link>
          <Link
            href="/dashboard"
            className="block text-slate-300 hover:text-[#EA580C] transition-colors text-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            Dashboard
          </Link>
          <div className="flex items-center space-x-4 pt-2">
            <div className="relative">
              <ShoppingCart className="text-slate-300" size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#EA580C] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="relative">
              <MessageCircle className="text-slate-300" size={20} />
              {unreadMessages > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#EA580C] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadMessages}
                </span>
              )}
            </div>
            <Bot className="text-slate-300" size={20} />
          </div>
          <div className="flex items-center space-x-4 pt-2">
            <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)}>
              <button className="text-slate-300 hover:text-white transition-colors text-sm">Login</button>
            </Link>
            <Link href="/auth/signup" onClick={() => setMobileMenuOpen(false)}>
              <button className="bg-[#EA580C] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#d04d0a] transition-colors">
                Signup
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;