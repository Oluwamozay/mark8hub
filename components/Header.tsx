'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, MessageCircle, Bot, Menu, X } from 'lucide-react';

export default function Header() {
  const [cartCount] = useState(3);
  const [unreadMessages] = useState(2);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1E293B] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-[#EA580C]">Mark8Hub</Link>
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EA580C] text-sm" />
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/products" className="text-slate-300 hover:text-[#EA580C] transition-colors text-sm font-medium">Products</Link>
            <Link href="/resell" className="text-slate-300 hover:text-[#EA580C] transition-colors text-sm font-medium">Resell</Link>
            <Link href="/dashboard" className="text-slate-300 hover:text-[#EA580C] transition-colors text-sm font-medium">Dashboard</Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Link href="/cart" className="relative text-slate-300 hover:text-[#EA580C]">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">{cartCount}</span>}
            </Link>
            <Link href="/messages" className="relative text-slate-300 hover:text-[#EA580C]">
              <MessageCircle className="h-5 w-5" />
              {unreadMessages > 0 && <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">{unreadMessages}</span>}
            </Link>
            <Link href="/ai" className="text-slate-300 hover:text-[#EA580C]"><Bot className="h-5 w-5" /></Link>
            <div className="hidden md:flex items-center space-x-2 ml-2">
              <Link href="/auth/login" className="text-slate-300 hover:text-white transition-colors text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-slate-700">Login</Link>
              <Link href="/auth/signup" className="bg-[#EA580C] text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">Sign Up</Link>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-300 hover:text-white">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1E293B] border-t border-slate-700 px-4 py-4 space-y-3">
          <Link href="/products" className="block text-slate-300 hover:text-[#EA580C] py-2" onClick={() => setMobileMenuOpen(false)}>Products</Link>
          <Link href="/resell" className="block text-slate-300 hover:text-[#EA580C] py-2" onClick={() => setMobileMenuOpen(false)}>Resell</Link>
          <Link href="/dashboard" className="block text-slate-300 hover:text-[#EA580C] py-2" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
          <Link href="/messages" className="block text-slate-300 hover:text-[#EA580C] py-2" onClick={() => setMobileMenuOpen(false)}>Messages</Link>
          <Link href="/cart" className="block text-slate-300 hover:text-[#EA580C] py-2" onClick={() => setMobileMenuOpen(false)}>Cart ({cartCount})</Link>
          <div className="flex space-x-3 pt-2 border-t border-slate-700">
            <Link href="/auth/login" className="flex-1 text-center border border-slate-500 text-white py-2 rounded-lg text-sm" onClick={() => setMobileMenuOpen(false)}>Login</Link>
            <Link href="/auth/signup" className="flex-1 text-center bg-[#EA580C] text-white py-2 rounded-lg text-sm" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
}