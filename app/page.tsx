'use client';

import { useState } from 'react';

const categories = [
  { name: 'Electronics', emoji: '🔌' },
  { name: 'Fashion', emoji: '👕' },
  { name: 'Food', emoji: '🍲' },
  { name: 'Agriculture', emoji: '🌾' },
  { name: 'Beauty', emoji: '💄' },
  { name: 'Automotive', emoji: '🚗' },
  { name: 'Real Estate', emoji: '🏠' },
  { name: 'Services', emoji: '🛠️' },
  { name: 'Books', emoji: '📚' },
  { name: 'Sports', emoji: '⚽' },
  { name: 'Health', emoji: '💊' },
  { name: 'Home', emoji: '🏡' },
  { name: 'Phones', emoji: '📱' },
  { name: 'Computing', emoji: '💻' },
  { name: 'Music', emoji: '🎵' },
  { name: 'Kids', emoji: '👶' },
];

const featuredProducts = [
  { name: 'Akwa Ochie', price: '₦15,000', image: '/products/akwa-chie.jpg' },
  { name: 'Ogbono', price: '₦3,500', image: '/products/ogbono.jpg' },
  { name: 'Abacha', price: '₦2,500', image: '/products/abacha.jpg' },
  { name: 'Isi Agu', price: '₦8,000', image: '/products/isi-agu.jpg' },
  { name: 'Nkwobi', price: '₦5,000', image: '/products/nkwobi.jpg' },
  { name: 'Cowleg Bag', price: '₦25,000', image: '/products/cowleg-bag.jpg' },
];

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="bg-[#1E293B] text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            The People's Market
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10">
            Empowering Ndigbo, Nigeria and Africa with a vibrant e-commerce marketplace built for our culture, our commerce, and our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#categories" className="btn-primary text-lg px-10 py-3 inline-block">
              Start Shopping
            </a>
            <a href="#sell" className="btn-outline text-lg px-10 py-3 inline-block border-white text-white hover:bg-white hover:text-[#1E293B]">
              Start Selling
            </a>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES SECTION ===== */}
      <section id="categories" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E293B] mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="card flex flex-col items-center justify-center p-6 cursor-pointer hover:shadow-md hover:border-[#EA580C] hover:border transition-all duration-200"
              >
                <span className="text-4xl mb-3">{cat.emoji}</span>
                <span className="text-sm font-semibold text-slate-700">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS SECTION ===== */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E293B] mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.name} className="card overflow-hidden group">
                <div className="h-56 bg-gradient-to-br from-[#FFF7ED] to-[#FED7AA] flex items-center justify-center">
                  <span className="text-6xl opacity-40 group-hover:opacity-70 transition-opacity">
                    🛍️
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{product.name}</h3>
                  <p className="text-[#EA580C] text-2xl font-bold mb-4">{product.price}</p>
                  <button className="btn-primary w-full">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SELLER CTA SECTION ===== */}
      <section id="sell" className="py-20 px-6 bg-[#EA580C]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become a Seller on Mark8Hub
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of African entrepreneurs. List your products, reach millions of customers, and grow your business with zero upfront fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field max-w-sm text-slate-900"
            />
            <button className="bg-white text-[#EA580C] px-8 py-2.5 rounded-lg font-bold text-lg hover:bg-orange-50 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#1E293B] text-slate-300 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Mark8Hub</h4>
            <p className="text-sm text-slate-400">
              The People's Market — connecting buyers and sellers across Nigeria and Africa.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Featured Items</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Sell</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Start Selling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seller Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-700 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Mark8Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}